import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentACarAdvertsComponent } from './rent-a-car-adverts.component';

describe('RentACarAdvertsComponent', () => {
  let component: RentACarAdvertsComponent;
  let fixture: ComponentFixture<RentACarAdvertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentACarAdvertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentACarAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
