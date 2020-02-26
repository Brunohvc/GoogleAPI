import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleRotasGuard } from './guards/controle-rotas.guard';
import { PaginaNaoEncontradaComponent } from './erros/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/authentication/auth-layout.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [ControleRotasGuard],
    canActivateChild: [ControleRotasGuard],
    children: [
      {
        path: '',
        redirectTo: 'livros',
        pathMatch: 'full'
      },
      {
        path: 'livros',
        loadChildren: './livros/livros.module#LivrosModule'
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      }
    ]
  },
  {
    path: 'not-found',
    component: PaginaNaoEncontradaComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
