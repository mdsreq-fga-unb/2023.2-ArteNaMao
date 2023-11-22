import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';
import { PrincipalComponent } from './modules/principal/principal.component';
import { HeaderComponent } from './templates/header/header.component';
import { ListaclientesComponent } from './modules/clientes/listaclientes/listaclientes.component';
import { FooterComponent } from './templates/footer/footer.component';
import { BsModalService } from "ngx-bootstrap/modal";
import { HttpClientModule } from "@angular/common/http";
import { RegistrarclienteComponent } from './modules/clientes/registrarcliente/registrarcliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcluirclienteComponent } from './modules/clientes/excluircliente/excluircliente.component';
import { EditarClienteComponent } from './modules/clientes/editar-cliente/editar-cliente.component';
import { ListaprodutosComponent } from './modules/produtos/listaprodutos/listaprodutos.component';
import { RegistrarprodutoComponent } from './modules/produtos/registrarproduto/registrarproduto.component';
import { EditarprodutoComponent } from './modules/produtos/editarproduto/editarproduto.component';
import { ExcluirprodutoComponent } from './modules/produtos/excluirproduto/excluirproduto.component';
import { ListavendasComponent } from './modules/vendas/listavendas/listavendas.component';
import { RegistrarvendaComponent } from './modules/vendas/registrarvenda/registrarvenda.component';
import { EditarvendaComponent } from './modules/vendas/editarvenda/editarvenda.component';
import { ExcluirvendaComponent } from './modules/vendas/excluirvenda/excluirvenda.component';
import { ListatransacoesComponent } from './modules/financeiro/listatransacoes/listatransacoes.component';
import { RegistrartransacaoComponent } from './modules/financeiro/registrartransacao/registrartransacao.component';
import { EditartransacaoComponent } from './modules/financeiro/editartransacao/editartransacao.component';
import { ExcluirtransacaoComponent } from './modules/financeiro/excluirtransacao/excluirtransacao.component';
import { LoginComponent } from './modules/login/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    HeaderComponent,
    ListaclientesComponent,
    FooterComponent,
    RegistrarclienteComponent,
    ExcluirclienteComponent,
    EditarClienteComponent,
    ListaprodutosComponent,
    RegistrarprodutoComponent,
    EditarprodutoComponent,
    ExcluirprodutoComponent,
    ListavendasComponent,
    RegistrarvendaComponent,
    EditarvendaComponent,
    ExcluirvendaComponent,
    ListatransacoesComponent,
    RegistrartransacaoComponent,
    EditartransacaoComponent,
    ExcluirtransacaoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
