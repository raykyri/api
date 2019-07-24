> # Class: BlockNumber

**`name`** BlockNumber

**`description`** 
A representation of a Substrate BlockNumber, implemented as a [U64](_primitive_u64_.u64.md)

## Hierarchy

  * [U64](_primitive_u64_.u64.md)

  * **BlockNumber**

  * [InclusionHeight](_type_uncleentryitem_.inclusionheight.md)

  * [LeasePeriod](../interfaces/_srml_parachains_types_.leaseperiod.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_type_blocknumber_.blocknumber.md#constructor)

### Methods

* [toHex](_type_blocknumber_.blocknumber.md#tohex)
* [toRawType](_type_blocknumber_.blocknumber.md#torawtype)
* [toU8a](_type_blocknumber_.blocknumber.md#tou8a)

## Constructors

###  constructor

\+ **new BlockNumber**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[BlockNumber](_type_blocknumber_.blocknumber.md)*

*Inherited from [U64](_primitive_u64_.u64.md).[constructor](_primitive_u64_.u64.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U64.ts:14](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/primitive/U64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[BlockNumber](_type_blocknumber_.blocknumber.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/UInt.ts#L36)*

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

*Defined in [codec/UInt.ts:48](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/UInt.ts#L48)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:57](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/UInt.ts#L57)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*