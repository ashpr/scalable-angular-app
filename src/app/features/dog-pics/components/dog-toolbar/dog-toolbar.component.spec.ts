import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogToolbarComponent } from './dog-toolbar.component';

describe('DogToolbarComponent', () => {
  let component: DogToolbarComponent;
  let fixture: ComponentFixture<DogToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
