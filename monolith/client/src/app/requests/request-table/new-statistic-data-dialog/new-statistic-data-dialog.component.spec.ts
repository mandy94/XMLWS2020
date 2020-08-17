import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStatisticDataDialogComponent } from './new-statistic-data-dialog.component';

describe('NewStatisticDataDialogComponent', () => {
  let component: NewStatisticDataDialogComponent;
  let fixture: ComponentFixture<NewStatisticDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStatisticDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStatisticDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
