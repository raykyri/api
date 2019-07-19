> # Class: Vector <**T**>

**`name`** Vector

**`description`** 
This manages codec arrays. Internally it keeps track of the length (as decoded) and allows
construction with the passed `Type` in the constructor. It is an extension to Array, providing
specific encoding/decoding on top of the base type.

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

  * [AbstractArray](_codec_abstractarray_.abstractarray.md)‹*`T`*›

  * **Vector**

  * [Extrinsics](_type_extrinsics_.extrinsics.md)

  * [AuthoritiesChange](_rpc_digest_.authoritieschange.md)

  * [Broadcast](_rpc_extrinsicstatus_.broadcast.md)

  * [WinningData](../interfaces/_srml_parachains_types_.winningdata.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **n**: *number*\]: `T`

## Index

### Constructors

* [constructor](_codec_vector_.vector.md#constructor)

### Accessors

* [Type](_codec_vector_.vector.md#type)
* [encodedLength](_codec_vector_.vector.md#encodedlength)
* [isEmpty](_codec_vector_.vector.md#isempty)
* [length](_codec_vector_.vector.md#length)

### Methods

* [eq](_codec_vector_.vector.md#eq)
* [filter](_codec_vector_.vector.md#filter)
* [indexOf](_codec_vector_.vector.md#indexof)
* [map](_codec_vector_.vector.md#map)
* [toArray](_codec_vector_.vector.md#toarray)
* [toHex](_codec_vector_.vector.md#tohex)
* [toJSON](_codec_vector_.vector.md#tojson)
* [toRawType](_codec_vector_.vector.md#torawtype)
* [toString](_codec_vector_.vector.md#tostring)
* [toU8a](_codec_vector_.vector.md#tou8a)
* [decodeVector](_codec_vector_.vector.md#static-decodevector)
* [with](_codec_vector_.vector.md#static-with)

## Constructors

###  constructor

\+ **new Vector**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `value`: [Vector](_codec_vector_.vector.md)‹*any*› | `Uint8Array` | string | any[]): *[Vector](_codec_vector_.vector.md)*

*Defined in [codec/Vector.ts:22](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Vector.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› | - |
`value` | [Vector](_codec_vector_.vector.md)‹*any*› \| `Uint8Array` \| string \| any[] |  [] as any[] |

**Returns:** *[Vector](_codec_vector_.vector.md)*

## Accessors

###  Type

• **get Type**(): *string*

*Defined in [codec/Vector.ts:70](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Vector.ts#L70)*

**`description`** The type for the items

**Returns:** *string*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/AbstractArray.ts:29](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/AbstractArray.ts#L29)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/AbstractArray.ts#L22)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/AbstractArray.ts#L38)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:46](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/AbstractArray.ts#L46)*

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

*Defined in [codec/AbstractArray.ts:116](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/AbstractArray.ts#L116)*

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

###  indexOf

▸ **indexOf**(`_other?`: any): *number*

*Overrides void*

*Defined in [codec/Vector.ts:77](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Vector.ts#L77)*

**`description`** Finds the index of the value in the array

**Parameters:**

Name | Type |
------ | ------ |
`_other?` | any |

**Returns:** *number*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`U`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:125](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/AbstractArray.ts#L125)*

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

*Defined in [codec/AbstractArray.ts:53](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/AbstractArray.ts#L53)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`T`[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:60](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/AbstractArray.ts#L60)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/AbstractArray.ts#L67)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/Vector.ts:95](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Vector.ts#L95)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:81](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/AbstractArray.ts#L81)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/AbstractArray.ts:94](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/AbstractArray.ts#L94)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeVector

▸ **decodeVector**<**T**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `value`: [Vector](_codec_vector_.vector.md)‹*any*› | `Uint8Array` | string | any[]): *`T`[]*

*Defined in [codec/Vector.ts:32](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Vector.ts#L32)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |
`value` | [Vector](_codec_vector_.vector.md)‹*any*› \| `Uint8Array` \| string \| any[] |

**Returns:** *`T`[]*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`O`*›): *[Constructor](../interfaces/_types_.constructor.md)‹*[Vector](_codec_vector_.vector.md)‹*`O`*›*›*

*Defined in [codec/Vector.ts:55](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/codec/Vector.ts#L55)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`O`*› |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Vector](_codec_vector_.vector.md)‹*`O`*›*›*