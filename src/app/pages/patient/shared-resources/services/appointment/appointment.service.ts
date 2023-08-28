import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BookedAppointments, UserToken } from '../../types/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private _http: HttpClient) {}

  getAllAppointments(
    tokenPayload: UserToken
  ): Observable<BookedAppointments[]> {
    return this._http.post<BookedAppointments[]>(
      `${environment.baseURL}/appointments`,
      tokenPayload
    );
  }
}
