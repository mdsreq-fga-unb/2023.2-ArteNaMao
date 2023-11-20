import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, of } from 'rxjs';
import { Cliente } from 'src/app/models/clientes';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent {
  public cliente: Cliente;
  public clienteForm: FormGroup;
  error: any | undefined;
  public edicao : boolean;

  constructor(
    private bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nomeCliente: [{ value: this.cliente?.Nome, disabled: !this.edicao }, Validators.required],
      sobreCliente: [{ value: this.cliente?.Sobrenome, disabled: !this.edicao }, Validators.required],
      emailCliente: [{ value: this.cliente?.Email, disabled: !this.edicao }, [Validators.required, Validators.email]],
      phoneCliente: [
        { value: this.cliente?.Telefone, disabled: !this.edicao },
        [
          Validators.required,
          Validators.maxLength(11),
          Validators.minLength(11),
        ],
      ],
      cepCliente: [{ value: this.cliente?.CEP, disabled: !this.edicao }, [Validators.required]],
      enderecoCliente: [{ value: this.cliente?.Endereco, disabled: !this.edicao }, Validators.required],
    });
  }

  Submit($cliente: Cliente): void {
    const cliente: Cliente = new Cliente();
    const baseUrl = `http://localhost:1338`;
    const getFieldsFromImageSelected = new FormData();


    cliente.Nome = this.clienteForm.get("nomeCliente")?.value;
    cliente.Sobrenome = this.clienteForm.get("sobreCliente")?.value;
    cliente.Email = this.clienteForm.get("emailCliente")?.value;
    cliente.Telefone = this.clienteForm.get("phoneCliente")?.value;
    cliente.CEP = this.clienteForm.get("cepCliente")?.value;
    cliente.Endereco = this.clienteForm.get("enderecoCliente")?.value;
    cliente.Compras = 0;
    const body = {
      data: cliente,
    };
            this.http.put(`${baseUrl}/api/clientes/${$cliente.id}`, body).subscribe(
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
