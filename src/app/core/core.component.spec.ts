import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { CoreComponent } from './core.component';

describe('CoreComponent', () => {
  let spectator: Spectator<CoreComponent>;
  const createComponent = createComponentFactory({
    component: CoreComponent,
    imports: [
      RouterTestingModule
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('should build', () => {
    expect(spectator.component).not.toBeUndefined();
  });
});