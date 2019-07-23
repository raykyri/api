> # Class: BalanceCompact <**T**>

**`name`** BalanceCompact

**`description`** 
The Compact<Balance> or number of transactions sent by a specific account. Generally used
with extrinsics to determine the order of execution.

## Type parameters

▪ **T**: *[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*

## Hierarchy

  * [Compact](_codec_compact_.compact.md)

  * **BalanceCompact**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_balancecompact_.balancecompact.md#constructor)

### Properties

* [addLengthPrefix](_primitive_balancecompact_.balancecompact.md#static-addlengthprefix)
* [decodeU8a](_primitive_balancecompact_.balancecompact.md#static-decodeu8a)
* [encodeU8a](_primitive_balancecompact_.balancecompact.md#static-encodeu8a)

### Accessors

* [encodedLength](_primitive_balancecompact_.balancecompact.md#encodedlength)
* [isEmpty](_primitive_balancecompact_.balancecompact.md#isempty)

### Methods

* [bitLength](_primitive_balancecompact_.balancecompact.md#bitlength)
* [eq](_primitive_balancecompact_.balancecompact.md#eq)
* [toBn](_primitive_balancecompact_.balancecompact.md#tobn)
* [toHex](_primitive_balancecompact_.balancecompact.md#tohex)
* [toJSON](_primitive_balancecompact_.balancecompact.md#tojson)
* [toNumber](_primitive_balancecompact_.balancecompact.md#tonumber)
* [toRawType](_primitive_balancecompact_.balancecompact.md#torawtype)
* [toString](_primitive_balancecompact_.balancecompact.md#tostring)
* [toU8a](_primitive_balancecompact_.balancecompact.md#tou8a)
* [unwrap](_primitive_balancecompact_.balancecompact.md#unwrap)
* [decodeCompact](_primitive_balancecompact_.balancecompact.md#static-decodecompact)
* [stripLengthPrefix](_primitive_balancecompact_.balancecompact.md#static-striplengthprefix)
* [with](_primitive_balancecompact_.balancecompact.md#static-with)

## Constructors

###  constructor

\+ **new BalanceCompact**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `value`: [Compact](_codec_compact_.compact.md)‹*`T`*› | [AnyNumber](../modules/_types_.md#anynumber)): *[BalanceCompact](_primitive_balancecompact_.balancecompact.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[constructor](_codec_compact_.compact.md#constructor)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Compact.ts:23](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› | - |
`value` | [Compact](_codec_compact_.compact.md)‹*`T`*› \| [AnyNumber](../modules/_types_.md#anynumber) | 0 |

**Returns:** *[BalanceCompact](_primitive_balancecompact_.balancecompact.md)*

## Properties

### `Static` addLengthPrefix

▪ **addLengthPrefix**: *`compactAddLength`* =  compactAddLength

*Inherited from [Compact](_codec_compact_.compact.md).[addLengthPrefix](_codec_compact_.compact.md#static-addlengthprefix)*

*Defined in [codec/Compact.ts:41](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L41)*

Prepend a Uint8Array with its compact length.

**`param`** The Uint8Array to be prefixed

___

### `Static` decodeU8a

▪ **decodeU8a**: *`compactFromU8a`* =  compactFromU8a

*Inherited from [Compact](_codec_compact_.compact.md).[decodeU8a](_codec_compact_.compact.md#static-decodeu8a)*

*Defined in [codec/Compact.ts:43](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L43)*

___

### `Static` encodeU8a

▪ **encodeU8a**: *`compactToU8a`* =  compactToU8a

*Inherited from [Compact](_codec_compact_.compact.md).[encodeU8a](_codec_compact_.compact.md#static-encodeu8a)*

*Defined in [codec/Compact.ts:45](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L45)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Base.ts:21](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Base.ts#L21)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:28](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Base.ts#L28)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

*Inherited from [Compact](_codec_compact_.compact.md).[bitLength](_codec_compact_.compact.md#bitlength)*

*Defined in [codec/Compact.ts:74](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L74)*

**`description`** Returns the number of bits in the value

**Returns:** *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[eq](_codec_compact_.compact.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/Compact.ts:81](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L81)*

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

*Defined in [codec/Compact.ts:92](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L92)*

**`description`** Returns the BN representation of the number

**Returns:** *`BN`*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/Base.ts:42](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Base.ts#L42)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Base.ts:49](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Base.ts#L49)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Compact](_codec_compact_.compact.md).[toNumber](_codec_compact_.compact.md#tonumber)*

*Defined in [codec/Compact.ts:99](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L99)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[toRawType](_codec_compact_.compact.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/Compact.ts:106](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L106)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Base.ts:56](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Base.ts#L56)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[toU8a](_codec_compact_.compact.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Compact.ts:115](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L115)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

###  unwrap

▸ **unwrap**(): *`T`*

*Inherited from [Compact](_codec_compact_.compact.md).[unwrap](_codec_compact_.compact.md#unwrap)*

*Defined in [codec/Compact.ts:122](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L122)*

**`description`** Returns the embedded [UInt](_codec_uint_.uint.md) or [Moment](_primitive_moment_.moment.md) value

**Returns:** *`T`*

___

### `Static` decodeCompact

▸ **decodeCompact**<**T**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `value`: [Compact](_codec_compact_.compact.md)‹*`T`*› | [AnyNumber](../modules/_types_.md#anynumber)): *[Moment](_primitive_moment_.moment.md) | [UInt](_codec_uint_.uint.md)*

*Inherited from [Compact](_codec_compact_.compact.md).[decodeCompact](_codec_compact_.compact.md#static-decodecompact)*

*Defined in [codec/Compact.ts:53](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L53)*

**Type parameters:**

▪ **T**: *[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |
`value` | [Compact](_codec_compact_.compact.md)‹*`T`*› \| [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[Moment](_primitive_moment_.moment.md) | [UInt](_codec_uint_.uint.md)*

___

### `Static` stripLengthPrefix

▸ **stripLengthPrefix**(`u8a`: `Uint8Array`, `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *`Uint8Array`*

*Inherited from [Compact](_codec_compact_.compact.md).[stripLengthPrefix](_codec_compact_.compact.md#static-striplengthprefix)*

*Defined in [codec/Compact.ts:47](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L47)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`u8a` | `Uint8Array` | - |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |  DEFAULT_BITLENGTH |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**T**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›): *[Constructor](../interfaces/_types_.constructor.md)‹*[Compact](_codec_compact_.compact.md)‹*`T`*›*›*

*Inherited from [Compact](_codec_compact_.compact.md).[with](_codec_compact_.compact.md#static-with)*

*Defined in [codec/Compact.ts:28](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Compact.ts#L28)*

**Type parameters:**

▪ **T**: *[UInt](_codec_uint_.uint.md) | [Moment](_primitive_moment_.moment.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Compact](_codec_compact_.compact.md)‹*`T`*›*›*