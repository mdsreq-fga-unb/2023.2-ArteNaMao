import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, catchError, map, of, shareReplay, tap } from 'rxjs';
import { Cliente } from 'src/app/models/clientes';
import { Produto } from 'src/app/models/produtos';
import { Transacao } from 'src/app/models/transacao';
import { Venda } from 'src/app/models/vendas';


class Entry<T> {
  id: number;
  attributes: T;
}
class ResponseCliente {
  data: Entry<Cliente>[];
}

class ResponseProduto2{
  data: Entry<Produto>
}
class ResponseProduto {
  data: Entry<Produto>[];
}


@Component({
  selector: 'app-registrarvenda',
  templateUrl: './registrarvenda.component.html',
  styleUrls: ['./registrarvenda.component.scss']
})
export class RegistrarvendaComponent {
  public produtos$: Observable<Produto[]> | undefined;
  public clientes$: Observable<Cliente[]> | undefined;
  public produto$: Observable<Produto> | undefined;
  public produtos : Produto[];
  public clientes : Cliente[];
  public transacao : Transacao;
  public transacaos : Transacao[];
  public vendas : Venda[];
  public venda : Venda;
  public vendaForm: FormGroup;
  public error: any | undefined;
  public prefixoUrlProdutos = 'http://localhost:1338/api/produtos';
  public prefixoUrlCliente = 'http://localhost:1338/api/clientes';

  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vendaForm = this.fb.group({
      nomeVenda: [null, Validators.required],
      nomeCliente: [null, Validators.required],
      nomeProduto: [null, Validators.required],
      valorVenda: [null, [Validators.required]],
      prazoVenda: [null, [Validators.required]],
    });

    this.getprodutos();
    this.getClientes();
  }

  Submit(): void {
    const venda: Venda = new Venda();
    const transacao : Transacao = new Transacao();
    const baseUrl = `http://localhost:1338`;


    venda.NomeCliente = this.vendaForm.get("nomeCliente")?.value[0];
    console.log(venda.NomeCliente)
    venda.NomeVenda = this.vendaForm.get("nomeVenda")?.value;
    venda.Produto = this.vendaForm.get("nomeProduto")?.value[0];
    venda.Valor = this.vendaForm.get("valorVenda")?.value;
    venda.Prazo = this.vendaForm.get("prazoVenda")?.value;
    transacao.NomeTransacao =  this.vendaForm.get("nomeVenda")?.value;
    transacao.Valor = this.vendaForm.get("valorVenda")?.value;
    transacao.Descricao =  venda.Produto + " vendido para "+ venda.NomeCliente;
    transacao.TipoTransacao = "venda";
    const body = {
      data: venda,
    };

    const body2 = {
      data: transacao,
    }
            this.http.post(`${baseUrl}/api/vendas/`, body).subscribe(
              () => {
                this.bsModalRef.hide();
              },
              (error) => {
                this.handleError(error);
              }
            );

            this.http.post(`${baseUrl}/api/transacaos/`, body2).subscribe(
              () => {
              },
              (error) => {
                this.handleError(error);
              }
            );
  }

  getprodutos(args?: string) {

    this.produtos$ = this.http
      .get<ResponseProduto>(
       this.prefixoUrlProdutos
      )
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response: ResponseProduto) => {
          response.data.forEach((produto) => {
            produto.attributes.id = produto.id;
          });
        }),
        map((response: ResponseProduto) =>
          response.data.map((produto) => produto.attributes)
        ),
        shareReplay(1)
      );

    this.produtos$.subscribe(
    );
  }


  getClientes(args?: string) {

    this.clientes$ = this.http
      .get<ResponseCliente>(
       this.prefixoUrlCliente
      )
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response: ResponseCliente) => {
          response.data.forEach((cliente) => {
            cliente.attributes.id = cliente.id;
          });
        }),
        map((response: ResponseCliente) =>
          response.data.map((cliente) => cliente.attributes)
        ),
        shareReplay(1)
      );

    this.clientes$.subscribe(
    );
  }

  

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error;

    return of();
  }

  Sair() {
    this.bsModalRef.hide();
  }


  
}
