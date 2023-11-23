import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, of } from 'rxjs';
import { Produto } from 'src/app/models/produtos';

@Component({
  selector: 'app-registrarproduto',
  templateUrl: './registrarproduto.component.html',
  styleUrls: ['./registrarproduto.component.scss']
})
export class RegistrarprodutoComponent {
  public produto: Produto;
  public produtoForm: FormGroup;
  error: any | undefined;

  constructor(
    private bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      nomeProduto: [null, Validators.required],
      descricaoProduto: [null, Validators.required],
      quantidadeProduto: [null, [Validators.required]],
      precoProduto: [null,[Validators.required,]],
      grandeProduto: [null, Validators.required],
    });
  }

  Submit(): void {
    const produto: Produto = new Produto();
    const baseUrl = `https://20232-artenamao-production.up.railway.app`;
    const getFieldsFromImageSelected = new FormData();


    produto.NomeProduto = this.produtoForm.get("nomeProduto")?.value;
    produto.Descricao = this.produtoForm.get("descricaoProduto")?.value;
    produto.Quantidade = this.produtoForm.get("quantidadeProduto")?.value;
    produto.Preco = this.produtoForm.get("precoProduto")?.value;
    produto.DescricaoGrande = this.produtoForm.get("grandeProduto")?.value;
    const body = {
      data: produto,
    };
            this.http.post(`${baseUrl}/api/produtos/`, body).subscribe(
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

  Sair() {
    this.bsModalRef.hide();
  }
}
