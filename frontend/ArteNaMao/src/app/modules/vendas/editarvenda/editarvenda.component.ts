import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, catchError, map, of, shareReplay, tap } from 'rxjs';
import { Cliente } from 'src/app/models/clientes';
import { Produto } from 'src/app/models/produtos';
import { Transacao } from 'src/app/models/transacao';
import { Venda } from 'src/app/models/vendas';

class Entry<T> {
  id: number;
  attributes: T;
}
class ResponseCliente {
  data: Entry<Cliente>[];
}

class ResponseProduto2{
  data: Entry<Produto>
}
class ResponseProduto {
  data: Entry<Produto>[];
}

@Component({
  selector: 'app-editarvenda',
  templateUrl: './editarvenda.component.html',
  styleUrls: ['./editarvenda.component.scss']
})
export class EditarvendaComponent {

  public produtos$: Observable<Produto[]> | undefined;
  public clientes$: Observable<Cliente[]> | undefined;
  public produto$: Observable<Produto> | undefined;
  public produtos : Produto[];
  public edicao : boolean;
  public clientes : Cliente[];
  public transacao : Transacao;
  public transacaos : Transacao[];
  public vendas : Venda[];
  public venda : Venda;
  public vendaForm: FormGroup;
  public error: any | undefined;
  public prefixoUrlProdutos = 'https://20232-artenamao-production.up.railway.app/api/produtos';
  public prefixoUrlCliente = 'https://20232-artenamao-production.up.railway.app/api/clientes';

  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vendaForm = this.fb.group({
      nomeVenda: [{ value: this.venda?.NomeVenda, disabled: !this.edicao }, Validators.required],
      nomeCliente: [{ value: this.venda?.NomeCliente, disabled: !this.edicao }, Validators.required],
      nomeProduto: [{ value: this.venda?.Produto, disabled: !this.edicao }, [Validators.required]],
      valorVenda: [{ value: this.venda?.Valor, disabled: !this.edicao }, [Validators.required]],
      prazoVenda: [{ value: this.venda?.Prazo, disabled: !this.edicao }, [Validators.required]],
    });

    this.getprodutos();
    this.getClientes();
    console.log(this.edicao);
  }

  Submit(venda$: Venda , transacao$:Transacao): void {
    const venda: Venda = new Venda();
    const transacao : Transacao = new Transacao();
    const baseUrl = `https://20232-artenamao-production.up.railway.app`;


    venda.NomeCliente = this.vendaForm.get("nomeCliente")?.value[0];
    venda.NomeVenda = this.vendaForm.get("nomeVenda")?.value;
    venda.Produto = this.vendaForm.get("nomeProduto")?.value[0];
    venda.Valor = this.vendaForm.get("valorVenda")?.value;
    venda.Prazo = this.vendaForm.get("prazoVenda")?.value;
    transacao.NomeTransacao =  this.vendaForm.get("nomeVenda")?.value;
    transacao.Valor = this.vendaForm.get("valorVenda")?.value;
    transacao.Descricao =  venda.Produto + "vendido para "+ venda.NomeCliente+" ao preço de "+ venda.Valor;
    const body = {
      data: venda,
    };

    const body2 = {
      data: transacao,
    }
            this.http.put(`${baseUrl}/api/vendas/${venda$.id}`, body).subscribe(
              () => {
                this.bsModalRef.hide();
              },
              (error) => {
                this.handleError(error);
              }
            );

            this.http.put(`${baseUrl}/api/transacaos/${transacao$.id}`, body2).subscribe(
              () => {
              },
              (error) => {
                this.handleError(error);
              }
            );
  }

  getprodutos(args?: string) {

    this.produtos$ = this.http
      .get<ResponseProduto>(
       this.prefixoUrlProdutos
      )
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response: ResponseProduto) => {
          response.data.forEach((produto) => {
            produto.attributes.id = produto.id;
          });
        }),
        map((response: ResponseProduto) =>
          response.data.map((produto) => produto.attributes)
        ),
        shareReplay(1)
      );

    this.produtos$.subscribe(
    );
  }


  getClientes(args?: string) {

    this.clientes$ = this.http
      .get<ResponseCliente>(
       this.prefixoUrlCliente
      )
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response: ResponseCliente) => {
          response.data.forEach((cliente) => {
            cliente.attributes.id = cliente.id;
          });
        }),
        map((response: ResponseCliente) =>
          response.data.map((cliente) => cliente.attributes)
        ),
        shareReplay(1)
      );

    this.clientes$.subscribe(
    );
  }

  

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error;

    return of();
  }

  Sair() {
    this.bsModalRef.hide();
  }

}
