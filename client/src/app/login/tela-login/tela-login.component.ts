import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { StorageFunctions } from '../../general/storage';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {

  constructor(private authService: AuthService, private storageFunctions: StorageFunctions, private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (user != null) {
        this.router.navigate(['']);
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(e => {
        this.storageFunctions.setUser(e);
        setTimeout(function () {
          this.router.navigate(['/livros']);
        }.bind(this), 1000);
      });
  }

}
