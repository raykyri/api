> # Class: U8aFixed

**`name`** U8aFixed

**`description`** 
A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
to be used directly, rather is should be subclassed with the specific lengths.

## Hierarchy

  * [U8a](_codec_u8a_.u8a.md)

  * **U8aFixed**

  * [H256](_primitive_h256_.h256.md)

  * [MethodIndex](_primitive_method_.methodindex.md)

  * [AccountId](_primitive_accountid_.accountid.md)

  * [EventId](_primitive_event_.eventid.md)

  * [H512](_primitive_h512_.h512.md)

  * [H160](_primitive_h160_.h160.md)

  * [ApiId](_rpc_runtimeversion_.apiid.md)

  * [LockIdentifier](_type_lockidentifier_.lockidentifier.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_codec_u8afixed_.u8afixed.md#constructor)

### Accessors

* [encodedLength](_codec_u8afixed_.u8afixed.md#encodedlength)
* [isEmpty](_codec_u8afixed_.u8afixed.md#isempty)
* [length](_codec_u8afixed_.u8afixed.md#length)

### Methods

* [bitLength](_codec_u8afixed_.u8afixed.md#bitlength)
* [eq](_codec_u8afixed_.u8afixed.md#eq)
* [subarray](_codec_u8afixed_.u8afixed.md#subarray)
* [toHex](_codec_u8afixed_.u8afixed.md#tohex)
* [toJSON](_codec_u8afixed_.u8afixed.md#tojson)
* [toRawType](_codec_u8afixed_.u8afixed.md#torawtype)
* [toString](_codec_u8afixed_.u8afixed.md#tostring)
* [toU8a](_codec_u8afixed_.u8afixed.md#tou8a)
* [with](_codec_u8afixed_.u8afixed.md#static-with)

## Constructors

###  constructor

\+ **new U8aFixed**(`value`: [AnyU8a](../modules/_types_.md#anyu8a), `bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[U8aFixed](_codec_u8afixed_.u8afixed.md)*

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [codec/U8aFixed.ts:19](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8aFixed.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [AnyU8a](../modules/_types_.md#anyu8a) |  new Uint8Array() |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) | 256 |

**Returns:** *[U8aFixed](_codec_u8afixed_.u8afixed.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:36](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L36)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L43)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:50](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L50)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Defined in [codec/U8aFixed.ts:60](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8aFixed.ts#L60)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L58)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *`Uint8Array`*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L73)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined \| number | The position to end at  |

**Returns:** *`Uint8Array`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:80](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L80)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:87](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L87)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toRawType](_codec_u8a_.u8a.md#torawtype)*

*Defined in [codec/U8aFixed.ts:67](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8aFixed.ts#L67)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:101](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L101)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:110](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L110)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[Constructor](../interfaces/_types_.constructor.md)‹*[U8aFixed](_codec_u8afixed_.u8afixed.md)*›*

*Defined in [codec/U8aFixed.ts:49](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8aFixed.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[U8aFixed](_codec_u8afixed_.u8afixed.md)*›*