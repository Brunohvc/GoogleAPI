import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { StorageFunctions } from '../../general/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private authService: AuthService, private storageFunctions: StorageFunctions, private router: Router) { }

  user: SocialUser;

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signOut(): void {
    this.authService.signOut().then(e => {
      this.router.navigate(['/login']);
    });
    this.storageFunctions.setUser(null);
  }

}
