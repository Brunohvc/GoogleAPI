import { Routes } from '@angular/router';

import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { ListaFavoritosComponent } from './lista-favoritos/lista-favoritos.component';

export const livrosRoutesConfig: Routes = [
    {
        path: '', component: TelaPrincipalComponent, data: {
            breadcrumb: 'Livros'
        }
    },
    {
        path: 'favoritos', component: ListaFavoritosComponent, data: {
            breadcrumb: 'Favoritos'
        }
    }
];

/*,
            children: [
                {
                    path: 'favoritos', component: ListaFavoritosComponent, data: {
                        breadcrumb: 'Favoritos'
                    },
                }]*/