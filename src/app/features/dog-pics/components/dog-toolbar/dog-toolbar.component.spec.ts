import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { DogToolbarComponent } from './dog-toolbar.component';

describe('DogToolbarComponent', () => {
  let spectator: Spectator<DogToolbarComponent>;

  let newDogPicSpy: jasmine.Spy;

  const createComponent = createComponentFactory(DogToolbarComponent);

  beforeEach(() => {
    spectator = createComponent()

    spectator.output('newDogPic').subscribe(newDogPicSpy = jasmine.createSpy());
  });

  it('should build', () => {
    expect(spectator.component).not.toBeUndefined();
  });

  describe('when user clicks button', () => {
    beforeEach(() => {
      spectator.click('button');
    });

    it('should emit newDogPic', () => {
      expect(newDogPicSpy).toHaveBeenCalled();
    });
  });
});