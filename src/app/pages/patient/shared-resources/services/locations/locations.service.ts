import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Locations, UserToken } from '../../types/type';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private _http: HttpClient) {}

  getLocations(): Observable<Locations[]> {
    return this._http.get<Locations[]>(environment.baseURL + '/locations');
  }
}
