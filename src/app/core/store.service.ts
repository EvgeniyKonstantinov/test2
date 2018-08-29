import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { FilmResponse } from '../shared/types/film.response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private films = new Subject<FilmResponse[]>();
  public storageKey = environment.localStorageKey;

  constructor() {
  }

  public SaveFilms(arr) {
    localStorage.setItem(this.storageKey, JSON.stringify(arr));
    this.loadFilms();
  }

  public loadFilms() {
    this.films.next(JSON.parse(localStorage.getItem(this.storageKey)));
  }

  public getFilms(): Observable<FilmResponse[]> {
    setTimeout(() => {
      this.loadFilms();
    }, 0);
    return this.films;
  }

}
