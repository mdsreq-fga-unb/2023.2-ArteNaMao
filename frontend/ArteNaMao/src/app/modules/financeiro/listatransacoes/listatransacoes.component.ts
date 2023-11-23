import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes';
import { RendererFactory2 } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, shareReplay, tap } from 'rxjs';
import { Transacao } from 'src/app/models/transacao';
import { RegistrartransacaoComponent } from '../registrartransacao/registrartransacao.component';
import { EditartransacaoComponent } from '../editartransacao/editartransacao.component';
import { ExcluirtransacaoComponent } from '../excluirtransacao/excluirtransacao.component';


class Entry<T> {
  id: number;
  attributes: T;
}

class Response {
  data: Entry<Transacao>[];
}


@Component({
  selector: 'app-listatransacoes',
  templateUrl: './listatransacoes.component.html',
  styleUrls: ['./listatransacoes.component.scss']
})
export class ListatransacoesComponent {
  prefixoUrlTransacao = 'https://20232-artenamao-production.up.railway.app/api/transacaos';
  public transacaos$: Observable<Transacao[]> | undefined;
  public error: any | undefined;
  public transacaos : Transacao[];
  private bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}


  getTransacaos(args?: string) {

    this.transacaos$ = this.http
      .get<Response>(
       this.prefixoUrlTransacao
      )
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response: Response) => {
          response.data.forEach((transacao) => {
            transacao.attributes.id = transacao.id;
          });
        }),
        map((response: Response) =>
          response.data.map((transacao) => transacao.attributes)
        ),
        shareReplay(1)
      );

    this.transacaos$.subscribe(
    );
  }

  modalAdicionarTransacao() {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-lg',
      initialState: {},
    };
    this.bsModalRef = this.modalService.show(
      RegistrartransacaoComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getTransacaos();
    });
  }

  modalEditarTransacao(transacao: Transacao, edicao: boolean) {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-lg',
      initialState: {
        transacao: transacao,
        edicao,
      },
    };
    this.bsModalRef = this.modalService.show(
      EditartransacaoComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getTransacaos();
    });
  }

  modalExcluirTransacao(transacao:Transacao) {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-md',
      initialState: {
        transacao: transacao
      },
    };
    this.bsModalRef = this.modalService.show(
      ExcluirtransacaoComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getTransacaos();
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error;

    return of();
  }

  ngOnInit(): void {
    this.getTransacaos();
  }
}
