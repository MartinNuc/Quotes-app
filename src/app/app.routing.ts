import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';

const routes: Routes = [
  { path: '', component: RandomQuoteComponent },
  { path: 'my', component: MyQuotesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
