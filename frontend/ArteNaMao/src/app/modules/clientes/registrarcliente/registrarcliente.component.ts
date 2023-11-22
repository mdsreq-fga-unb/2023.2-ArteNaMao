import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, of } from 'rxjs';
import { Cliente } from 'src/app/models/clientes';

@Component({
  selector: 'app-registrarcliente',
  templateUrl: './registrarcliente.component.html',
  styleUrls: ['./registrarcliente.component.scss']
})
export class RegistrarclienteComponent {
  public cliente: Cliente;
  public clienteForm: FormGroup;
  error: any | undefined;

  constructor(
    private bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nomeCliente: [null, Validators.required],
      sobreCliente: [null, Validators.required],
      emailCliente: [null, [Validators.required, Validators.email]],
      phoneCliente: [
        null,
        [
          Validators.required,
          Validators.maxLength(11),
          Validators.minLength(11),
        ],
      ],
      cepCliente: [null, [Validators.required]],
      enderecoCliente: [null, Validators.required],
    });
  }

  Submit(): void {
    const cliente: Cliente = new Cliente();
    const baseUrl = `http://localhost:1338`;
    const getFieldsFromImageSelected = new FormData();


    cliente.Nome = this.clienteForm.get("nomeCliente")?.value;
    cliente.Sobrenome = this.clienteForm.get("sobreCliente")?.value;
    cliente.Email = this.clienteForm.get("emailCliente")?.value;
    cliente.Telefone = this.clienteForm.get("phoneCliente")?.value;
    cliente.CEP = this.clienteForm.get("cepCliente")?.value;
    cliente.Endereco = this.clienteForm.get("enderecoCliente")?.value;
    const body = {
      data: cliente,
    };
            this.http.post(`${baseUrl}/api/clientes/`, body).subscribe(
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

