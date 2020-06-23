import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { Subject } from 'rxjs';
import { CatFactsListComponent } from '../../components/cat-facts-list/cat-facts-list.component';
import { CatFact } from '../../interfaces/cat-fact';
import { CatFactsApiService } from '../../services/cat-facts-api.service';
import { CatFactsBuilder } from '../../testing/cat-fact-builder';
import { CatFactsPageComponent } from './cat-facts-page.component';

describe('CatFactsPageComponent', () => {
  let spectator: Spectator<CatFactsPageComponent>;
  let getCatFacts$: Subject<CatFact[]>;

  const createComponent = createComponentFactory({
    component: CatFactsPageComponent,
    declarations: [
      MockComponent(CatFactsListComponent)
    ],
    providers: [
      mockProvider(CatFactsApiService, {
        getCatFacts: () => getCatFacts$
      })
    ]
  });

  beforeEach(() => {
    getCatFacts$ = new Subject();

    spectator = createComponent()
  });

  it('should build', () => {
    expect(spectator.component).not.toBeUndefined();
  });

  describe('when waiting for cat facts', () => {
    it('should say loading', () => {
      expect(spectator.element.innerHTML).toContain('Loading');
    });

    it('should hide cat facts list', () => {
      expect(spectator.query(CatFactsListComponent)).toBeNull();
    });
  });

  describe('when got cat facts', () => {
    let catFacts: CatFact[];

    beforeEach(() => {
      catFacts = [
        new CatFactsBuilder().build(),
        new CatFactsBuilder().build()
      ];

      getCatFacts$.next(catFacts);
      getCatFacts$.complete();

      spectator.detectChanges();
    });

    it('should list cat facts', () => {
      const catFactsList = spectator.query(CatFactsListComponent);

      expect(catFactsList.catFacts).toBe(catFacts);
    });

    it('should hide loading message', () => {
      expect(spectator.element.innerHTML).not.toContain('Loading');
    });
  });
});