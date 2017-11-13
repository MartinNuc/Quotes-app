import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './quote';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuotesService {
  prop: string;

  constructor(private http: HttpClient) {
  }

  fetchRandomQuote(): Observable<Quote> {
    return this.http.get<Quote[]>('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand')
      .map(array => array.shift());
  }
}
