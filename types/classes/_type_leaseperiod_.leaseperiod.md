> # Class: LeasePeriod

**`name`** LeasePeriod

**`description`** 
The length of the parachain lease

## Hierarchy

  * [BlockNumber](_type_blocknumber_.blocknumber.md)

  * **LeasePeriod**

  * [LeasePeriodOf](_type_leaseperiod_.leaseperiodof.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_type_leaseperiod_.leaseperiod.md#constructor)

### Methods

* [toHex](_type_leaseperiod_.leaseperiod.md#tohex)
* [toRawType](_type_leaseperiod_.leaseperiod.md#torawtype)
* [toU8a](_type_leaseperiod_.leaseperiod.md#tou8a)

## Constructors

###  constructor

\+ **new LeasePeriod**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[LeasePeriod](_type_leaseperiod_.leaseperiod.md)*

*Inherited from [U64](_primitive_u64_.u64.md).[constructor](_primitive_u64_.u64.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U64.ts:14](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/U64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[LeasePeriod](_type_leaseperiod_.leaseperiod.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/codec/UInt.ts#L36)*

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

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [codec/UInt.ts:48](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/codec/UInt.ts#L48)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:57](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/codec/UInt.ts#L57)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*