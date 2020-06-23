import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPicPageComponent } from './dog-pic-page.component';

describe('DogPicPageComponent', () => {
  let component: DogPicPageComponent;
  let fixture: ComponentFixture<DogPicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogPicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogPicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
