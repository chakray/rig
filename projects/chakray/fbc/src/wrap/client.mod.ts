import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { Sdk } from './sdk';
import { Loader } from './loader';

function debugAppInfo(sdk: Sdk) {
  console.log('firebase SDK version', sdk.SDK_VERSION);
  sdk.apps.forEach(a => {
    console.log('app: [', a.name, '] ', a.options);
  });
}

/**
 * @ignore
 */
export function fwinit() {
  this.apps.forEach(({ options, name }) => {
    this.addApp(name, options);
  });
  if (this.debug) {
    debugAppInfo(this.core);
  }
}

/**
 * @ignore
 */
export function init(ld: Loader) {
  return fwinit.bind(ld);
}

/**
 * this module helps referer to initialize loader during app init
 */
@NgModule({
  providers: [
    { provide: APP_INITIALIZER, useFactory: init, deps: [Loader], multi: true },
  ]
})
export class ClientMod {
}
