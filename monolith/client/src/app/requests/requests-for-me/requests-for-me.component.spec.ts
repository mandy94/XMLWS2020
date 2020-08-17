import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsForMeComponent } from './requests-for-me.component';

describe('RequestsForMeComponent', () => {
  let component: RequestsForMeComponent;
  let fixture: ComponentFixture<RequestsForMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsForMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsForMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
