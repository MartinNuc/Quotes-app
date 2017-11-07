import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Observable } from 'rxjs/Observable';
import { Quote } from '../quote';
import { FavoriteQuotesService } from '../favorite-quotes.service';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/do';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RandomQuoteComponent implements OnInit {
  quote$: Observable<Quote>;
  nextClick$ = new Subject<void>();

  constructor(public quotesService: QuotesService, public favoriteQuotesService: FavoriteQuotesService) { }

  ngOnInit() {
    this.quote$ = this.nextClick$.startWith(null).switchMap(() => this.quotesService.fetchRandomQuote())
      .switchMap((quote: Quote) => Observable.fromPromise(this.favoriteQuotesService.isFavorite(quote)),
      (quote: Quote, isFavorite: boolean) => {
        quote.favorite = isFavorite;
        return quote;
      });
  }

  addAsFavorite(quote: Quote) {
    this.favoriteQuotesService.add(quote)
      .then(() => quote.favorite = true);
  }

  removeFromFavorites(quote: Quote) {
    this.favoriteQuotesService.unfavor(quote)
      .then(() => quote.favorite = false);
  }

  next() {
    this.nextClick$.next();
  }
}
