import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { CatalogoComponent } from './catalogo/catalogo.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},  
  {path: 'solicitcao', component: SolicitacaoComponent},  
  {path: 'catalago', component: CatalogoComponent},  
  {path: '',
  redirectTo: '/home',
  pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
