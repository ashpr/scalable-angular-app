import { TestBed } from '@angular/core/testing';
import { SpyObject, mockProvider } from '@ngneat/spectator';
import { DogPicApiService } from '../services/dog-pic-api.service';
import { DogBreedsCacheService } from '../services/dog-breeds-cache.service';
import { of } from 'rxjs';
import { DogBreedsDict } from '../interfaces/dog-breeds-dict';
import { dogBreedsInitializerProvider } from './dog-breeds-initializer.provider';

describe('DogBreedsCacheService', () => {
  let dogPicApiService: SpyObject<DogPicApiService>;
  let dogBreedsCacheService: SpyObject<DogBreedsCacheService>;
  let call: Function;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            mockProvider(DogPicApiService),
            mockProvider(DogBreedsCacheService)
        ]
    });

    dogPicApiService = TestBed.inject(DogPicApiService) as SpyObject<DogPicApiService>;
    dogBreedsCacheService = TestBed.inject(DogBreedsCacheService) as SpyObject<DogBreedsCacheService>;

    call = dogBreedsInitializerProvider.useFactory(dogPicApiService, dogBreedsCacheService);
  });

  describe('when dog pic API service is prepared to return breeds', () => {
    const dogBreeds: DogBreedsDict = {
        "schipperke": [],
        "schnauzer": [
            "giant",
            "miniature"
        ]
    };

    beforeEach(() => {
        dogPicApiService.getBreeds.andReturn(of(dogBreeds))
    });

    it('should set dogBreedsCache', async () => {
        await call();

        expect(dogBreedsCacheService.set).toHaveBeenCalledWith(dogBreeds);
    });
  });
});
