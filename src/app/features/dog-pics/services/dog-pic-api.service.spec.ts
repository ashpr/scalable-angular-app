import { TestBed } from '@angular/core/testing';

import { DogPicApiService } from './dog-pic-api.service';

describe('DogPicApiService', () => {
  let service: DogPicApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogPicApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
