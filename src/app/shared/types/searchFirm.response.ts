import { FilmResponse } from './film.response';

export class SearchFirmResponse {
  Response: string;
  Search: SearchFilm[];
  totalResults: string;
}

export class SearchFilm {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
