import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://images-api.nasa.gov/search?q=ISS&media_type=image';

  constructor(private http: HttpClient) {}

  getSpaceStationImages(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}