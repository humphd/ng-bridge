import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BridgeGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  // Our guard will only work if the user is authenticated (valid token)
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      // Also send the user to the /login route so they can login
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
