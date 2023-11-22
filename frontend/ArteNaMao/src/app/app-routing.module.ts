import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modules/principal/principal.component';
import { ListaclientesComponent } from './modules/clientes/listaclientes/listaclientes.component';
import { ListaprodutosComponent } from './modules/produtos/listaprodutos/listaprodutos.component';
import { ListavendasComponent } from './modules/vendas/listavendas/listavendas.component';
import { ListatransacoesComponent } from './modules/financeiro/listatransacoes/listatransacoes.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login/login.component';


const routes: Routes = [
  {
    path: "main",
    component: PrincipalComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "clientes", component: ListaclientesComponent },
      {path : "produtos" , component: ListaprodutosComponent},
      {path : "vendas" , component: ListavendasComponent},
      {path : "financeiro" , component: ListatransacoesComponent},
    ],
  },
  {
    path: "" , component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
