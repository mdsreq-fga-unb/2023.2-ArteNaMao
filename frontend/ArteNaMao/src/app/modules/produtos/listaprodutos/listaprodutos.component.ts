import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, catchError, map, of, shareReplay, tap } from 'rxjs';
import { Produto } from 'src/app/models/produtos';
import { RegistrarprodutoComponent } from '../registrarproduto/registrarproduto.component';
import { EditarprodutoComponent } from '../editarproduto/editarproduto.component';
import { ExcluirprodutoComponent } from '../excluirproduto/excluirproduto.component';

class Entry<T> {
  id: number;
  attributes: T;
}

class Response {
  data: Entry<Produto>[];
}

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.scss']
})
export class ListaprodutosComponent {

  prefixoUrlProdutos = 'http://localhost:1338/api/produtos';
  public produtos$: Observable<Produto[]> | undefined;
  public error: any | undefined;
  public produtos : Produto[];
  private bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}


  getprodutos(args?: string) {

    this.produtos$ = this.http
      .get<Response>(
       this.prefixoUrlProdutos
      )
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response: Response) => {
          response.data.forEach((produto) => {
            produto.attributes.id = produto.id;
          });
        }),
        map((response: Response) =>
          response.data.map((produto) => produto.attributes)
        ),
        shareReplay(1)
      );

    this.produtos$.subscribe(
    );
  }

  modalAdicionarProduto() {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-lg',
      initialState: {},
    };
    this.bsModalRef = this.modalService.show(
      RegistrarprodutoComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getprodutos();
    });
  }

  modalEditarProduto(produto: Produto, edicao: boolean) {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-lg',
      initialState: {
        produto: produto,
        edicao,
      },
    };
    this.bsModalRef = this.modalService.show(
      EditarprodutoComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getprodutos();
    });
  }

  modalExcluirProduto(produto:Produto) {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-md',
      initialState: {
        produto: produto
      },
    };
    this.bsModalRef = this.modalService.show(
      ExcluirprodutoComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getprodutos();
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error;

    return of();
  }

  ngOnInit(): void {
    this.getprodutos();
  }
}
