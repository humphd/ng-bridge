import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  // If we have a token, it will be in localStorage.
  private getToken(): string {
    return localStorage.getItem('token');
  }

  // A user is Authenticated if we have a non-expired token.
  isAuthenticated(): boolean {
    const token = this.getToken();

    // Do we have a token?
    if (!token) {
      return false;
    }

    // Is the token expired?
    const isExpired = this.jwtHelper.isTokenExpired(token);

    // If not expired, then we're isAuthenticated
    return !isExpired;
  }

  // A way to get user info out of the current token (e.g., to show who is logged in)
  getUser(): User {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    // Decode the token so we can get the payload
    const payload = this.jwtHelper.decodeToken(token);
    return {
      username: payload.sub,
      fullname: payload.name
    };
  }

  // A method for logging the user in.  We take care of putting the token
  // into storage as a side effect if the POST request succeeds and has one.
  login(user: User): Observable<any> {
    const url = `${environment.authUrl}/login`;
    return this.http.post<any>(url, user).pipe(
      tap(data => data.token && localStorage.setItem('token', data.token))
    );
  }
}
