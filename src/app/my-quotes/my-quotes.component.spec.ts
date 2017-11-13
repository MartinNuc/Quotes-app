import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MyQuotesComponent } from './my-quotes.component';
import { QuoteComponent } from '../quote/quote.component';
import { FavoriteQuotesService } from '../favorite-quotes.service';
import { Observable } from 'rxjs/Observable';
import { Quote } from '../quote';

import 'rxjs/add/observable/from';
import { By } from '@angular/platform-browser';

describe('MyQuotesComponent', () => {
  let component: MyQuotesComponent;
  let fixture: ComponentFixture<MyQuotesComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyQuotesComponent,
        QuoteComponent
      ],
      providers: [
        { provide: FavoriteQuotesService, useValue: {
          list() {}
        }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should display multiple quotes', fakeAsync(() => {
    const favoriteQuotesService = fixture.debugElement.injector.get(FavoriteQuotesService);
    spyOn(favoriteQuotesService, 'list').and.returnValue(Promise.resolve([
      {
        ID: 1,
        content: 'Quote1',
        title: 'Martin Nuc',
        favorite: false
      },
      {
        ID: 2,
        content: 'Quote2',
        title: 'Martin Nuc',
        favorite: false
      }
    ]));
    tick();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('app-quote')).length).toBe(2);
  }));
});
