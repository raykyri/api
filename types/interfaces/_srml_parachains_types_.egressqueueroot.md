> # Interface: EgressQueueRoot

## Hierarchy

* [Codec](_types_.codec.md)

* Object

  * **EgressQueueRoot**

### Index

#### Properties

* [encodedLength](_srml_parachains_types_.egressqueueroot.md#encodedlength)
* [isEmpty](_srml_parachains_types_.egressqueueroot.md#isempty)

#### Methods

* [eq](_srml_parachains_types_.egressqueueroot.md#eq)
* [toHex](_srml_parachains_types_.egressqueueroot.md#tohex)
* [toJSON](_srml_parachains_types_.egressqueueroot.md#tojson)
* [toRawType](_srml_parachains_types_.egressqueueroot.md#torawtype)
* [toString](_srml_parachains_types_.egressqueueroot.md#tostring)
* [toU8a](_srml_parachains_types_.egressqueueroot.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:55](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/types.ts#L55)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:60](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/types.ts#L60)*

**`description`** Checks if the value is an empty value

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:66](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/types.ts#L66)*

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

*Defined in [types.ts:71](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/types.ts#L71)*

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

*Defined in [types.ts:76](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/types.ts#L76)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:81](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/types.ts#L81)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:86](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/types.ts#L86)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:92](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/types.ts#L92)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*