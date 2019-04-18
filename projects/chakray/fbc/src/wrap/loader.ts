import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Sdk, App } from './sdk';

/**
 * the default app name
 */
const defaultApp = 'main';

/**
 * @ignore
 */
export function appFactory() {
  return [new App()];
}
/**
 * @ignore
 */
export function coreFactory() {
  return new Sdk();
}

/**
 * token for apps config
 */
export const fwApps = new InjectionToken<App[]>('fw.apps', {
  providedIn: 'root', factory: appFactory
});
/**
 * token for library injection
 */
export const fwCore = new InjectionToken<Sdk>('fw.core', {
  providedIn: 'root', factory: coreFactory
});

/**
 * library loader
 */
@Injectable({ providedIn: 'root' })
export class Loader {
  /**
   * set to true to enable debug mode
   */
  debug = false;
  /**
   * @return library instance
   */
  get core() {
    return this._core;
  }
  /**
   * @return apps config
   */
  get apps() {
    return this._apps;
  }
  /**
   * @param _apps library apps config collection
   * @param _core library
   */
  constructor(@Inject(fwApps) private _apps: App[],
              @Inject(fwCore) private _core: Sdk) {
  }
  /**
   * @remark add single app at runtime
   * @param name custom app name
   * @param cfg respective config for the app
   */
  addApp(name, cfg) {
    this.core.initializeApp(cfg, name);
  }
  /**
   * @remark get library app information by its name
   * @param name custom app name
   * @return lib app info
   */
  getApp(name = defaultApp) {
    return this.core.apps.find(a => a.name === name);
  }
}
