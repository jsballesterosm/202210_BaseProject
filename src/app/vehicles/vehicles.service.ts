import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Vehicles } from './vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private apiUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getVehicles(): Observable<Vehicles[]> {
    return this.httpClient.get<Vehicles[]>(this.apiUrl);
  }
}
