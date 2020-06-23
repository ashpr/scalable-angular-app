import { APP_INITIALIZER, Provider } from '@angular/core';
import { DogBreedsCacheService } from '../services/dog-breeds-cache.service';
import { DogPicApiService } from '../services/dog-pic-api.service';

export function dogBreedsInitializerFactory(dogPicApiService: DogPicApiService, dogBreedsCacheService: DogBreedsCacheService) {
    return async () => {
        const breeds = await dogPicApiService.getBreeds().toPromise();

        dogBreedsCacheService.set(breeds);
    }
}

export const dogBreedsInitializerProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory: dogBreedsInitializerFactory,
    multi: true,
    deps: [DogPicApiService, DogBreedsCacheService]
  }