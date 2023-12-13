import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, catchError, map, of, shareReplay, tap } from 'rxjs';
import { Venda } from 'src/app/models/vendas';
import { RegistrarvendaComponent } from '../registrarvenda/registrarvenda.component';
import { EditarvendaComponent } from '../editarvenda/editarvenda.component';
import { ExcluirvendaComponent } from '../excluirvenda/excluirvenda.component';
import { CookieService } from 'src/app/services/cookie.service';
import { AlertasComponent } from 'src/app/templates/alertas/alertas.component';
import { ViewVendasComponent } from '../view-vendas/view-vendas.component';

class Entry<T> {
  id: number;
  attributes: T;
}

class Response {
  data: Entry<Venda>[];
}

@Component({
  selector: 'app-listavendas',
  templateUrl: './listavendas.component.html',
  styleUrls: ['./listavendas.component.scss']
})
export class ListavendasComponent {
  prefixoUrlVendas = 'https://20232-artenamao-production.up.railway.app/api/vendas';
  public vendas$: Observable<Venda[]> | undefined;
  public error: any | undefined;
  public vendas : Venda[];
  private bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private http: HttpClient,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  headers() {
    const jwt = this.cookieService.getCookie('jwt');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${jwt}`);
    const opts = { headers: headers, params: { populate: '*' } };
    return opts;
  }


  getvendas(args?: string) {

    this.vendas$ = this.http
      .get<Response>(
        args ? `${this.prefixoUrlVendas}${args}` : this.prefixoUrlVendas,
        this.headers()
      )
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response: Response) => {
          response.data.forEach((venda) => {
            venda.attributes.id = venda.id;
          });
        }),
        map((response: Response) =>
          response.data.map((venda) => venda.attributes)
        ),
        shareReplay(1)
      );

    this.vendas$.subscribe(
    );
  }

  modalAdicionarVenda() {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-lg',
      initialState: {},
    };
    this.bsModalRef = this.modalService.show(
      RegistrarvendaComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getvendas();
    });
  }

  modalEditarVenda(venda: Venda, edicao: boolean) {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-lg',
      initialState: {
        venda: venda,
        edicao,
      },
    };
    this.bsModalRef = this.modalService.show(
      EditarvendaComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getvendas();
    });
  }

  modalViewVenda(venda: Venda) {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-lg',
      initialState: {
        venda: venda,
      },
    };
    this.bsModalRef = this.modalService.show(
      ViewVendasComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getvendas();
    });
  }

  modalExcluirVenda(venda:Venda) {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-md',
      initialState: {
        venda: venda
      },
    };
    this.bsModalRef = this.modalService.show(
      ExcluirvendaComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getvendas();
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error;

    return of();
  }

  diferencaData(data : string){
    var dataAtual = new Date();
    var dataEmDate = new Date(data);
    var timeStempDataAtual = dataAtual.getTime()
    var timeStempDataVenda = dataEmDate.getTime()
    var diferencaEmMili = timeStempDataAtual - timeStempDataVenda;
    var diferencaEmDias = Math.floor(diferencaEmMili / (1000 * 60 * 60 * 24));
    return diferencaEmDias;
  }

  formatarData(data: string) {
    const dia = data.slice(8,10);
    const mes = data.slice(5,7);
    const ano = data.slice(0,4);

    return dia + "-" + mes + "-" + ano;
  }

  modalAlertaProduto( prodAlerta: boolean) {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-md',
      initialState: {
        prodAlerta,
      },
    };
    this.bsModalRef = this.modalService.show(
      AlertasComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getvendas();
    });
  }

  ngOnInit(): void {
    this.getvendas();
  }
}
