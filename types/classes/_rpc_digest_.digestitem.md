> # Class: DigestItem

**`name`** DigestItem

**`description`** 
A [Enum](_codec_enumtype_.enum.md) the specifies the specific item in the logs of a [Digest](_rpc_digest_.digest.md)

## Hierarchy

  * [Enum](_codec_enumtype_.enum.md)

  * **DigestItem**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_rpc_digest_.digestitem.md#constructor)

### Accessors

* [asAuthoritiesChange](_rpc_digest_.digestitem.md#asauthoritieschange)
* [asChangesTrieRoot](_rpc_digest_.digestitem.md#aschangestrieroot)
* [asConsensus](_rpc_digest_.digestitem.md#asconsensus)
* [asOther](_rpc_digest_.digestitem.md#asother)
* [asPreRuntime](_rpc_digest_.digestitem.md#aspreruntime)
* [asSeal](_rpc_digest_.digestitem.md#asseal)
* [asSealV0](_rpc_digest_.digestitem.md#assealv0)
* [encodedLength](_rpc_digest_.digestitem.md#encodedlength)
* [index](_rpc_digest_.digestitem.md#index)
* [isAuthoritiesChange](_rpc_digest_.digestitem.md#isauthoritieschange)
* [isChangesTrieRoot](_rpc_digest_.digestitem.md#ischangestrieroot)
* [isConsensus](_rpc_digest_.digestitem.md#isconsensus)
* [isEmpty](_rpc_digest_.digestitem.md#isempty)
* [isNone](_rpc_digest_.digestitem.md#isnone)
* [isNull](_rpc_digest_.digestitem.md#isnull)
* [isOther](_rpc_digest_.digestitem.md#isother)
* [isPreRuntime](_rpc_digest_.digestitem.md#ispreruntime)
* [isSeal](_rpc_digest_.digestitem.md#isseal)
* [isSealV0](_rpc_digest_.digestitem.md#issealv0)
* [type](_rpc_digest_.digestitem.md#type)
* [value](_rpc_digest_.digestitem.md#value)

### Methods

* [eq](_rpc_digest_.digestitem.md#eq)
* [toHex](_rpc_digest_.digestitem.md#tohex)
* [toJSON](_rpc_digest_.digestitem.md#tojson)
* [toNumber](_rpc_digest_.digestitem.md#tonumber)
* [toRawType](_rpc_digest_.digestitem.md#torawtype)
* [toString](_rpc_digest_.digestitem.md#tostring)
* [toU8a](_rpc_digest_.digestitem.md#tou8a)
* [with](_rpc_digest_.digestitem.md#static-with)

## Constructors

###  constructor

\+ **new DigestItem**(`value`: any): *[DigestItem](_rpc_digest_.digestitem.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [rpc/Digest.ts:255](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L255)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *[DigestItem](_rpc_digest_.digestitem.md)*

## Accessors

###  asAuthoritiesChange

• **get asAuthoritiesChange**(): *[AuthoritiesChange](_rpc_digest_.authoritieschange.md)*

*Defined in [rpc/Digest.ts:263](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L263)*

**`description`** Returns the item as a [AuthoritiesChange](_rpc_digest_.authoritieschange.md)

**Returns:** *[AuthoritiesChange](_rpc_digest_.authoritieschange.md)*

___

###  asChangesTrieRoot

• **get asChangesTrieRoot**(): *[ChangesTrieRoot](_rpc_digest_.changestrieroot.md)*

*Defined in [rpc/Digest.ts:272](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L272)*

**`description`** Returns the item as a [ChangesTrieRoot](_rpc_digest_.changestrieroot.md)

**Returns:** *[ChangesTrieRoot](_rpc_digest_.changestrieroot.md)*

___

###  asConsensus

• **get asConsensus**(): *[Consensus](_rpc_digest_.consensus.md)*

*Defined in [rpc/Digest.ts:281](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L281)*

**`desciption`** Retuns the item as a [Consensus](_rpc_digest_.consensus.md)

**Returns:** *[Consensus](_rpc_digest_.consensus.md)*

___

###  asOther

• **get asOther**(): *[Other](_rpc_digest_.other.md)*

*Defined in [rpc/Digest.ts:290](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L290)*

**`description`** Returns the item as a [Other](_rpc_digest_.other.md)

**Returns:** *[Other](_rpc_digest_.other.md)*

___

###  asPreRuntime

• **get asPreRuntime**(): *[PreRuntime](_rpc_digest_.preruntime.md)*

*Defined in [rpc/Digest.ts:299](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L299)*

**`description`** Returns the item as a [PreRuntime](_rpc_digest_.preruntime.md)

**Returns:** *[PreRuntime](_rpc_digest_.preruntime.md)*

___

###  asSeal

• **get asSeal**(): *[Seal](_rpc_digest_.seal.md)*

*Defined in [rpc/Digest.ts:308](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L308)*

**`description`** Returns the item as a [Seal](_rpc_digest_.seal.md)

**Returns:** *[Seal](_rpc_digest_.seal.md)*

___

###  asSealV0

• **get asSealV0**(): *[SealV0](_rpc_digest_.sealv0.md)*

*Defined in [rpc/Digest.ts:317](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L317)*

**`description`** Returns the item as a [SealV0](_rpc_digest_.sealv0.md)

**Returns:** *[SealV0](_rpc_digest_.sealv0.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Defined in [codec/EnumType.ts:164](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L164)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:171](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L171)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isAuthoritiesChange

• **get isAuthoritiesChange**(): *boolean*

*Defined in [rpc/Digest.ts:326](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L326)*

**`description`** Returns true on [AuthoritiesChange](_rpc_digest_.authoritieschange.md)

**Returns:** *boolean*

___

###  isChangesTrieRoot

• **get isChangesTrieRoot**(): *boolean*

*Defined in [rpc/Digest.ts:333](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L333)*

**`description`** Returns true on [ChangesTrieRoot](_rpc_digest_.changestrieroot.md)

**Returns:** *boolean*

___

###  isConsensus

• **get isConsensus**(): *boolean*

*Defined in [rpc/Digest.ts:340](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L340)*

**`description`** Returns true on [Consensus](_rpc_digest_.consensus.md)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isEmpty](_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:178](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L178)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:185](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L185)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L192)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isOther

• **get isOther**(): *boolean*

*Defined in [rpc/Digest.ts:347](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L347)*

**`description`** Returns true on [Other](_rpc_digest_.other.md)

**Returns:** *boolean*

___

###  isPreRuntime

• **get isPreRuntime**(): *boolean*

*Defined in [rpc/Digest.ts:354](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L354)*

**`description`** Returns true on [PreRuntime](_rpc_digest_.preruntime.md)

**Returns:** *boolean*

___

###  isSeal

• **get isSeal**(): *boolean*

*Defined in [rpc/Digest.ts:361](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L361)*

**`description`** Returns true on [Seal](_rpc_digest_.seal.md)

**Returns:** *boolean*

___

###  isSealV0

• **get isSealV0**(): *boolean*

*Defined in [rpc/Digest.ts:368](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L368)*

**`description`** Returns true on [SealV0](_rpc_digest_.sealv0.md)

**Returns:** *boolean*

___

###  type

• **get type**(): *`DigestItemTypes`*

*Overrides [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [rpc/Digest.ts:382](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L382)*

**`description`** Returns the type of engine, we just override here to get the typings correct

**Returns:** *`DigestItemTypes`*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:206](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L206)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Defined in [codec/EnumType.ts:213](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L213)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Defined in [codec/EnumType.ts:228](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L228)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [rpc/Digest.ts:375](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/rpc/Digest.ts#L375)*

**`description`** Converts the Object to JSON, typically used for RPC transfers. For logs, we overrides to produce the hex version (sligning with substrate gives in actual JSON responses)

**Returns:** *string*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:244](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L244)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:251](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L251)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [codec/EnumType.ts:266](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L266)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Defined in [codec/EnumType.ts:276](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L276)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TypesDef` | string[]): *`EnumConstructor<Enum>`*

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/EnumType.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*