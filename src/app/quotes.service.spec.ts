import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuotesService } from './quotes.service';

describe('QuotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuotesService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([QuotesService], (service: QuotesService) => {
    expect(service).toBeTruthy();
  }));
});
