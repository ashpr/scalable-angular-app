import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { DogBreedsDict } from '../interfaces/dog-breeds-dict';
import { DogPic } from '../interfaces/dog-pic';
import { DogPicApiResponse } from '../interfaces/dog-pic-api-response';
import { DogPicsConfiguration } from '../interfaces/dog-pics-configuration';
import { DogPicBuilder } from '../testing/dog-pic-builder';
import { DOG_PICS_CONFIGURATION } from '../tokens/dog-pics-configuration.token';
import { DogPicApiService } from './dog-pic-api.service';

describe('DogPicApiService', () => {
  let spectator: SpectatorService<DogPicApiService>;

  let configuration: DogPicsConfiguration;
  let httpController: HttpTestingController;

  const createService = createServiceFactory({
    service: DogPicApiService,
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      {
        provide: DOG_PICS_CONFIGURATION,
        useFactory: () => configuration
      }
    ]
  });

  beforeEach(() => {
    configuration = {
      API: 'http://fake-dog-pic-api.somewebsite.net'
    };

    spectator = createService();

    httpController = spectator.get(HttpTestingController);
  });

  it('should build', () => {
    expect(spectator.service).not.toBeUndefined();
  });

  describe('getRandomDogPic()', () => {
    let subscriptionSpy: jasmine.Spy;

    describe('when requesting dog pics', () => {
      beforeEach(() => {
        spectator.service.getRandomDogPic().subscribe(subscriptionSpy = jasmine.createSpy());
      });

      it('should hit API endpoint, return a dog pic', () => {
        const dogPic = (new DogPicBuilder()).build();
        const response: DogPicApiResponse<DogPic> = {
          message: dogPic,
          status: 'success'
        };
  
        httpController.expectOne('http://fake-dog-pic-api.somewebsite.net/breeds/image/random')
          .flush(response);
  
        expect(subscriptionSpy).toHaveBeenCalledWith(dogPic);
      });
    });
  });

  describe('getBreeds()', () => {
    let subscriptionSpy: jasmine.Spy;

    describe('when requesting breeds', () => {
      beforeEach(() => {
        spectator.service.getBreeds().subscribe(subscriptionSpy = jasmine.createSpy());
      })

      it('should hit API endpoint, return breeds', () => {
        const breeds: DogBreedsDict = {
          "poodle": [
              "miniature",
              "standard",
              "toy"
          ],
          "pug": []
        };
  
        const response: DogPicApiResponse<DogBreedsDict> = {
          message: breeds,
          status: 'success'
        };
  
        httpController.expectOne('http://fake-dog-pic-api.somewebsite.net/breeds/list/all')
          .flush(response);
  
        expect(subscriptionSpy).toHaveBeenCalledWith(breeds);
      });
    });
  });
});