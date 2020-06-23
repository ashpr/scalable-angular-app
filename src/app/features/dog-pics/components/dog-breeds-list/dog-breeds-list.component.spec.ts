import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBreedsListComponent } from './dog-breeds-list.component';

describe('DogBreedsListComponent', () => {
  let component: DogBreedsListComponent;
  let fixture: ComponentFixture<DogBreedsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogBreedsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogBreedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
