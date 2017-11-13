import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomQuoteComponent } from './random-quote.component';
import { QuotesService } from '../quotes.service';
import { FavoriteQuotesService } from '../favorite-quotes.service';
import { QuoteComponent } from '../quote/quote.component';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/empty';

class QuotesServiceStub {
  fetchRandomQuote() {
    return Observable.empty();
  }
}

class FavoriteQuotesServiceStub {

}

describe('RandomQuoteComponent', () => {
  let component: RandomQuoteComponent;
  let fixture: ComponentFixture<RandomQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RandomQuoteComponent,
        QuoteComponent
      ],
      providers: [
        { provide: QuotesService, useClass: QuotesServiceStub },
        { provide: FavoriteQuotesService, useClass: FavoriteQuotesServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
