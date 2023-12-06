import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, catchError, of } from 'rxjs';
import { Produto } from 'src/app/models/produtos';
import { CookieService } from 'src/app/services/cookie.service';

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
    private cookieService : CookieService,
    private bsModalRef: BsModalRef,
  ) {}

  headers() {
    const jwt = this.cookieService.getCookie('jwt');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${jwt}`);
    const opts = { headers: headers, params: { populate: '*' } };
    return opts;
  }

  excluirProduto(produto : Produto){
    const baseUrl = `https://20232-artenamao-production.up.railway.app`;
    this.http
    .delete(`${baseUrl}/api/produtos/${produto.id}`, this.headers())
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
