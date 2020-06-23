import { InjectionToken } from '@angular/core';
import { AppConfiguration } from '../interfaces/app-configuration';

export const APP_CONFIGURATION = new InjectionToken<AppConfiguration>('App Configuration');