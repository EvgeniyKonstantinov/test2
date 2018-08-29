import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { FilmResponse } from '../shared/types/film.response';
import { SearchFilm, SearchFirmResponse } from '../shared/types/searchFirm.response';

@Injectable({
  providedIn: 'root'
})
export class FindFilmService {

  private apiGetByOneFilm = environment.apiGetOneFilm;
  private apiGetMultyFilms = environment.apiGetMultyFilms;

  constructor(private http: HttpService) {
  }

  public getFilm(id: string): Observable<FilmResponse> {
    const request = this.apiGetByOneFilm + id;
    return this.http.get<FilmResponse>(request);
  }

  public searchFilms(name: string): Observable<SearchFirmResponse> {
    const request = this.apiGetMultyFilms + name;
    return this.http.get<SearchFirmResponse>(request);
  }
}
