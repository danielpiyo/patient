import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clinician } from '../../types/type';

@Injectable({
  providedIn: 'root',
})
export class ClinicianService {
  constructor(private _http: HttpClient) {}

  getClinicians(): Observable<Clinician[]> {
    return this._http.get<Clinician[]>(environment.baseURL + '/clinicians');
  }

  getClinician(id: number): Observable<Clinician> {
    return this._http.get<Clinician>(environment.baseURL + '/clinicians/' + id);
  }
}
