import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, of } from 'rxjs';
import { Venda } from 'src/app/models/vendas';
import { CookieService } from 'src/app/services/cookie.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-view-vendas',
  templateUrl: './view-vendas.component.html',
  styleUrls: ['./view-vendas.component.scss']
})
export class ViewVendasComponent {
  public venda : Venda;
  public vendaForm: FormGroup;
  public error: any | undefined;

  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private http: HttpClient,
    private cookieService : CookieService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  getHeaders(): HttpHeaders {
    const jwt = this.cookieService.getCookie("jwt");
    const headers = new HttpHeaders().set("Authorization", `Bearer ${jwt}`);
    return headers;
  }

  headers() {
    const jwt = this.cookieService.getCookie('jwt');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${jwt}`);
    const opts = { headers: headers, params: { populate: '*' } };
    return opts;
  }

  ngOnInit(): void {
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error;

    return of();
  }

  Sair() {
    this.bsModalRef.hide();
  }

}
