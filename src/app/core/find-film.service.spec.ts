import { TestBed, inject } from '@angular/core/testing';

import { FindFilmService } from './find-film.service';

describe('FindFilmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindFilmService]
    });
  });

  it('should be created', inject([FindFilmService], (service: FindFilmService) => {
    expect(service).toBeTruthy();
  }));
});
