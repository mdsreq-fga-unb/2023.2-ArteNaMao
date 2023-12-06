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
import { RegistrarclienteComponent } from '../registrarcliente/registrarcliente.component';
import { ExcluirclienteComponent } from '../excluircliente/excluircliente.component';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { CookieService } from 'src/app/services/cookie.service';



class Entry<T> {
  id: number;
  attributes: T;
}

class Response {
  data: Entry<Cliente>[];
}



@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.scss']
})
export class ListaclientesComponent  {
  prefixoUrlCliente = 'https://20232-artenamao-production.up.railway.app/api/clientes';
  public clientes$: Observable<Cliente[]> | undefined;
  public error: any | undefined;
  public clientes : Cliente[];
  private bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private http: HttpClient,
    private fb: FormBuilder,
    private cookieService: CookieService,
    private router: Router
  ) {}

  headers() {
    const jwt = this.cookieService.getCookie('jwt');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${jwt}`);
    const opts = { headers: headers, params: { populate: '*' } };
    return opts;
  }


  getClientes(args?: string) {

    this.clientes$ = this.http
      .get<Response>(
        args ? `${this.prefixoUrlCliente}${args}` : this.prefixoUrlCliente,
        this.headers()
      )
      .pipe(
        catchError((error) => this.handleError(error)),
        tap((response: Response) => {
          response.data.forEach((cliente) => {
            cliente.attributes.id = cliente.id;
          });
        }),
        map((response: Response) =>
          response.data.map((cliente) => cliente.attributes)
        ),
        shareReplay(1)
      );

    this.clientes$.subscribe(
    );
  }

  modalAdicionarCliente() {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-lg',
      initialState: {},
    };
    this.bsModalRef = this.modalService.show(
      RegistrarclienteComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getClientes();
    });
  }

  modalEditarCliente(cliente: Cliente, edicao: boolean) {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-lg',
      initialState: {
        cliente: cliente,
        edicao,
      },
    };
    this.bsModalRef = this.modalService.show(
      EditarClienteComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getClientes();
    });
  }

  modalExcluirCliente(cliente:Cliente) {
    const modalConfig = {
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'modal-md',
      initialState: {
        cliente: cliente
      },
    };
    this.bsModalRef = this.modalService.show(
      ExcluirclienteComponent,
      modalConfig
    );
    this.bsModalRef.onHide?.subscribe(() => {
        this.getClientes();
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error;

    return of();
  }

  ngOnInit(): void {
    this.getClientes();
  }


}
