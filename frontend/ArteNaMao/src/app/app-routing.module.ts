import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PrincipalComponent } from './modules/principal/principal.component';
import { ListaclientesComponent } from './modules/clientes/listaclientes/listaclientes.component';
import { ListaprodutosComponent } from './modules/produtos/listaprodutos/listaprodutos.component';


const routes: Routes = [
  {
    path: "main",
    component: PrincipalComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "clientes", component: ListaclientesComponent },
      {path : "produtos" , component: ListaprodutosComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
