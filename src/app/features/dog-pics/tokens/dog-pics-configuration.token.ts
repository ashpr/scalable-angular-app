import { inject, InjectionToken } from '@angular/core';
import { APP_CONFIGURATION } from '../../configuration/tokens/app-configuration.token';
import { DogPicsConfiguration } from '../interfaces/dog-pics-configuration';

export const DOG_PICS_CONFIGURATION = new InjectionToken<DogPicsConfiguration>("Cat Facts Configuration", {
    providedIn: 'root',
    factory: () => inject(APP_CONFIGURATION).DogPics
})