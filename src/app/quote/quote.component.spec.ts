import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QuoteComponent } from './quote.component';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display quote', () => {
    component.quote = {
      ID: 123,
      title: 'Martin',
      content: 'This is my quote',
      favorite: false
    };
    fixture.detectChanges();

    expect(element.querySelector('.title').textContent).toContain('Martin');
    expect(element.querySelector('.content').textContent).toContain('This is my quote');
  });
});
