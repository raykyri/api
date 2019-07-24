> # Class: Finalization

**`name`** Finalization

**`description`** 
The [Phase](_primitive_eventrecord_.phase.md) where the extrinsic is being Finalized

## Hierarchy

* [Null](_primitive_null_.null.md)

  * **Finalization**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Accessors

* [encodedLength](_primitive_eventrecord_.finalization.md#encodedlength)
* [isEmpty](_primitive_eventrecord_.finalization.md#isempty)

### Methods

* [eq](_primitive_eventrecord_.finalization.md#eq)
* [toHex](_primitive_eventrecord_.finalization.md#tohex)
* [toJSON](_primitive_eventrecord_.finalization.md#tojson)
* [toRawType](_primitive_eventrecord_.finalization.md#torawtype)
* [toString](_primitive_eventrecord_.finalization.md#tostring)
* [toU8a](_primitive_eventrecord_.finalization.md#tou8a)

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Null](_primitive_null_.null.md).[encodedLength](_primitive_null_.null.md#encodedlength)*

*Defined in [primitive/Null.ts:17](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Null.ts#L17)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Null](_primitive_null_.null.md).[isEmpty](_primitive_null_.null.md#isempty)*

*Defined in [primitive/Null.ts:24](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Null.ts#L24)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[eq](_primitive_null_.null.md#eq)*

*Defined in [primitive/Null.ts:31](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Null.ts#L31)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Null](_primitive_null_.null.md).[toHex](_primitive_null_.null.md#tohex)*

*Defined in [primitive/Null.ts:38](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Null.ts#L38)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *null*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toJSON](_primitive_null_.null.md#tojson)*

*Defined in [primitive/Null.ts:45](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Null.ts#L45)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toRawType](_primitive_null_.null.md#torawtype)*

*Defined in [primitive/Null.ts:52](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Null.ts#L52)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toString](_primitive_null_.null.md#tostring)*

*Defined in [primitive/Null.ts:59](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Null.ts#L59)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toU8a](_primitive_null_.null.md#tou8a)*

*Defined in [primitive/Null.ts:68](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Null.ts#L68)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*