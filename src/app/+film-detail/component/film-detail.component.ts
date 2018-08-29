import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FindFilmService } from '../../core/find-film.service';
import { Subscription } from 'rxjs';
import { FilmResponse } from '../../shared/types/film.response';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  public film: FilmResponse;

  constructor(private route: ActivatedRoute, private filmService: FindFilmService) { }

  ngOnInit() {
    this.sub = this.filmService.getFilm(this.route.snapshot.params.id).subscribe(film => {
      this.film = film;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
