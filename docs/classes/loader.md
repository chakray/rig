[@chakray/fbc](../README.md) > [Loader](../classes/loader.md)

# Class: Loader

library loader

## Hierarchy

**Loader**

## Index

### Constructors

* [constructor](loader.md#constructor)

### Properties

* [debug](loader.md#debug)

### Accessors

* [apps](loader.md#apps)
* [core](loader.md#core)

### Methods

* [addApp](loader.md#addapp)
* [getApp](loader.md#getapp)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Loader**(_apps: *[App](app.md)[]*, _core: *[Sdk](sdk.md)*): [Loader](loader.md)

*Defined in [wrap/loader.ts:55](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/loader.ts#L55)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| _apps | [App](app.md)[] |  library apps config collection |
| _core | [Sdk](sdk.md) |  library |

**Returns:** [Loader](loader.md)

___

## Properties

<a id="debug"></a>

###  debug

**● debug**: *`boolean`* = false

*Defined in [wrap/loader.ts:43](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/loader.ts#L43)*

set to true to enable debug mode

___

## Accessors

<a id="apps"></a>

###  apps

**get apps**(): [App](app.md)[]

*Defined in [wrap/loader.ts:53](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/loader.ts#L53)*

**Returns:** [App](app.md)[]
apps config

___
<a id="core"></a>

###  core

**get core**(): [Sdk](sdk.md)

*Defined in [wrap/loader.ts:47](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/loader.ts#L47)*

**Returns:** [Sdk](sdk.md)
library instance

___

## Methods

<a id="addapp"></a>

###  addApp

▸ **addApp**(name: *`any`*, cfg: *`any`*): `void`

*Defined in [wrap/loader.ts:68](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/loader.ts#L68)*

*__remark__*: add single app at runtime

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `any` |  custom app name |
| cfg | `any` |  respective config for the app |

**Returns:** `void`

___
<a id="getapp"></a>

###  getApp

▸ **getApp**(name?: *`string`*): `App`

*Defined in [wrap/loader.ts:76](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/loader.ts#L76)*

*__remark__*: get library app information by its name

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` name | `string` |  defaultApp |  custom app name |

**Returns:** `App`
lib app info

___

