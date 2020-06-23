import { inject, InjectionToken } from '@angular/core';
import { APP_CONFIGURATION } from '../../configuration/tokens/app-configuration.token';
import { DogPicsConfiguration } from '../../dog-pics/interfaces/dog-pics-configuration';

export const CAT_FACTS_CONFIGURATION = new InjectionToken<DogPicsConfiguration>("Cat Facts Configuration", {
    providedIn: 'root',
    factory: () => inject(APP_CONFIGURATION).CatFacts
})