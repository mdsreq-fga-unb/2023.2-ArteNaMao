import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, of } from 'rxjs';
import { Transacao } from 'src/app/models/transacao';
import { CookieService } from 'src/app/services/cookie.service';

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
    private cookieService : CookieService,
    private http: HttpClient,
  ) {}

  getHeaders(): HttpHeaders {
    const jwt = this.cookieService.getCookie("jwt");
    const headers = new HttpHeaders().set("Authorization", `Bearer ${jwt}`);
    return headers;
  }

  Submit(): void {
    const transacao: Transacao = new Transacao();
    const baseUrl = `https://20232-artenamao-production.up.railway.app/`;
    transacao.NomeTransacao =  this.transacaoForm.get("nomeTransacao")?.value;
    transacao.Valor = this.transacaoForm.get("valorTransacao")?.value;
    transacao.Descricao = this.transacaoForm.get("descricaoTransacao")?.value;
    transacao.TipoTransacao = "despesa";
    const data = new Date();
    const dataString = data.toDateString();
    const partesData = dataString.split(' ');
    const dataJunta = partesData[1]+"-"+partesData[3];
    if(dataJunta == "Dec-2023"){
      transacao.Data = "dec-2023"
    }
    if(dataJunta == "Jan-2024"){
      transacao.Data = "jan-2024"
    }
    console.log(dataJunta);
    const headers = this.getHeaders();
    const requestOptions = { headers };
    const body = {
      data: transacao,
    };
            this.http.post(`${baseUrl}api/transacaos/`, body,requestOptions).subscribe(
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

  limitarCaracteres(limite:number,id : string) {
    var inputCampo = document.getElementById(id) as HTMLInputElement;
    if (inputCampo?.value.length > limite) {
        inputCampo.value = inputCampo.value.slice(0, limite);
    }
  }

}
