import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = environment.apiUrl;
  private apiKey = '&apikey=' + environment.apiKey;

  constructor(private http: HttpClient) { }

  public get<T>(request: string): Observable<T> {
    return this.http.get<T>(this.apiUrl + request + this.apiKey);
  }


}
