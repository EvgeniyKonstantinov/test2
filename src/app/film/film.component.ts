import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../core/store.service';
import { debounceTime } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { SearchFilm } from '../shared/types/searchFirm.response';
import { FindFilmService } from '../core/find-film.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit, OnDestroy {

  public filmsSearch: SearchFilm[];
  public films: SearchFilm[];
  private sub: Subscription;
  public stateCtrl = new FormControl();

  public searchChange = new Subject<string>();

  constructor(private filmService: FindFilmService, private store: StoreService) {
  }

  ngOnInit() {
    this.searchFilms();
    this.sub = this.store.getFilms().subscribe(arr => {
      this.films = arr;
    });

  }

  public inputChange(event): void {
    const val = event.target.value;
    this.searchChange.next(val);
  }

  public searchFilms(): void {
    this.searchChange.pipe(debounceTime(300)).subscribe(item => {
      if (item.length > 0) {
        this.filmService.searchFilms(item).subscribe(films => {
          this.filmsSearch = films.Search;
        });
      }
    });
  }

  public filmSelected(event): void {
    if (this.films) {
      this.store.SaveFilms([...this.films, event.option.value]);
    } else {
      this.store.SaveFilms([event.option.value]);
    }
    this.stateCtrl.setValue('');
  }

  public removeFilm(film: SearchFilm) {
    this.films.splice(this.films.indexOf(film), 1);
    this.store.SaveFilms(this.films);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
