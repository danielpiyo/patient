import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mclservices } from '../../types/type';

@Injectable({
  providedIn: 'root',
})
export class MclinicservicesService {
  constructor(private _http: HttpClient) {}

  getAllServices(): Observable<Mclservices[]> {
    return this._http.get<Mclservices[]>(environment.baseURL + '/services');
  }

  getServiceById(id: any): Observable<Mclservices> {
    return this._http.get<Mclservices>(environment.baseURL + '/services/' + id);
  }
}
