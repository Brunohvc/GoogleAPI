import { Routes } from '@angular/router';

import { TelaLoginComponent } from './tela-login/tela-login.component';

export const loginRoutesConfig: Routes = [
    {
        path: '', component: TelaLoginComponent, data: {
            breadcrumb: 'Login'
        }
    }
];
