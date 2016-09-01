import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTES_PROVIDER } from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';


if (environment.production) {
  enableProdMode();
}
//Bootstrapping the components.
bootstrap(AppComponent, [APP_ROUTES_PROVIDER,HTTP_PROVIDERS]);

