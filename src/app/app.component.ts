import { Component } from '@angular/core';
import { QuotesService } from './quotes.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<string[]>;

  constructor() {
    this.items = Observable.of(['ahoj', 'cau', 'nazdar']).do(console.log);
  }

}
