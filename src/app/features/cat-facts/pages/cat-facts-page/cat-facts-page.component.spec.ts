import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactsPageComponent } from './cat-facts-page.component';

describe('CatFactsPageComponent', () => {
  let component: CatFactsPageComponent;
  let fixture: ComponentFixture<CatFactsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatFactsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
