import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private auth: LoginService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
