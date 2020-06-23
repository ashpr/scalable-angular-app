import { Injectable } from '@angular/core';
import { DogBreedsDict } from '../interfaces/dog-breeds-dict';

@Injectable({
  providedIn: 'root'
})
export class DogBreedsCacheService {

  private breeds: DogBreedsDict;

  public set(value: DogBreedsDict) {
    this.breeds = value;
  }

  public get() {
    return this.breeds;
  }

}
