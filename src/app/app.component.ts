import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FindFilmService } from './core/find-film.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FilmResponse } from './shared/types/film.response';
import { StoreService } from './core/store.service';
import { SearchFilm } from './shared/types/searchFirm.response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}
