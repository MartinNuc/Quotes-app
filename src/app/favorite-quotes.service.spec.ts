import { TestBed, inject } from '@angular/core/testing';

import { FavoriteQuotesService } from './favorite-quotes.service';

describe('IndexDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteQuotesService]
    });
  });

  it('should be created', inject([FavoriteQuotesService], (service: FavoriteQuotesService) => {
    expect(service).toBeTruthy();
  }));
});
