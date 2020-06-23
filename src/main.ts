import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';
import { APP_CONFIGURATION } from './app/features/configuration/tokens/app-configuration.token';

if (environment.production) {
  enableProdMode();
}

(async () => {
  const configResponse = await fetch('assets/appconfig.json');

  await platformBrowserDynamic(
    [
      { provide: APP_CONFIGURATION, useValue: await configResponse.json() }
    ]).bootstrapModule(AppModule);
})();