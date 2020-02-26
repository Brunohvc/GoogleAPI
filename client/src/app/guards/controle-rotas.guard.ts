import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { StorageFunctions } from '../general/storage';

@Injectable({
  providedIn: 'root'
})
export class ControleRotasGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private authService: AuthService, private storageFunctions: StorageFunctions) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.authService.authState.subscribe((user) => {
      if (user == null && this.storageFunctions.getUser == null) {
        this.router.navigate(['/login']);
        return false;
      }
    });

    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }

}
