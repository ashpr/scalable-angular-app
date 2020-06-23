import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { DogFrameComponent } from './dog-frame.component';

describe('DogFrameComponent', () => {
  let spectator: Spectator<DogFrameComponent>;

  const createComponent = createComponentFactory(DogFrameComponent);

  beforeEach(() => {
    spectator = createComponent()
  });

  it('should build', () => {
    expect(spectator.component).not.toBeUndefined();
  });
});