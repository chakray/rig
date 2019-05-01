
Fbc
===

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

Code scaffolding
----------------

Run `ng generate component component-name --project fbc` to generate a new component. You can also use `ng generate directive\|pipe\|service\|class\|guard\|interface\|enum\|module --project fbc`.

> Note: Don't forget to add `--project fbc` or else it will be added to the default project in your `angular.json` file.

Build
-----

Run `ng build fbc` to build the project. The build artifacts will be stored in the `dist/` directory.

Publishing
----------

After building your library with `ng build fbc`, go to the dist folder `cd dist/fbc` and run `npm publish`.

Running unit tests
------------------

Run `ng test fbc` to execute the unit tests via [Karma](https://karma-runner.github.io).

Further help
------------

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Index

### Classes

* [App](classes/app.md)
* [Auth](classes/auth.md)
* [ClientMod](classes/clientmod.md)
* [FbcComponent](classes/fbccomponent.md)
* [FbcModule](classes/fbcmodule.md)
* [FbcService](classes/fbcservice.md)
* [Loader](classes/loader.md)
* [Sdk](classes/sdk.md)

### Variables

* [fwApps](#fwapps)
* [fwCore](#fwcore)

---

## Variables

<a id="fwapps"></a>

### `<Const>` fwApps

**● fwApps**: *`InjectionToken`<[App](classes/app.md)[]>* =  new InjectionToken<App[]>('fw.apps', {
  providedIn: 'root', factory: appFactory
})

*Defined in [wrap/loader.ts:25](https://github.com/chakray/rig/blob/55119ef/projects/chakray/fbc/src/wrap/loader.ts#L25)*

token for apps config

___
<a id="fwcore"></a>

### `<Const>` fwCore

**● fwCore**: *`InjectionToken`<[Sdk](classes/sdk.md)>* =  new InjectionToken<Sdk>('fw.core', {
  providedIn: 'root', factory: coreFactory
})

*Defined in [wrap/loader.ts:31](https://github.com/chakray/rig/blob/55119ef/projects/chakray/fbc/src/wrap/loader.ts#L31)*

token for library injection

___

