import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { livrosRoutesConfig } from './livros.route';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { LivrosService } from '../services/livros.service';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { ListaFavoritosComponent } from './lista-favoritos/lista-favoritos.component';



@NgModule({
  declarations: [TelaPrincipalComponent, ListaLivrosComponent, ListaFavoritosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(livrosRoutesConfig),
    FormsModule
  ],
  providers: [LivrosService]
})
export class LivrosModule { }
