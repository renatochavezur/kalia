import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LookEventPage } from './look-event.page';

describe('LookEventPage', () => {
  let component: LookEventPage;
  let fixture: ComponentFixture<LookEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LookEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
