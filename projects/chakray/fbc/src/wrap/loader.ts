import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Sdk, App } from './sdk';

const defaultApp = 'main';

export function appFactory() {
  return [new App()];
}
export function coreFactory() {
  return new Sdk();
}

export const fwApps = new InjectionToken<App[]>('fw.apps', {
  providedIn: 'root', factory: appFactory
});
export const fwCore = new InjectionToken<Sdk>('fw.core', {
  providedIn: 'root', factory: coreFactory
});

@Injectable({ providedIn: 'root' })
export class Loader {
  debug = false;
  get core() {
    return this._core;
  }
  get apps() {
    return this._apps;
  }
  constructor(@Inject(fwApps) private _apps: App[],
              @Inject(fwCore) private _core: Sdk) {
  }
  addApp(name, cfg) {
    this.core.initializeApp(cfg, name);
  }
  getApp(name = defaultApp) {
    return this.core.apps.find(a => a.name === name);
  }
}
