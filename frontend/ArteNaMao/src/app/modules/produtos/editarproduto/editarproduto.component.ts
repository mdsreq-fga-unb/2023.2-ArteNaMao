import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, of } from 'rxjs';
import { Produto } from 'src/app/models/produtos';

@Component({
  selector: 'app-editarproduto',
  templateUrl: './editarproduto.component.html',
  styleUrls: ['./editarproduto.component.scss']
})
export class EditarprodutoComponent {

  public produto: Produto;
  public edicao: boolean;
  public produtoForm: FormGroup;
  error: any | undefined;

  constructor(
    private bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}


  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      nomeProduto: [{ value: this.produto?.NomeProduto, disabled: !this.edicao }, Validators.required],
      descricaoProduto: [{ value: this.produto?.Descricao, disabled: !this.edicao }, Validators.required],
      quantidadeProduto: [{ value: this.produto?.Quantidade, disabled: !this.edicao }, [Validators.required]],
      precoProduto: [{ value: this.produto?.Preco, disabled: !this.edicao },[Validators.required,]],
      grandeProduto: [{ value: this.produto?.DescricaoGrande, disabled: !this.edicao }, Validators.required],
    });
  }

  Submit($produto:Produto): void {
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
            this.http.put(`${baseUrl}/api/produtos/${$produto.id}`, body).subscribe(
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
