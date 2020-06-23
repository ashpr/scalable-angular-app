import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFrameComponent } from './dog-frame.component';

describe('DogFrameComponent', () => {
  let component: DogFrameComponent;
  let fixture: ComponentFixture<DogFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
