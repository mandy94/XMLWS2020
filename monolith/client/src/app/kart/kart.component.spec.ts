import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartComponent } from './kart.component';

describe('KartComponent', () => {
  let component: KartComponent;
  let fixture: ComponentFixture<KartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
