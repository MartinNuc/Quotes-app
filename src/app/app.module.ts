import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { AppRoutingModule } from './app.routing';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { QuotesService } from './quotes.service';
import { HttpClientModule } from '@angular/common/http';
import { QuoteComponent } from './quote/quote.component';
import { FavoriteQuotesService } from './favorite-quotes.service';

@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent,
    MyQuotesComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    QuotesService,
    FavoriteQuotesService,
    {
      provide: APP_INITIALIZER,
      useFactory: (favoriteQuotesService: FavoriteQuotesService) => () => favoriteQuotesService.init(),
      deps: [FavoriteQuotesService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
