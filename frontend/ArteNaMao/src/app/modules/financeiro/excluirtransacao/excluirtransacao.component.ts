import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, catchError, of } from 'rxjs';
import { Transacao } from 'src/app/models/transacao';

@Component({
  selector: 'app-excluirtransacao',
  templateUrl: './excluirtransacao.component.html',
  styleUrls: ['./excluirtransacao.component.scss']
})
export class ExcluirtransacaoComponent {

  public transacao : Transacao
  error: any | undefined;
  constructor(
    private http: HttpClient,
    private bsModalRef: BsModalRef,
  ) {}

  excluirTransacao(transacao : Transacao){
    const baseUrl = `http://localhost:1338`;
    this.http
    .delete(`${baseUrl}/api/transacaos/${transacao.id}`)
    .pipe(catchError((error) => this.handleError(error)))
    .subscribe((response) => {
      this.bsModalRef.hide();
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error.message;
    return of();
  }

  Sair() {
    this.bsModalRef.hide();
  }
}
