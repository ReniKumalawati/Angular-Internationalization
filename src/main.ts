import './polyfills';
// import 'hammerjs';
// import { enableProdMode } from '@angular/core';
// import './polyfills'
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';

platformBrowserDynamic().bootstrapModule(AppModule);
