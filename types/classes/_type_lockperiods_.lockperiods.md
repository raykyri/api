> # Class: LockPeriods

**`name`** LockPeriods

**`description`** 
A number of lock periods.

## Hierarchy

  * [I8](_primitive_i8_.i8.md)

  * **LockPeriods**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_type_lockperiods_.lockperiods.md#constructor)

### Methods

* [toHex](_type_lockperiods_.lockperiods.md#tohex)
* [toRawType](_type_lockperiods_.lockperiods.md#torawtype)
* [toU8a](_type_lockperiods_.lockperiods.md#tou8a)

## Constructors

###  constructor

\+ **new LockPeriods**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[LockPeriods](_type_lockperiods_.lockperiods.md)*

*Inherited from [I8](_primitive_i8_.i8.md).[constructor](_primitive_i8_.i8.md#constructor)*

*Overrides [Int](_codec_int_.int.md).[constructor](_codec_int_.int.md#constructor)*

*Defined in [primitive/I8.ts:14](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/I8.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[LockPeriods](_type_lockperiods_.lockperiods.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [Int](_codec_int_.int.md).[toHex](_codec_int_.int.md#tohex)*

*Overrides void*

*Defined in [codec/Int.ts:36](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/codec/Int.ts#L36)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Int](_codec_int_.int.md).[toRawType](_codec_int_.int.md#torawtype)*

*Overrides void*

*Defined in [codec/Int.ts:47](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/codec/Int.ts#L47)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Int](_codec_int_.int.md).[toU8a](_codec_int_.int.md#tou8a)*

*Overrides void*

*Defined in [codec/Int.ts:56](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/codec/Int.ts#L56)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*