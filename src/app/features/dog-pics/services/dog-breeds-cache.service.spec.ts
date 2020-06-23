import { TestBed } from '@angular/core/testing';

import { DogBreedsCacheService } from './dog-breeds-cache.service';

describe('DogBreedsCacheService', () => {
  let service: DogBreedsCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogBreedsCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
