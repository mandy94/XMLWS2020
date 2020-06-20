import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBookComponent } from './code-book.component';

describe('CodeBookComponent', () => {
  let component: CodeBookComponent;
  let fixture: ComponentFixture<CodeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
