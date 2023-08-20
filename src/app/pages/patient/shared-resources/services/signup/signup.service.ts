import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OnboardPayload, SignupPayload } from '../../types/type';
import { environment } from '../../../../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private _http: HttpClient, private router: Router) {}

  signUp(signUpPaylod: SignupPayload): Observable<SignupPayload> {
    return this._http.post<SignupPayload>(
      `${environment.baseURL}/signup`,
      signUpPaylod
    );
  }

  onBoard(onboardPayload: OnboardPayload): Observable<OnboardPayload> {
    return this._http.post<OnboardPayload>(
      `${environment.baseURL}/register`,
      onboardPayload
    );
  }
}
