import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertDetailedComponent } from './advert-detailed.component';

describe('AdvertDetailedComponent', () => {
  let component: AdvertDetailedComponent;
  let fixture: ComponentFixture<AdvertDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
