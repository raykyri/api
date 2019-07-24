> # Interface: ContractStorageKey

## Hierarchy

  * [Vector](../classes/_codec_vector_.vector.md)‹*`u8`*›

  * **ContractStorageKey**

## Implements

* [Codec](_types_.codec.md)

## Indexable

● \[▪ **n**: *number*\]: `u8`

## Index

### Constructors

* [constructor](_srml_contracts_types_.contractstoragekey.md#constructor)

### Accessors

* [Type](_srml_contracts_types_.contractstoragekey.md#type)
* [encodedLength](_srml_contracts_types_.contractstoragekey.md#encodedlength)
* [isEmpty](_srml_contracts_types_.contractstoragekey.md#isempty)
* [length](_srml_contracts_types_.contractstoragekey.md#length)

### Methods

* [eq](_srml_contracts_types_.contractstoragekey.md#eq)
* [filter](_srml_contracts_types_.contractstoragekey.md#filter)
* [map](_srml_contracts_types_.contractstoragekey.md#map)
* [toArray](_srml_contracts_types_.contractstoragekey.md#toarray)
* [toHex](_srml_contracts_types_.contractstoragekey.md#tohex)
* [toJSON](_srml_contracts_types_.contractstoragekey.md#tojson)
* [toRawType](_srml_contracts_types_.contractstoragekey.md#torawtype)
* [toString](_srml_contracts_types_.contractstoragekey.md#tostring)
* [toU8a](_srml_contracts_types_.contractstoragekey.md#tou8a)
* [decodeVector](_srml_contracts_types_.contractstoragekey.md#static-decodevector)
* [with](_srml_contracts_types_.contractstoragekey.md#static-with)

## Constructors

###  constructor

\+ **new ContractStorageKey**(`Type`: [Constructor](_types_.constructor.md)‹*`u8`*›, `value`: [Vector](../classes/_codec_vector_.vector.md)‹*any*› | `Uint8Array` | string | any[]): *[ContractStorageKey](_srml_contracts_types_.contractstoragekey.md)*

*Inherited from [Vector](../classes/_codec_vector_.vector.md).[constructor](../classes/_codec_vector_.vector.md#constructor)*

*Defined in [codec/Vector.ts:22](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Vector.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Type` | [Constructor](_types_.constructor.md)‹*`u8`*› | - |
`value` | [Vector](../classes/_codec_vector_.vector.md)‹*any*› \| `Uint8Array` \| string \| any[] |  [] as any[] |

**Returns:** *[ContractStorageKey](_srml_contracts_types_.contractstoragekey.md)*

## Accessors

###  Type

• **get Type**(): *string*

*Inherited from [Vector](../classes/_codec_vector_.vector.md).[Type](../classes/_codec_vector_.vector.md#type)*

*Defined in [codec/Vector.ts:70](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Vector.ts#L70)*

**`description`** The type for the items

**Returns:** *string*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[encodedLength](../classes/_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/AbstractArray.ts:29](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L29)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[isEmpty](../classes/_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L22)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[length](../classes/_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L38)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[eq](../classes/_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:46](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *`u8`[]*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[filter](../classes/_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:116](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L116)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: `u8`, `index`: number, `array`: `u8`[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `u8` |
`index` | number |
`array` | `u8`[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *`u8`[]*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`U`[]*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[map](../classes/_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:125](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L125)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: `u8`, `index`: number, `array`: `u8`[]): *`U`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `u8` |
`index` | number |
`array` | `u8`[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *`U`[]*

___

###  toArray

▸ **toArray**(): *`u8`[]*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toArray](../classes/_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:53](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L53)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`u8`[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toHex](../classes/_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:60](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L60)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](_types_.anyjsonarray.md)*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toJSON](../classes/_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L67)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Vector](../classes/_codec_vector_.vector.md).[toRawType](../classes/_codec_vector_.vector.md#torawtype)*

*Overrides [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toRawType](../classes/_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/Vector.ts:95](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Vector.ts#L95)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toString](../classes/_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:81](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L81)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toU8a](../classes/_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/AbstractArray.ts:94](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/AbstractArray.ts#L94)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeVector

▸ **decodeVector**<**T**>(`Type`: [Constructor](_types_.constructor.md)‹*`T`*›, `value`: [Vector](../classes/_codec_vector_.vector.md)‹*any*› | `Uint8Array` | string | any[]): *`T`[]*

*Inherited from [Vector](../classes/_codec_vector_.vector.md).[decodeVector](../classes/_codec_vector_.vector.md#static-decodevector)*

*Defined in [codec/Vector.ts:32](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Vector.ts#L32)*

**Type parameters:**

▪ **T**: *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](_types_.constructor.md)‹*`T`*› |
`value` | [Vector](../classes/_codec_vector_.vector.md)‹*any*› \| `Uint8Array` \| string \| any[] |

**Returns:** *`T`[]*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](_types_.constructor.md)‹*`O`*›): *[Constructor](_types_.constructor.md)‹*[Vector](../classes/_codec_vector_.vector.md)‹*`O`*›*›*

*Inherited from [Vector](../classes/_codec_vector_.vector.md).[with](../classes/_codec_vector_.vector.md#static-with)*

*Defined in [codec/Vector.ts:55](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Vector.ts#L55)*

**Type parameters:**

▪ **O**: *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](_types_.constructor.md)‹*`O`*› |

**Returns:** *[Constructor](_types_.constructor.md)‹*[Vector](../classes/_codec_vector_.vector.md)‹*`O`*›*›*