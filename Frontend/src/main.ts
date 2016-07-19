import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HeroesAppComponent, environment } from './app/';
import { Http, HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(HeroesAppComponent, [HTTP_PROVIDERS]);
