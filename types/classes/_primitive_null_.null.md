> # Class: Null

**`name`** Null

**`description`** 
Implements a type that does not contain anything (apart from `null`)

## Hierarchy

* **Null**

  * [Phantom](_primitive_null_.phantom.md)

  * [Unconstructable](_primitive_unconstructable_.unconstructable.md)

  * [Finalization](_primitive_eventrecord_.finalization.md)

  * [Origin](_primitive_origin_.origin.md)

  * [Dropped](_rpc_extrinsicstatus_.dropped.md)

  * [Future](_rpc_extrinsicstatus_.future.md)

  * [Ready](_rpc_extrinsicstatus_.ready.md)

  * [Invalid](_rpc_extrinsicstatus_.invalid.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Accessors

* [encodedLength](_primitive_null_.null.md#encodedlength)
* [isEmpty](_primitive_null_.null.md#isempty)

### Methods

* [eq](_primitive_null_.null.md#eq)
* [toHex](_primitive_null_.null.md#tohex)
* [toJSON](_primitive_null_.null.md#tojson)
* [toRawType](_primitive_null_.null.md#torawtype)
* [toString](_primitive_null_.null.md#tostring)
* [toU8a](_primitive_null_.null.md#tou8a)

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [primitive/Null.ts:17](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Null.ts#L17)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [primitive/Null.ts:24](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Null.ts#L24)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Null.ts:31](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Null.ts#L31)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [primitive/Null.ts:38](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Null.ts#L38)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *null*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Null.ts:45](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Null.ts#L45)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Null.ts:52](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Null.ts#L52)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Null.ts:59](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Null.ts#L59)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Null.ts:68](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/primitive/Null.ts#L68)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*