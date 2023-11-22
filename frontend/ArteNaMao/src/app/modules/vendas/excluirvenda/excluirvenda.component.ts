import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, catchError, of } from 'rxjs';
import { Venda } from 'src/app/models/vendas';

@Component({
  selector: 'app-excluirvenda',
  templateUrl: './excluirvenda.component.html',
  styleUrls: ['./excluirvenda.component.scss']
})
export class ExcluirvendaComponent {
  public venda : Venda
  error: any | undefined;
  constructor(
    private http: HttpClient,
    private bsModalRef: BsModalRef,
  ) {}

  excluirVenda(venda : Venda){
    const baseUrl = `http://localhost:1338`;
    this.http
    .delete(`${baseUrl}/api/vendas/${venda.id}`)
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
