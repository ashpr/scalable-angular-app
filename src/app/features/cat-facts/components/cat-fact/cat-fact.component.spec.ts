import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { CatFactComponent } from './cat-fact.component';
import { CatFact } from '../../interfaces/cat-fact';
import { CatFactsBuilder } from '../../testing/cat-fact-builder';

describe('CatFactComponent', () => {
  let spectator: Spectator<CatFactComponent>;
  const createComponent = createComponentFactory(CatFactComponent);

  beforeEach(() => spectator = createComponent());

  it('should build', () => {
    expect(spectator.component).not.toBeUndefined();
  });

  describe('when a cat fact is provided', () => {
    let catFact: CatFact;

    beforeEach(() => {
      catFact = new CatFactsBuilder().build({text: 'Cats are cool yah'});
      spectator.setInput('catFact', catFact);
      spectator.detectChanges();
    });

    it('should show the cats text', () => {
      const catFactElement = spectator.query('.cat-fact__text');

      expect(catFactElement.innerHTML).toEqual('Cats are cool yah');
    })
  });
});