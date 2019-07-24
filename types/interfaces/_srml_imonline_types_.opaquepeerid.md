> # Interface: OpaquePeerId

## Hierarchy

  * [Bytes](../classes/_primitive_bytes_.bytes.md)

  * **OpaquePeerId**

## Implements

* [Codec](_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_srml_imonline_types_.opaquepeerid.md#constructor)

### Accessors

* [encodedLength](_srml_imonline_types_.opaquepeerid.md#encodedlength)
* [isEmpty](_srml_imonline_types_.opaquepeerid.md#isempty)
* [length](_srml_imonline_types_.opaquepeerid.md#length)

### Methods

* [eq](_srml_imonline_types_.opaquepeerid.md#eq)
* [subarray](_srml_imonline_types_.opaquepeerid.md#subarray)
* [toHex](_srml_imonline_types_.opaquepeerid.md#tohex)
* [toJSON](_srml_imonline_types_.opaquepeerid.md#tojson)
* [toRawType](_srml_imonline_types_.opaquepeerid.md#torawtype)
* [toString](_srml_imonline_types_.opaquepeerid.md#tostring)
* [toU8a](_srml_imonline_types_.opaquepeerid.md#tou8a)

## Constructors

###  constructor

\+ **new OpaquePeerId**(`value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[OpaquePeerId](_srml_imonline_types_.opaquepeerid.md)*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[constructor](../classes/_primitive_bytes_.bytes.md#constructor)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[constructor](../classes/_codec_u8a_.u8a.md#constructor)*

*Defined in [primitive/Bytes.ts:18](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Bytes.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[OpaquePeerId](_srml_imonline_types_.opaquepeerid.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[encodedLength](../classes/_primitive_bytes_.bytes.md#encodedlength)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[encodedLength](../classes/_codec_u8a_.u8a.md#encodedlength)*

*Defined in [primitive/Bytes.ts:68](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Bytes.ts#L68)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[isEmpty](../classes/_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L43)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[length](../classes/_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:50](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L50)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[eq](../classes/_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L58)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *`Uint8Array`*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[subarray](../classes/_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L73)*

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

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toHex](../classes/_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:80](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L80)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toJSON](../classes/_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:87](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L87)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[toRawType](../classes/_primitive_bytes_.bytes.md#torawtype)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[toRawType](../classes/_codec_u8a_.u8a.md#torawtype)*

*Defined in [primitive/Bytes.ts:75](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Bytes.ts#L75)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toString](../classes/_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:101](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L101)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[toU8a](../classes/_primitive_bytes_.bytes.md#tou8a)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[toU8a](../classes/_codec_u8a_.u8a.md#tou8a)*

*Defined in [primitive/Bytes.ts:83](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Bytes.ts#L83)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*