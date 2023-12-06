import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, catchError, of } from 'rxjs';
import { Cliente } from 'src/app/models/clientes';
import { CookieService } from 'src/app/services/cookie.service';

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

  excluirCliente(cliente : Cliente){
    const baseUrl = `https://20232-artenamao-production.up.railway.app`;
    this.http
    .delete(`${baseUrl}/api/clientes/${cliente.id}`, this.headers())
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
