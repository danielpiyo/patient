import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nurse } from '../../types/type';

@Injectable({
  providedIn: 'root',
})
export class NurseService {
  constructor(private _http: HttpClient) {}

  getAllNurses(): Observable<Nurse[]> {
    return this._http.get<Nurse[]>(environment.baseURL + '/nurses');
  }
  getNurseById(id: number): Observable<Nurse> {
    return this._http.get<Nurse>(environment.baseURL + '/nurses/' + id);
  }
}
