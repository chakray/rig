[@chakray/fbc](../README.md) > [Auth](../classes/auth.md)

# Class: Auth

wrapper for firebase.Auth

## Hierarchy

**Auth**

## Index

### Constructors

* [constructor](auth.md#constructor)

### Properties

* [state](auth.md#state)
* [token](auth.md#token)

### Methods

* [check](auth.md#check)
* [create](auth.md#create)
* [destroy](auth.md#destroy)
* [restore](auth.md#restore)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Auth**(auth: *`fb.auth.Auth`*): [Auth](auth.md)

*Defined in [wrap/auth.ts:16](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/auth.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| auth | `fb.auth.Auth` |

**Returns:** [Auth](auth.md)

___

## Properties

<a id="state"></a>

###  state

**● state**: *`Observable`<`fb.User` \| `null`>*

*Defined in [wrap/auth.ts:15](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/auth.ts#L15)*

___
<a id="token"></a>

###  token

**● token**: *`Observable`<`fb.User` \| `null`>*

*Defined in [wrap/auth.ts:16](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/auth.ts#L16)*

___

## Methods

<a id="check"></a>

###  check

▸ **check**(email: *`string`*): `Observable`<`any`>

*Defined in [wrap/auth.ts:25](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/auth.ts#L25)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| email | `string` |  valid email |

**Returns:** `Observable`<`any`>
observable sign in methods

___
<a id="create"></a>

###  create

▸ **create**(__namedParameters: *`object`*): `Observable`<`object`>

*Defined in [wrap/auth.ts:34](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/auth.ts#L34)*

*__remark__*: create new auth

**Parameters:**

| Name | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `Observable`<`object`>
observable of user info

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `Observable`<`void`>

*Defined in [wrap/auth.ts:54](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/auth.ts#L54)*

*__remark__*: destroy client auth

**Returns:** `Observable`<`void`>
observable to notify its done

___
<a id="restore"></a>

###  restore

▸ **restore**(__namedParameters?: *`object`*): `Observable`<`any`>

*Defined in [wrap/auth.ts:43](https://github.com/chakray/rig/blob/b79fd7e/projects/chakray/fbc/src/wrap/auth.ts#L43)*

*__remark__*: restore auth status by given input

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` __namedParameters | `object` |  {} |

**Returns:** `Observable`<`any`>
observable of user info

___

