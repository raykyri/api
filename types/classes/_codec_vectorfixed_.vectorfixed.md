> # Class: VectorFixed <**T**>

**`name`** VectorFixed

**`description`** 
This manages codec arrays of a fixed length

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

  * [AbstractArray](_codec_abstractarray_.abstractarray.md)‹*`T`*›

  * **VectorFixed**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **n**: *number*\]: `T`

## Index

### Constructors

* [constructor](_codec_vectorfixed_.vectorfixed.md#constructor)

### Accessors

* [Type](_codec_vectorfixed_.vectorfixed.md#type)
* [encodedLength](_codec_vectorfixed_.vectorfixed.md#encodedlength)
* [isEmpty](_codec_vectorfixed_.vectorfixed.md#isempty)
* [length](_codec_vectorfixed_.vectorfixed.md#length)

### Methods

* [eq](_codec_vectorfixed_.vectorfixed.md#eq)
* [filter](_codec_vectorfixed_.vectorfixed.md#filter)
* [map](_codec_vectorfixed_.vectorfixed.md#map)
* [toArray](_codec_vectorfixed_.vectorfixed.md#toarray)
* [toHex](_codec_vectorfixed_.vectorfixed.md#tohex)
* [toJSON](_codec_vectorfixed_.vectorfixed.md#tojson)
* [toRawType](_codec_vectorfixed_.vectorfixed.md#torawtype)
* [toString](_codec_vectorfixed_.vectorfixed.md#tostring)
* [toU8a](_codec_vectorfixed_.vectorfixed.md#tou8a)
* [decodeVectorFixed](_codec_vectorfixed_.vectorfixed.md#static-decodevectorfixed)
* [with](_codec_vectorfixed_.vectorfixed.md#static-with)

## Constructors

###  constructor

\+ **new VectorFixed**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `length`: number, `value`: [VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*any*› | `Uint8Array` | string | any[]): *[VectorFixed](_codec_vectorfixed_.vectorfixed.md)*

*Defined in [codec/VectorFixed.ts:18](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/VectorFixed.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› | - |
`length` | number | - |
`value` | [VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*any*› \| `Uint8Array` \| string \| any[] |  [] as any[] |

**Returns:** *[VectorFixed](_codec_vectorfixed_.vectorfixed.md)*

## Accessors

###  Type

• **get Type**(): *string*

*Defined in [codec/VectorFixed.ts:60](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/VectorFixed.ts#L60)*

**`description`** The type for the items

**Returns:** *string*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/AbstractArray.ts:29](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/AbstractArray.ts#L29)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/AbstractArray.ts#L22)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/AbstractArray.ts#L38)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:46](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/AbstractArray.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *`T`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:116](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/AbstractArray.ts#L116)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: `T`, `index`: number, `array`: `T`[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`index` | number |
`array` | `T`[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *`T`[]*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`U`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:125](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/AbstractArray.ts#L125)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: `T`, `index`: number, `array`: `T`[]): *`U`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`index` | number |
`array` | `T`[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *`U`[]*

___

###  toArray

▸ **toArray**(): *`T`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:53](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/AbstractArray.ts#L53)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`T`[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:60](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/AbstractArray.ts#L60)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/AbstractArray.ts#L67)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/VectorFixed.ts:71](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/VectorFixed.ts#L71)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:81](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/AbstractArray.ts#L81)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *`Uint8Array`*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/VectorFixed.ts:64](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/VectorFixed.ts#L64)*

**Returns:** *`Uint8Array`*

___

### `Static` decodeVectorFixed

▸ **decodeVectorFixed**<**T**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `allocLength`: number, `value`: [VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*any*› | `Uint8Array` | string | any[]): *`T`[]*

*Defined in [codec/VectorFixed.ts:28](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/VectorFixed.ts#L28)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |
`allocLength` | number |
`value` | [VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*any*› \| `Uint8Array` \| string \| any[] |

**Returns:** *`T`[]*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`O`*›, `length`: number): *[Constructor](../interfaces/_types_.constructor.md)‹*[VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*`O`*›*›*

*Defined in [codec/VectorFixed.ts:45](https://github.com/polkadot-js/api/blob/43ca02b/packages/types/src/codec/VectorFixed.ts#L45)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`O`*› |
`length` | number |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*`O`*›*›*