import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, catchError, of } from 'rxjs';
import { Cliente } from 'src/app/models/clientes';

@Component({
  selector: 'app-excluircliente',
  templateUrl: './excluircliente.component.html',
  styleUrls: ['./excluircliente.component.scss']
})
export class ExcluirclienteComponent {
  public cliente : Cliente
  error: any | undefined;
  constructor(
    private http: HttpClient,
    private bsModalRef: BsModalRef,
  ) {}

  excluirCliente(cliente : Cliente){
    const baseUrl = `http://localhost:1338`;
    this.http
    .delete(`${baseUrl}/api/clientes/${cliente.id}`)
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
