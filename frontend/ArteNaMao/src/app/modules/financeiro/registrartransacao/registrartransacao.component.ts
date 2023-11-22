import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, of } from 'rxjs';
import { Transacao } from 'src/app/models/transacao';

@Component({
  selector: 'app-registrartransacao',
  templateUrl: './registrartransacao.component.html',
  styleUrls: ['./registrartransacao.component.scss']
})
export class RegistrartransacaoComponent {

  public transacao: Transacao;
  public transacaoForm: FormGroup;
  error: any | undefined;

  constructor(
    private bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  Submit(): void {
    const transacao: Transacao = new Transacao();
    const baseUrl = `http://localhost:1338`;
    transacao.NomeTransacao =  this.transacaoForm.get("nomeTransacao")?.value;
    transacao.Valor = this.transacaoForm.get("valorTransacao")?.value;
    transacao.Descricao = this.transacaoForm.get("descricaoTransacao")?.value;
    transacao.TipoTransacao = "despesa";
    const body = {
      data: transacao,
    };
            this.http.post(`${baseUrl}/api/transacaos/`, body).subscribe(
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
      nomeTransacao: [null, Validators.required],
      descricaoTransacao: [null, Validators.required],
      valorTransacao: [null, Validators.required],
    });
  }

  Sair() {
    this.bsModalRef.hide();
  }

}
