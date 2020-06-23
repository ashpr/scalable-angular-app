import { TestBed } from '@angular/core/testing';

import { CatFactsApiService } from './cat-facts-api.service';

describe('CatFactsApiService', () => {
  let service: CatFactsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFactsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
