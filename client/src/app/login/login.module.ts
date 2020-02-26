import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { loginRoutesConfig } from './login.route';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { StorageFunctions } from '../general/storage';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('167295399215-v1ioi8c4e1ib1kudie7a7tb58psnvgoi.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [TelaLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutesConfig),
    SocialLoginModule
  ],
  providers: [
    StorageFunctions,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class LoginModule { }
