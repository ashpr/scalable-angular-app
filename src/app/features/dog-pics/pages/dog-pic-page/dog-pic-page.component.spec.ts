import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { Subject } from 'rxjs';
import { DogBreedsListComponent } from '../../components/dog-breeds-list/dog-breeds-list.component';
import { DogFrameComponent } from '../../components/dog-frame/dog-frame.component';
import { DogToolbarComponent } from '../../components/dog-toolbar/dog-toolbar.component';
import { DogPic } from '../../interfaces/dog-pic';
import { DogPicApiService } from '../../services/dog-pic-api.service';
import { DogPicBuilder } from '../../testing/dog-pic-builder';
import { DogPicPageComponent } from './dog-pic-page.component';

describe('DogPicPageComponent', () => {
  let spectator: Spectator<DogPicPageComponent>;

  let getRandomDogPic$: Subject<DogPic>;

  const createComponent = createComponentFactory({
    component: DogPicPageComponent,
    providers: [
      mockProvider(DogPicApiService, {
        getRandomDogPic: () => getRandomDogPic$
      })
    ],
    declarations: [
      MockComponent(DogFrameComponent),
      MockComponent(DogToolbarComponent),
      MockComponent(DogBreedsListComponent)
    ]
  });

  beforeEach(() => {
    getRandomDogPic$ = new Subject();

    spectator = createComponent();
  });

  it('should build', () => {
    expect(spectator.component).not.toBeUndefined();
  });

  describe('when loading', () => {
    it('should show loading', () => {
      expect(spectator.element.innerHTML).toContain('Loading');
    });

    it('should not show dog frame', () => {
      expect(spectator.query(DogFrameComponent)).toBeNull();
    });
  });

  describe('when has a dog pic', () => {
    let dogPic: DogPic;

    beforeEach(() => {
      dogPic = new DogPicBuilder().build('http://dog-pic-image.dogpics.com/dog-pic.png');

      getRandomDogPic$.next(dogPic);
      getRandomDogPic$.complete();

      spectator.detectChanges();
    });

    it('should pass dog pic to frame', () => {
      const frame = spectator.query(DogFrameComponent);

      expect(frame).not.toBeNull();
      expect(frame.dogPicSrc).toEqual('http://dog-pic-image.dogpics.com/dog-pic.png')
    });
  });
});