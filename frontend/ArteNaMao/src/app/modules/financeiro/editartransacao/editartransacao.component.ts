import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, of } from 'rxjs';
import { Transacao } from 'src/app/models/transacao';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-editartransacao',
  templateUrl: './editartransacao.component.html',
  styleUrls: ['./editartransacao.component.scss']
})
export class EditartransacaoComponent {
  public transacao: Transacao;
  public edicao : boolean;
  public transacaoForm: FormGroup;
  error: any | undefined;

  constructor(
    private bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private cookieService : CookieService,
    private http: HttpClient,
  ) {}

  getHeaders(): HttpHeaders {
    const jwt = this.cookieService.getCookie("jwt");
    const headers = new HttpHeaders().set("Authorization", `Bearer ${jwt}`);
    return headers;
  }

  Submit($transacao : Transacao): void {
    const transacao: Transacao = new Transacao();
    const baseUrl = `https://20232-artenamao-production.up.railway.app`;
    transacao.NomeTransacao =  this.transacaoForm.get("nomeTransacao")?.value;
    transacao.Valor = this.transacaoForm.get("valorTransacao")?.value;
    transacao.Descricao = this.transacaoForm.get("descricaoTransacao")?.value;
    transacao.TipoTransacao = "despesa";
    const headers = this.getHeaders(); 
    const requestOptions = { headers };
    const body = {
      data: transacao,
    };
            this.http.put(`${baseUrl}/api/transacaos/${$transacao.id}`, body, requestOptions).subscribe(
              () => {
                this.bsModalRef.hide();
              },
              (error) => {
                this.handleError(error);
              }
            );


  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error.message;
    return of();
  }

  ngOnInit(): void {
    this.transacaoForm = this.fb.group({
      nomeTransacao: [{ value: this.transacao?.NomeTransacao, disabled: !this.edicao }, Validators.required],
      descricaoTransacao: [{ value: this.transacao?.Descricao, disabled: !this.edicao }, Validators.required],
      valorTransacao: [{ value: this.transacao?.Valor, disabled: !this.edicao }, Validators.required],
    });
  }

  Sair() {
    this.bsModalRef.hide();
  }

}
