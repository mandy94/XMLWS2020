import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdvertsBarComponent } from './search-adverts-bar.component';

describe('SearchAdvertsBarComponent', () => {
  let component: SearchAdvertsBarComponent;
  let fixture: ComponentFixture<SearchAdvertsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdvertsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdvertsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
