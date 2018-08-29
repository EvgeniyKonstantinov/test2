import { FilmDetailModule } from './film-detail.module';

describe('FilmDetailModule', () => {
  let filmDetailModule: FilmDetailModule;

  beforeEach(() => {
    filmDetailModule = new FilmDetailModule();
  });

  it('should create an instance', () => {
    expect(filmDetailModule).toBeTruthy();
  });
});
