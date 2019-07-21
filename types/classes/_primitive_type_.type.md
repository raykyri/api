> # Class: Type

**`name`** Type

**`description`** 
This is a extended version of String, specifically to handle types. Here we rely fully
on what string provides us, however we also adjust the types received from the runtime,
i.e. we remove the `T::` prefixes found in some types for consistency accross implementation.

## Hierarchy

  * [Text](_primitive_text_.text.md)

  * **Type**

  * [PlainType](_metadata_v0_storage_.plaintype.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: string

## Index

### Constructors

* [constructor](_primitive_type_.type.md#constructor)

### Accessors

* [encodedLength](_primitive_type_.type.md#encodedlength)
* [isEmpty](_primitive_type_.type.md#isempty)
* [length](_primitive_type_.type.md#length)

### Methods

* [eq](_primitive_type_.type.md#eq)
* [toHex](_primitive_type_.type.md#tohex)
* [toJSON](_primitive_type_.type.md#tojson)
* [toRawType](_primitive_type_.type.md#torawtype)
* [toString](_primitive_type_.type.md#tostring)
* [toU8a](_primitive_type_.type.md#tou8a)

## Constructors

###  constructor

\+ **new Type**(`value`: [Text](_primitive_text_.text.md) | `Uint8Array` | string): *[Type](_primitive_type_.type.md)*

*Overrides [Text](_primitive_text_.text.md).[constructor](_primitive_text_.text.md#constructor)*

*Defined in [primitive/Type.ts:19](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/Type.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [Text](_primitive_text_.text.md) \| `Uint8Array` \| string | "" |

**Returns:** *[Type](_primitive_type_.type.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Text](_primitive_text_.text.md).[encodedLength](_primitive_text_.text.md#encodedlength)*

*Defined in [primitive/Type.ts:86](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/Type.ts#L86)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Text](_primitive_text_.text.md).[isEmpty](_primitive_text_.text.md#isempty)*

*Defined in [primitive/Text.ts:56](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/Text.ts#L56)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Text](_primitive_text_.text.md).[length](_primitive_text_.text.md#length)*

*Overrides void*

*Defined in [primitive/Text.ts:63](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/Text.ts#L63)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Text](_primitive_text_.text.md).[eq](_primitive_text_.text.md#eq)*

*Defined in [primitive/Text.ts:71](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/Text.ts#L71)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Text](_primitive_text_.text.md).[toHex](_primitive_text_.text.md#tohex)*

*Defined in [primitive/Text.ts:80](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/Text.ts#L80)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Text](_primitive_text_.text.md).[toJSON](_primitive_text_.text.md#tojson)*

*Defined in [primitive/Text.ts:89](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/Text.ts#L89)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Text](_primitive_text_.text.md).[toRawType](_primitive_text_.text.md#torawtype)*

*Defined in [primitive/Type.ts:255](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/Type.ts#L255)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Text](_primitive_text_.text.md).[toString](_primitive_text_.text.md#tostring)*

*Overrides void*

*Defined in [primitive/Text.ts:103](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/Text.ts#L103)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Text](_primitive_text_.text.md).[toU8a](_primitive_text_.text.md#tou8a)*

*Defined in [primitive/Type.ts:98](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/Type.ts#L98)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*