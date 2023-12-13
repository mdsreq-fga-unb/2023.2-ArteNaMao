import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, catchError, map, of, shareReplay, tap } from 'rxjs';
import { Transacao } from 'src/app/models/transacao';
import { CookieService } from 'src/app/services/cookie.service';

class Entry<T> {
  id: number;
  attributes: T;
}

class Response {
  data: Entry<Transacao>[];
}

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  prefixoUrlTransacao = 'https://20232-artenamao-production.up.railway.app/api/transacaos';
  public transacaos$: Observable<Transacao[]> | undefined;
  public error: any | undefined;
  public receita : number;
  public lucro : number;
  public gastos : number;
  public vendas : number;
  public despesas : number;
  public transacaos : Transacao[];
  public transacaoForm: FormGroup;


  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private bsModalRef: BsModalRef,
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.transacaoForm = this.fb.group({
      dataTransacao: [null, Validators.required],
    });
    this.getTransacaos();
  }

  headers() {
    const jwt = this.cookieService.getCookie('jwt');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${jwt}`);
    const opts = { headers: headers, params: { populate: '*' } };
    return opts;
  }


  getTransacaos(args?: string) {

    this.transacaos$ = this.http
      .get<Response>(
        args ? `${this.prefixoUrlTransacao}${args}` : this.prefixoUrlTransacao,
        this.headers()
      )
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response: Response) => {
          response.data.forEach((transacao) => {
            transacao.attributes.id = transacao.id;
          });
        }),
        map((response: Response) =>
          response.data.map((transacao) => transacao.attributes)
        ),
        shareReplay(1)
      );
  }

  gerarRelatorio(transacaos:Transacao[]){
    this.gastos = 0;
    this.receita = 0;
    this.lucro = 0;
    this.despesas = 0;
    this.vendas = 0;


    const data = this.transacaoForm.get("dataTransacao")?.value;
    for (let i = 0; i < transacaos.length; i++) {
     if(transacaos[i].Data == data){
      if(transacaos[i].TipoTransacao == "venda"){
        this.receita =+ this.receita + transacaos[i].Valor;
        this.vendas =this.vendas +  1;
      }
      if(transacaos[i].TipoTransacao == "despesa"){
        this.gastos = this.gastos + transacaos[i].Valor;
        this.despesas = this.despesas + 1;
      }
     }
    }
    this.lucro = this.receita - this.gastos;
  }




  Sair() {
    this.bsModalRef.hide();
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error.message;
    return of();
  }
}
