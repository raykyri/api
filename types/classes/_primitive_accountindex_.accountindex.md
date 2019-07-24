> # Class: AccountIndex

**`name`** AccountIndex

**`description`** 
A wrapper around an AccountIndex, which is a shortened, variable-length encoding
for an Account. We extends from [U32](_primitive_u32_.u32.md) to provide the number-like properties.

## Hierarchy

  * [U32](_primitive_u32_.u32.md)

  * **AccountIndex**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_accountindex_.accountindex.md#constructor)

### Methods

* [eq](_primitive_accountindex_.accountindex.md#eq)
* [toHex](_primitive_accountindex_.accountindex.md#tohex)
* [toJSON](_primitive_accountindex_.accountindex.md#tojson)
* [toRawType](_primitive_accountindex_.accountindex.md#torawtype)
* [toString](_primitive_accountindex_.accountindex.md#tostring)
* [toU8a](_primitive_accountindex_.accountindex.md#tou8a)
* [calcLength](_primitive_accountindex_.accountindex.md#static-calclength)
* [decodeAccountIndex](_primitive_accountindex_.accountindex.md#static-decodeaccountindex)
* [readLength](_primitive_accountindex_.accountindex.md#static-readlength)
* [writeLength](_primitive_accountindex_.accountindex.md#static-writelength)

## Constructors

###  constructor

\+ **new AccountIndex**(`value`: [AnyNumber](../modules/_types_.md#anynumber)): *[AccountIndex](_primitive_accountindex_.accountindex.md)*

*Overrides [U32](_primitive_u32_.u32.md).[constructor](_primitive_u32_.u32.md#constructor)*

*Defined in [primitive/AccountIndex.ts:29](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/AccountIndex.ts#L29)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) |  new BN(0) |

**Returns:** *[AccountIndex](_primitive_accountindex_.accountindex.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [primitive/AccountIndex.ts:88](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/AccountIndex.ts#L88)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/UInt.ts#L36)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [primitive/AccountIndex.ts:101](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/AccountIndex.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Defined in [primitive/AccountIndex.ts:117](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/AccountIndex.ts#L117)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [primitive/AccountIndex.ts:108](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/AccountIndex.ts#L108)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:57](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/UInt.ts#L57)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` calcLength

▸ **calcLength**(`_value`: `BN` | number): *number*

*Defined in [primitive/AccountIndex.ts:48](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/AccountIndex.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`_value` | `BN` \| number |

**Returns:** *number*

___

### `Static` decodeAccountIndex

▸ **decodeAccountIndex**(`value`: [AnyNumber](../modules/_types_.md#anynumber)): *`BN` | `Uint8Array` | number | string*

*Defined in [primitive/AccountIndex.ts:36](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/AccountIndex.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *`BN` | `Uint8Array` | number | string*

___

### `Static` readLength

▸ **readLength**(`input`: `Uint8Array`): *[number, number]*

*Defined in [primitive/AccountIndex.ts:62](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/AccountIndex.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | `Uint8Array` |

**Returns:** *[number, number]*

___

### `Static` writeLength

▸ **writeLength**(`input`: `Uint8Array`): *`Uint8Array`*

*Defined in [primitive/AccountIndex.ts:76](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/AccountIndex.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | `Uint8Array` |

**Returns:** *`Uint8Array`*