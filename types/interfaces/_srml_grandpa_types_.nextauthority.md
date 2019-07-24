> # Interface: NextAuthority

## Hierarchy

* [Codec](_types_.codec.md)

* Object

  * **NextAuthority**

## Index

### Properties

* [encodedLength](_srml_grandpa_types_.nextauthority.md#encodedlength)
* [isEmpty](_srml_grandpa_types_.nextauthority.md#isempty)

### Methods

* [eq](_srml_grandpa_types_.nextauthority.md#eq)
* [toHex](_srml_grandpa_types_.nextauthority.md#tohex)
* [toJSON](_srml_grandpa_types_.nextauthority.md#tojson)
* [toRawType](_srml_grandpa_types_.nextauthority.md#torawtype)
* [toString](_srml_grandpa_types_.nextauthority.md#tostring)
* [toU8a](_srml_grandpa_types_.nextauthority.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:57](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/types.ts#L57)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:62](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/types.ts#L62)*

**`description`** Checks if the value is an empty value

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:67](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/types.ts#L67)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:72](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/types.ts#L72)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/types.ts#L77)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/types.ts#L82)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/types.ts#L87)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:93](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/types.ts#L93)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*