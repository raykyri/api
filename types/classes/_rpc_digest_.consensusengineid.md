> # Class: ConsensusEngineId

**`name`** ConsensusEngineId

**`description`** 
A 4-byte identifier (actually a [u8; 4]) identifying the engine, e.g. for Aura it would be [b'a', b'u', b'r', b'a']

## Hierarchy

  * [U32](_primitive_u32_.u32.md)

  * **ConsensusEngineId**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_rpc_digest_.consensusengineid.md#constructor)

### Accessors

* [isAura](_rpc_digest_.consensusengineid.md#isaura)
* [isBabe](_rpc_digest_.consensusengineid.md#isbabe)
* [isGrandpa](_rpc_digest_.consensusengineid.md#isgrandpa)

### Methods

* [extractSlot](_rpc_digest_.consensusengineid.md#extractslot)
* [toHex](_rpc_digest_.consensusengineid.md#tohex)
* [toRawType](_rpc_digest_.consensusengineid.md#torawtype)
* [toString](_rpc_digest_.consensusengineid.md#tostring)
* [toU8a](_rpc_digest_.consensusengineid.md#tou8a)
* [idToString](_rpc_digest_.consensusengineid.md#static-idtostring)
* [stringToId](_rpc_digest_.consensusengineid.md#static-stringtoid)

## Constructors

###  constructor

\+ **new ConsensusEngineId**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[ConsensusEngineId](_rpc_digest_.consensusengineid.md)*

*Inherited from [U32](_primitive_u32_.u32.md).[constructor](_primitive_u32_.u32.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[ConsensusEngineId](_rpc_digest_.consensusengineid.md)*

## Accessors

###  isAura

• **get isAura**(): *boolean*

*Defined in [rpc/Digest.ts:64](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/rpc/Digest.ts#L64)*

**`description`** `true` if the engine matches aura

**Returns:** *boolean*

___

###  isBabe

• **get isBabe**(): *boolean*

*Defined in [rpc/Digest.ts:71](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/rpc/Digest.ts#L71)*

**`description`** `true` is the engine matches babe

**Returns:** *boolean*

___

###  isGrandpa

• **get isGrandpa**(): *boolean*

*Defined in [rpc/Digest.ts:78](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/rpc/Digest.ts#L78)*

**`description`** `true` is the engine matches grandpa

**Returns:** *boolean*

## Methods

###  extractSlot

▸ **extractSlot**(`bytes`: [Bytes](_primitive_bytes_.bytes.md)): *[U64](_primitive_u64_.u64.md)*

*Defined in [rpc/Digest.ts:85](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/rpc/Digest.ts#L85)*

**`description`** From the input bytes, decode into an aura-tuple

**Parameters:**

Name | Type |
------ | ------ |
`bytes` | [Bytes](_primitive_bytes_.bytes.md) |

**Returns:** *[U64](_primitive_u64_.u64.md)*

___

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

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [rpc/Digest.ts:97](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/rpc/Digest.ts#L97)*

**`description`** Override the default toString to return a 4-byte string

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

___

### `Static` idToString

▸ **idToString**(`input`: number | `BN`): *string*

*Defined in [rpc/Digest.ts:47](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/rpc/Digest.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | number \| `BN` |

**Returns:** *string*

___

### `Static` stringToId

▸ **stringToId**(`input`: string): *number*

*Defined in [rpc/Digest.ts:54](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/rpc/Digest.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *number*