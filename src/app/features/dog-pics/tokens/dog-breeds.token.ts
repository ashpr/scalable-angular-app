import { inject, InjectionToken } from '@angular/core';
import { DogBreedsDict } from '../interfaces/dog-breeds-dict';
import { DogBreedsCacheService } from '../services/dog-breeds-cache.service';

export const DOG_BREEDS = new InjectionToken<DogBreedsDict>("Dog Breeds", {
    providedIn: 'root',
    factory: () => inject(DogBreedsCacheService).get()
})