import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { CatFact } from '../../interfaces/cat-fact';
import { CatFactsBuilder } from '../../testing/cat-fact-builder';
import { CatFactComponent } from '../cat-fact/cat-fact.component';
import { CatFactsListComponent } from './cat-facts-list.component';

describe('CatFactsListComponent', () => {
  let spectator: Spectator<CatFactsListComponent>;

  const createComponent = createComponentFactory({
    component: CatFactsListComponent,
    declarations: [
      MockComponent(CatFactComponent)
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('should build', () => {
    expect(spectator.component).not.toBeUndefined();
  });

  describe('when a list of cat facts is provided', () => {
    let catFacts: CatFact[];

    beforeEach(() => {
      catFacts = [
        new CatFactsBuilder().build(),
        new CatFactsBuilder().build()
      ];
      spectator.setInput('catFacts', catFacts);
    });

    it('should show a list of cat fact items', () => {
      const catFactItems = getCatFactItems();

      expect(catFactItems.length).toEqual(2);
    });
  });

  describe('when no cat facts are provided', () => {
    beforeEach(() => {
      spectator.setInput('catFacts', []);
      spectator.detectChanges();
    });

    it('should have no items', () => {
      const catFactItems = getCatFactItems();

      expect(catFactItems.length).toEqual(0);
    });

    it('should show a message', () => {
      expect(spectator.element.innerHTML).toContain('No cat facts!');
    });
  });

  function getCatFactItems() {
    return spectator.queryAll(CatFactComponent)
  };
});