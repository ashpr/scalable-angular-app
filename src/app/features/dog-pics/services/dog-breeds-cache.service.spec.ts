import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { DogBreedsDict } from '../interfaces/dog-breeds-dict';
import { DogBreedsCacheService } from './dog-breeds-cache.service';

describe('DogBreedsCacheService', () => {
  let spectator: SpectatorService<DogBreedsCacheService>;

  const createService = createServiceFactory(DogBreedsCacheService);

  beforeEach(() => {
    spectator = createService();
  });

  it('should build', () => {
    expect(spectator.service).not.toBeUndefined();
  });

  describe('when we set a the breeds', () => {
    let breeds: DogBreedsDict;

    beforeEach(() => {
      breeds = {
        "retriever": [
            "chesapeake",
            "curly",
            "flatcoated",
            "golden"
        ],
        "ridgeback": [
            "rhodesian"
        ]
      };

      spectator.service.set(breeds);
    });

    it('get() should return the breeds', () => {
      expect(spectator.service.get()).toBe(breeds);
    });
  });
});