> # Class: NonceCompact

**`name`** Nonce

**`description`** 
The Compact<Nonce> or number of transactions sent by a specific account. Generally used
with extrinsics to determine the order of execution.

## Hierarchy

  * [Compact](_codec_compact_.compact.md)

  * **NonceCompact**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_noncecompact_.noncecompact.md#constructor)

#### Properties

* [addLengthPrefix](_type_noncecompact_.noncecompact.md#static-addlengthprefix)
* [decodeU8a](_type_noncecompact_.noncecompact.md#static-decodeu8a)
* [encodeU8a](_type_noncecompact_.noncecompact.md#static-encodeu8a)

#### Accessors

* [encodedLength](_type_noncecompact_.noncecompact.md#encodedlength)
* [isEmpty](_type_noncecompact_.noncecompact.md#isempty)

#### Methods

* [bitLength](_type_noncecompact_.noncecompact.md#bitlength)
* [eq](_type_noncecompact_.noncecompact.md#eq)
* [toBn](_type_noncecompact_.noncecompact.md#tobn)
* [toHex](_type_noncecompact_.noncecompact.md#tohex)
* [toJSON](_type_noncecompact_.noncecompact.md#tojson)
* [toNumber](_type_noncecompact_.noncecompact.md#tonumber)
* [toRawType](_type_noncecompact_.noncecompact.md#torawtype)
* [toString](_type_noncecompact_.noncecompact.md#tostring)
* [toU8a](_type_noncecompact_.noncecompact.md#tou8a)
* [unwrap](_type_noncecompact_.noncecompact.md#unwrap)
* [decodeCompact](_type_noncecompact_.noncecompact.md#static-decodecompact)
* [stripLengthPrefix](_type_noncecompact_.noncecompact.md#static-striplengthprefix)
* [with](_type_noncecompact_.noncecompact.md#static-with)

## Constructors

###  constructor

\+ **new NonceCompact**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*›, `value`: [Compact](_codec_compact_.compact.md) | [AnyNumber](../modules/_types_.md#anynumber)): *[NonceCompact](_type_noncecompact_.noncecompact.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[constructor](_codec_compact_.compact.md#constructor)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Compact.ts:23](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) \| [Moment](_primitive_moment_.moment.md)*› | - |
`value` | [Compact](_codec_compact_.compact.md) \| [AnyNumber](../modules/_types_.md#anynumber) | 0 |

**Returns:** *[NonceCompact](_type_noncecompact_.noncecompact.md)*

## Properties

### `Static` addLengthPrefix

▪ **addLengthPrefix**: *`compactAddLength`* =  compactAddLength

*Inherited from [Compact](_codec_compact_.compact.md).[addLengthPrefix](_codec_compact_.compact.md#static-addlengthprefix)*

*Defined in [codec/Compact.ts:41](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L41)*

Prepend a Uint8Array with its compact length.

**`param`** The Uint8Array to be prefixed

___

### `Static` decodeU8a

▪ **decodeU8a**: *`compactFromU8a`* =  compactFromU8a

*Inherited from [Compact](_codec_compact_.compact.md).[decodeU8a](_codec_compact_.compact.md#static-decodeu8a)*

*Defined in [codec/Compact.ts:43](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L43)*

___

### `Static` encodeU8a

▪ **encodeU8a**: *`compactToU8a`* =  compactToU8a

*Inherited from [Compact](_codec_compact_.compact.md).[encodeU8a](_codec_compact_.compact.md#static-encodeu8a)*

*Defined in [codec/Compact.ts:45](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L45)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Compact](_codec_compact_.compact.md).[encodedLength](_codec_compact_.compact.md#encodedlength)*

*Defined in [codec/Compact.ts:74](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L74)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Compact](_codec_compact_.compact.md).[isEmpty](_codec_compact_.compact.md#isempty)*

*Defined in [codec/Compact.ts:81](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L81)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

*Inherited from [Compact](_codec_compact_.compact.md).[bitLength](_codec_compact_.compact.md#bitlength)*

*Defined in [codec/Compact.ts:88](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L88)*

**`description`** Returns the number of bits in the value

**Returns:** *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[eq](_codec_compact_.compact.md#eq)*

*Defined in [codec/Compact.ts:95](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L95)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *`BN`*

*Inherited from [Compact](_codec_compact_.compact.md).[toBn](_codec_compact_.compact.md#tobn)*

*Defined in [codec/Compact.ts:106](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L106)*

**`description`** Returns the BN representation of the number

**Returns:** *`BN`*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *any*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[toHex](_codec_compact_.compact.md#tohex)*

*Defined in [codec/Compact.ts:113](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L113)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *any*

___

###  toJSON

▸ **toJSON**(): *string | number*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[toJSON](_codec_compact_.compact.md#tojson)*

*Defined in [codec/Compact.ts:120](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L120)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string | number*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Compact](_codec_compact_.compact.md).[toNumber](_codec_compact_.compact.md#tonumber)*

*Defined in [codec/Compact.ts:127](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L127)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[toRawType](_codec_compact_.compact.md#torawtype)*

*Defined in [codec/Compact.ts:134](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L134)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[toString](_codec_compact_.compact.md#tostring)*

*Defined in [codec/Compact.ts:141](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L141)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[toU8a](_codec_compact_.compact.md#tou8a)*

*Defined in [codec/Compact.ts:150](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L150)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

###  unwrap

▸ **unwrap**(): *[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[unwrap](_codec_compact_.compact.md#unwrap)*

*Defined in [codec/Compact.ts:157](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L157)*

**`description`** Returns the embedded [UInt](_codec_uint_.uint.md) or [Moment](_primitive_moment_.moment.md) value

**Returns:** *[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*

___

### `Static` decodeCompact

▸ **decodeCompact**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*›, `value`: [Compact](_codec_compact_.compact.md) | [AnyNumber](../modules/_types_.md#anynumber)): *[Moment](_primitive_moment_.moment.md) | [UInt](_codec_uint_.uint.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[decodeCompact](_codec_compact_.compact.md#static-decodecompact)*

*Defined in [codec/Compact.ts:53](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) \| [Moment](_primitive_moment_.moment.md)*› |
`value` | [Compact](_codec_compact_.compact.md) \| [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[Moment](_primitive_moment_.moment.md) | [UInt](_codec_uint_.uint.md)*

___

### `Static` stripLengthPrefix

▸ **stripLengthPrefix**(`u8a`: `Uint8Array`, `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *`Uint8Array`*

*Inherited from [Compact](_codec_compact_.compact.md).[stripLengthPrefix](_codec_compact_.compact.md#static-striplengthprefix)*

*Defined in [codec/Compact.ts:47](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L47)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`u8a` | `Uint8Array` | - |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |  DEFAULT_BITLENGTH |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*›): *[Constructor](../interfaces/_types_.constructor.md)‹*[Compact](_codec_compact_.compact.md)*›*

*Inherited from [Compact](_codec_compact_.compact.md).[with](_codec_compact_.compact.md#static-with)*

*Defined in [codec/Compact.ts:28](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Compact.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) \| [Moment](_primitive_moment_.moment.md)*› |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Compact](_codec_compact_.compact.md)*›*