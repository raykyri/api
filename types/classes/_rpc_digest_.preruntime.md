> # Class: PreRuntime

**`name`** PreRuntime

**`description`** 
These are messages from the consensus engine to the runtime, although the consensus engine the consensus engine can (and should) read them itself to avoid ode and state duplication.

## Hierarchy

  * [Tuple](_codec_tuple_.tuple.md)

  * **PreRuntime**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **n**: *number*\]: [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_rpc_digest_.preruntime.md#constructor)

### Accessors

* [Types](_rpc_digest_.preruntime.md#types)
* [data](_rpc_digest_.preruntime.md#data)
* [encodedLength](_rpc_digest_.preruntime.md#encodedlength)
* [engine](_rpc_digest_.preruntime.md#engine)
* [isEmpty](_rpc_digest_.preruntime.md#isempty)
* [length](_rpc_digest_.preruntime.md#length)
* [slot](_rpc_digest_.preruntime.md#slot)

### Methods

* [eq](_rpc_digest_.preruntime.md#eq)
* [filter](_rpc_digest_.preruntime.md#filter)
* [map](_rpc_digest_.preruntime.md#map)
* [toArray](_rpc_digest_.preruntime.md#toarray)
* [toHex](_rpc_digest_.preruntime.md#tohex)
* [toJSON](_rpc_digest_.preruntime.md#tojson)
* [toRawType](_rpc_digest_.preruntime.md#torawtype)
* [toString](_rpc_digest_.preruntime.md#tostring)
* [toU8a](_rpc_digest_.preruntime.md#tou8a)
* [with](_rpc_digest_.preruntime.md#static-with)

## Constructors

###  constructor

\+ **new PreRuntime**(`value`: any): *[PreRuntime](_rpc_digest_.preruntime.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [rpc/Digest.ts:206](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/rpc/Digest.ts#L206)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *[PreRuntime](_rpc_digest_.preruntime.md)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [codec/Tuple.ts:74](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Tuple.ts#L74)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  data

• **get data**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [rpc/Digest.ts:224](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/rpc/Digest.ts#L224)*

**`description`** The wrapped [Bytes](_primitive_bytes_.bytes.md)

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/Tuple.ts:63](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Tuple.ts#L63)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  engine

• **get engine**(): *[ConsensusEngineId](_rpc_digest_.consensusengineid.md)*

*Defined in [rpc/Digest.ts:217](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/rpc/Digest.ts#L217)*

**`description`** The wrapped [ConsensusEngineId](_rpc_digest_.consensusengineid.md)

**Returns:** *[ConsensusEngineId](_rpc_digest_.consensusengineid.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L22)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L38)*

**`description`** The length of the value

**Returns:** *number*

___

###  slot

• **get slot**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [rpc/Digest.ts:231](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/rpc/Digest.ts#L231)*

**`description`** The slot extracted from the raw data (fails on non-Aura)

**Returns:** *[U64](_primitive_u64_.u64.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:46](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:116](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L116)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_.codec.md)[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`U`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:125](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L125)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_.codec.md)[]): *`U`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *`U`[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:53](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L53)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:60](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L60)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L67)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toRawType](_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/Tuple.ts:83](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Tuple.ts#L83)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [codec/Tuple.ts:96](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Tuple.ts#L96)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/Tuple.ts:105](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Tuple.ts#L105)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TupleConstructors`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Tuple](_codec_tuple_.tuple.md)*›*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#static-with)*

*Defined in [codec/Tuple.ts:52](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Tuple.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TupleConstructors` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Tuple](_codec_tuple_.tuple.md)*›*