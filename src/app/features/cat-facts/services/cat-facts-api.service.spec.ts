import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { CatFactsConfiguration } from '../interfaces/cat-facts-configuration';
import { CatFactsBuilder } from '../testing/cat-fact-builder';
import { CAT_FACTS_CONFIGURATION } from '../tokens/cat-facts-configuration.token';
import { CatFactsApiService } from './cat-facts-api.service';
import { GetCatFactsResponse } from '../interfaces/get-cat-facts-response';

describe('CatFactsApiService', () => {
  let spectator: SpectatorService<CatFactsApiService>;

  let configuration: CatFactsConfiguration
  let httpController: HttpTestingController;

  const createService = createServiceFactory({
    service: CatFactsApiService,
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      {
        provide: CAT_FACTS_CONFIGURATION,
        useFactory: () => configuration
      }
    ]
  });

  beforeEach(() => {
    configuration = {
      API: 'http://fake-cat-api.somewebsite.net'
    };

    spectator = createService();

    httpController = spectator.get(HttpTestingController);
  });

  it('should build', () => {
    expect(spectator.service).not.toBeUndefined();
  });

  describe('getCatFacts()', () => {
    let subscriptionSpy: jasmine.Spy;

    describe('when requesting cat facts', () => {
      beforeEach(() => {
        spectator.service.getCatFacts().subscribe(subscriptionSpy = jasmine.createSpy());
      });

      it('should hit API endpoint, return cat facts', () => {
        const catFacts = [
          new CatFactsBuilder().build(),
          new CatFactsBuilder().build(),
          new CatFactsBuilder().build(),
          new CatFactsBuilder().build()
        ];
  
        const response: GetCatFactsResponse = {
          all: catFacts
        }
  
        httpController.expectOne('http://fake-cat-api.somewebsite.net/facts')
          .flush(response);
  
        expect(subscriptionSpy).toHaveBeenCalledWith(catFacts);
      });
    });
  });
});