import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl = 'http://localhost:5000/api/locations'; // Adjust the base URL as necessary

  constructor(private http: HttpClient) { }

  getWeatherData(location: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${location}`);
  }
}