> # Class: Key

**`name`** Key

**`description`** 
The Substrate Key representation as a [Bytes](_primitive_bytes_.bytes.md) (`vec<u8>`).

## Hierarchy

  * [Bytes](_primitive_bytes_.bytes.md)

  * **Key**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_type_key_.key.md#constructor)

### Accessors

* [encodedLength](_type_key_.key.md#encodedlength)
* [isEmpty](_type_key_.key.md#isempty)
* [length](_type_key_.key.md#length)

### Methods

* [eq](_type_key_.key.md#eq)
* [subarray](_type_key_.key.md#subarray)
* [toHex](_type_key_.key.md#tohex)
* [toJSON](_type_key_.key.md#tojson)
* [toRawType](_type_key_.key.md#torawtype)
* [toString](_type_key_.key.md#tostring)
* [toU8a](_type_key_.key.md#tou8a)

## Constructors

###  constructor

\+ **new Key**(`value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[Key](_type_key_.key.md)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[constructor](_primitive_bytes_.bytes.md#constructor)*

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [primitive/Bytes.ts:18](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Bytes.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[Key](_type_key_.key.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[encodedLength](_primitive_bytes_.bytes.md#encodedlength)*

*Overrides [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [primitive/Bytes.ts:68](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Bytes.ts#L68)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/U8a.ts#L43)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:50](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/U8a.ts#L50)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/U8a.ts#L58)*

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

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/U8a.ts#L73)*

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

*Defined in [codec/U8a.ts:80](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/U8a.ts#L80)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:87](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/U8a.ts#L87)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[toRawType](_primitive_bytes_.bytes.md#torawtype)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toRawType](_codec_u8a_.u8a.md#torawtype)*

*Defined in [primitive/Bytes.ts:75](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Bytes.ts#L75)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:101](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/U8a.ts#L101)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[toU8a](_primitive_bytes_.bytes.md#tou8a)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [primitive/Bytes.ts:83](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Bytes.ts#L83)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*