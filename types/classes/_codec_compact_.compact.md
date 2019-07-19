> # Class: Compact

**`name`** Compact

**`description`** 
A compact length-encoding codec wrapper. It performs the same function as Length, however
differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
a number and making the compact representation thereof

## Hierarchy

* [Base](_codec_base_.base.md)‹*[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*›

  * **Compact**

  * [NonceCompact](_type_noncecompact_.noncecompact.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_compact_.compact.md#constructor)

### Properties

* [addLengthPrefix](_codec_compact_.compact.md#static-addlengthprefix)
* [decodeU8a](_codec_compact_.compact.md#static-decodeu8a)
* [encodeU8a](_codec_compact_.compact.md#static-encodeu8a)

### Accessors

* [encodedLength](_codec_compact_.compact.md#encodedlength)
* [isEmpty](_codec_compact_.compact.md#isempty)

### Methods

* [bitLength](_codec_compact_.compact.md#bitlength)
* [eq](_codec_compact_.compact.md#eq)
* [toBn](_codec_compact_.compact.md#tobn)
* [toHex](_codec_compact_.compact.md#tohex)
* [toJSON](_codec_compact_.compact.md#tojson)
* [toNumber](_codec_compact_.compact.md#tonumber)
* [toRawType](_codec_compact_.compact.md#torawtype)
* [toString](_codec_compact_.compact.md#tostring)
* [toU8a](_codec_compact_.compact.md#tou8a)
* [unwrap](_codec_compact_.compact.md#unwrap)
* [decodeCompact](_codec_compact_.compact.md#static-decodecompact)
* [stripLengthPrefix](_codec_compact_.compact.md#static-striplengthprefix)
* [with](_codec_compact_.compact.md#static-with)

## Constructors

###  constructor

\+ **new Compact**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*›, `value`: [Compact](_codec_compact_.compact.md) | [AnyNumber](../modules/_types_.md#anynumber)): *[Compact](_codec_compact_.compact.md)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Compact.ts:23](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) \| [Moment](_primitive_moment_.moment.md)*› | - |
`value` | [Compact](_codec_compact_.compact.md) \| [AnyNumber](../modules/_types_.md#anynumber) | 0 |

**Returns:** *[Compact](_codec_compact_.compact.md)*

## Properties

### `Static` addLengthPrefix

▪ **addLengthPrefix**: *`compactAddLength`* =  compactAddLength

*Defined in [codec/Compact.ts:41](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L41)*

Prepend a Uint8Array with its compact length.

**`param`** The Uint8Array to be prefixed

___

### `Static` decodeU8a

▪ **decodeU8a**: *`compactFromU8a`* =  compactFromU8a

*Defined in [codec/Compact.ts:43](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L43)*

___

### `Static` encodeU8a

▪ **encodeU8a**: *`compactToU8a`* =  compactToU8a

*Defined in [codec/Compact.ts:45](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L45)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [codec/Compact.ts:74](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L74)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [codec/Compact.ts:81](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L81)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

*Defined in [codec/Compact.ts:88](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L88)*

**`description`** Returns the number of bits in the value

**Returns:** *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Compact.ts:95](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L95)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *`BN`*

*Defined in [codec/Compact.ts:106](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L106)*

**`description`** Returns the BN representation of the number

**Returns:** *`BN`*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *any*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Compact.ts:113](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L113)*

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

*Defined in [codec/Compact.ts:120](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L120)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string | number*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [codec/Compact.ts:127](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L127)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Compact.ts:134](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L134)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Compact.ts:141](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L141)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Compact.ts:150](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L150)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

###  unwrap

▸ **unwrap**(): *[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*

*Defined in [codec/Compact.ts:157](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L157)*

**`description`** Returns the embedded [UInt](_codec_uint_.uint.md) or [Moment](_primitive_moment_.moment.md) value

**Returns:** *[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*

___

### `Static` decodeCompact

▸ **decodeCompact**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*›, `value`: [Compact](_codec_compact_.compact.md) | [AnyNumber](../modules/_types_.md#anynumber)): *[Moment](_primitive_moment_.moment.md) | [UInt](_codec_uint_.uint.md)*

*Defined in [codec/Compact.ts:53](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) \| [Moment](_primitive_moment_.moment.md)*› |
`value` | [Compact](_codec_compact_.compact.md) \| [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[Moment](_primitive_moment_.moment.md) | [UInt](_codec_uint_.uint.md)*

___

### `Static` stripLengthPrefix

▸ **stripLengthPrefix**(`u8a`: `Uint8Array`, `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *`Uint8Array`*

*Defined in [codec/Compact.ts:47](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L47)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`u8a` | `Uint8Array` | - |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |  DEFAULT_BITLENGTH |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*›): *[Constructor](../interfaces/_types_.constructor.md)‹*[Compact](_codec_compact_.compact.md)*›*

*Defined in [codec/Compact.ts:28](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Compact.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*[UInt](_codec_uint_.uint.md) \| [Moment](_primitive_moment_.moment.md)*› |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Compact](_codec_compact_.compact.md)*›*