import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, catchError, map, of, shareReplay, tap } from 'rxjs';
import { Venda } from 'src/app/models/vendas';
import { RegistrarvendaComponent } from '../registrarvenda/registrarvenda.component';
import { EditarvendaComponent } from '../editarvenda/editarvenda.component';
import { ExcluirvendaComponent } from '../excluirvenda/excluirvenda.component';

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
    private fb: FormBuilder,
    private router: Router
  ) {}


  getvendas(args?: string) {

    this.vendas$ = this.http
      .get<Response>(
       this.prefixoUrlVendas
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

  ngOnInit(): void {
    this.getvendas();
  }
}
