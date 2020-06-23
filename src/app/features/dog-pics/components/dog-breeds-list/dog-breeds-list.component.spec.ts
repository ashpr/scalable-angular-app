import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { DogBreedsDict } from '../../interfaces/dog-breeds-dict';
import { DOG_BREEDS } from '../../tokens/dog-breeds.token';
import { DogBreedsListComponent } from './dog-breeds-list.component';

describe('DogBreedsListComponent', () => {
  let spectator: Spectator<DogBreedsListComponent>;
  const dogBreeds: DogBreedsDict = {
    "appenzeller": [],
    "australian": [
        "shepherd"
    ],
    "setter": [
        "english",
        "gordon",
        "irish"
    ],
  }

  const createComponent = createComponentFactory({
    component: DogBreedsListComponent,
    providers: [
      {
        provide: DOG_BREEDS,
        useFactory: () => dogBreeds
      }
    ]
  });

  beforeEach(() => {
    spectator = createComponent()
  });

  it('should build', () => {
    expect(spectator.component).not.toBeUndefined();
  });

  it('should show a list of dog breeds', () => {
    const rows = spectator.queryAll('.dog-breeds-list__row');

    expect(rows.length).toEqual(3);
  });

  it('should list sub-breeds', () => {
    const firstRowValue = spectator.queryLast('.dog-breeds-list__row-value');

    expect(firstRowValue.innerHTML).toEqual("english,gordon,irish")
  });
});