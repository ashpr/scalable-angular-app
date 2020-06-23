import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactsListComponent } from './cat-facts-list.component';

describe('CatFactsListComponent', () => {
  let component: CatFactsListComponent;
  let fixture: ComponentFixture<CatFactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatFactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
