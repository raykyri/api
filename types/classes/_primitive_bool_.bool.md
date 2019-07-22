> # Class: Bool

**`name`** Bool

**`description`** 
Representation for a boolean value in the system. It extends the base JS `Boolean` class

## Hierarchy

* `Boolean`

  * **Bool**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_bool_.bool.md#constructor)

### Properties

* [Boolean](_primitive_bool_.bool.md#static-boolean)

### Accessors

* [encodedLength](_primitive_bool_.bool.md#encodedlength)
* [isEmpty](_primitive_bool_.bool.md#isempty)

### Methods

* [eq](_primitive_bool_.bool.md#eq)
* [toHex](_primitive_bool_.bool.md#tohex)
* [toJSON](_primitive_bool_.bool.md#tojson)
* [toRawType](_primitive_bool_.bool.md#torawtype)
* [toString](_primitive_bool_.bool.md#tostring)
* [toU8a](_primitive_bool_.bool.md#tou8a)

## Constructors

###  constructor

\+ **new Bool**(`value`: [Bool](_primitive_bool_.bool.md) | `Boolean` | `Uint8Array` | boolean | number): *[Bool](_primitive_bool_.bool.md)*

*Defined in [primitive/Bool.ts:15](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/primitive/Bool.ts#L15)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [Bool](_primitive_bool_.bool.md) \| `Boolean` \| `Uint8Array` \| boolean \| number | false |

**Returns:** *[Bool](_primitive_bool_.bool.md)*

## Properties

### `Static` Boolean

▪ **Boolean**: *`BooleanConstructor`*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:540

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [primitive/Bool.ts:36](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/primitive/Bool.ts#L36)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [primitive/Bool.ts:43](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/primitive/Bool.ts#L43)*

**`description`** Checks if the value is an empty value (always false)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Bool.ts:50](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/primitive/Bool.ts#L50)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [primitive/Bool.ts:61](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/primitive/Bool.ts#L61)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Bool.ts:68](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/primitive/Bool.ts#L68)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *boolean*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Bool.ts:75](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/primitive/Bool.ts#L75)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Bool.ts:82](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/primitive/Bool.ts#L82)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Bool.ts:91](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/primitive/Bool.ts#L91)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*