import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload } from '../../types/type';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userLoggedIn = new Subject<boolean>();
  private inactivityTimeout: number = 300000; // 5 minutes in milliseconds
  private timer: any;
  private isAuthenticated = false;

  constructor(private _http: HttpClient, private router: Router) {
    this.userLoggedIn.next(false);
  }

  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn.next(userLoggedIn);
  }

  getUserLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }

  logIn(logiPaylod: LoginPayload): Observable<LoginPayload> {
    this.isAuthenticated = true;
    return this._http.post<LoginPayload>(
      `${environment.baseURL}/signin`,
      logiPaylod
    );
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.logout();
    }, this.inactivityTimeout);
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('currentToken');
    localStorage.removeItem('currentUser');
    window.history.pushState({}, '', '');
    this.setUserLoggedIn(false);
    localStorage.clear();
    this.router.navigate(['']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
