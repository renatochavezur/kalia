import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchEventPage } from './search-event.page';

describe('SearchEventPage', () => {
  let component: SearchEventPage;
  let fixture: ComponentFixture<SearchEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
