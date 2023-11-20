import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, catchError, of } from 'rxjs';
import { Produto } from 'src/app/models/produtos';

@Component({
  selector: 'app-excluirproduto',
  templateUrl: './excluirproduto.component.html',
  styleUrls: ['./excluirproduto.component.scss']
})
export class ExcluirprodutoComponent {
  public produto : Produto
  error: any | undefined;
  constructor(
    private http: HttpClient,
    private bsModalRef: BsModalRef,
  ) {}

  excluirProduto(produto : Produto){
    const baseUrl = `http://localhost:1338`;
    this.http
    .delete(`${baseUrl}/api/produtos/${produto.id}`)
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
