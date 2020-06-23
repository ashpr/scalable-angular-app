import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { DogBreedsDict } from '../interfaces/dog-breeds-dict';
import { DogPic } from '../interfaces/dog-pic';
import { DogPicApiResponse } from '../interfaces/dog-pic-api-response';
import { DogPicsConfiguration } from '../interfaces/dog-pics-configuration';
import { DOG_PICS_CONFIGURATION } from '../tokens/dog-pics-configuration.token';

@Injectable({
  providedIn: 'root'
})
export class DogPicApiService {

  constructor(
    @Inject(DOG_PICS_CONFIGURATION) private dogPicsConfiguration: DogPicsConfiguration,
    private httpClient: HttpClient
  ) { }

  public getRandomDogPic(): Observable<DogPic> {
    return this.httpClient.get<DogPicApiResponse<DogPic>>(`${this.dogPicsConfiguration.API}/breeds/image/random`).pipe(
      pluck('message')
    );
  }

  public getBreeds(): Observable<DogBreedsDict> {
    return this.httpClient.get<DogPicApiResponse<DogBreedsDict>>(`${this.dogPicsConfiguration.API}/breeds/list/all`).pipe(
      pluck('message')
    );
  }

}
