import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FavoriteQuotesService } from '../favorite-quotes.service';
import { Quote } from '../quote';

@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyQuotesComponent implements OnInit {
  quotes: Promise<Quote[]>;

  constructor(public favoriteQuotesService: FavoriteQuotesService) { }

  ngOnInit() {
    this.quotes = this.favoriteQuotesService.list();
  }

}
