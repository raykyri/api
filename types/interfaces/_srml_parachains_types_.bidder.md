> # Interface: Bidder

## Hierarchy

  * [Enum](../classes/_codec_enumtype_.enum.md)

  * **Bidder**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_srml_parachains_types_.bidder.md#constructor)

### Properties

* [asExisting](_srml_parachains_types_.bidder.md#asexisting)
* [asNew](_srml_parachains_types_.bidder.md#asnew)
* [isExisting](_srml_parachains_types_.bidder.md#isexisting)
* [isNew](_srml_parachains_types_.bidder.md#isnew)

### Accessors

* [encodedLength](_srml_parachains_types_.bidder.md#encodedlength)
* [index](_srml_parachains_types_.bidder.md#index)
* [isEmpty](_srml_parachains_types_.bidder.md#isempty)
* [isNone](_srml_parachains_types_.bidder.md#isnone)
* [isNull](_srml_parachains_types_.bidder.md#isnull)
* [type](_srml_parachains_types_.bidder.md#type)
* [value](_srml_parachains_types_.bidder.md#value)

### Methods

* [eq](_srml_parachains_types_.bidder.md#eq)
* [toHex](_srml_parachains_types_.bidder.md#tohex)
* [toJSON](_srml_parachains_types_.bidder.md#tojson)
* [toNumber](_srml_parachains_types_.bidder.md#tonumber)
* [toRawType](_srml_parachains_types_.bidder.md#torawtype)
* [toString](_srml_parachains_types_.bidder.md#tostring)
* [toU8a](_srml_parachains_types_.bidder.md#tou8a)
* [with](_srml_parachains_types_.bidder.md#static-with)

## Constructors

###  constructor

\+ **new Bidder**(`def`: `TypesDef` | string[], `value?`: any, `index?`: number | [Enum](../classes/_codec_enumtype_.enum.md)): *[Bidder](_srml_parachains_types_.bidder.md)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[constructor](../classes/_codec_enumtype_.enum.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:39](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | `TypesDef` \| string[] |
`value?` | any |
`index?` | number \| [Enum](../classes/_codec_enumtype_.enum.md) |

**Returns:** *[Bidder](_srml_parachains_types_.bidder.md)*

## Properties

###  asExisting

• **asExisting**: *[ParaId](_srml_parachains_types_.paraid.md)*

*Defined in [srml/parachains/types.ts:32](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/srml/parachains/types.ts#L32)*

___

###  asNew

• **asNew**: *[NewBidder](_srml_parachains_types_.newbidder.md)*

*Defined in [srml/parachains/types.ts:27](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/srml/parachains/types.ts#L27)*

___

###  isExisting

• **isExisting**: *boolean*

*Defined in [srml/parachains/types.ts:31](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/srml/parachains/types.ts#L31)*

**`description`** 1:: Existing(ParaId)

___

###  isNew

• **isNew**: *boolean*

*Defined in [srml/parachains/types.ts:26](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/srml/parachains/types.ts#L26)*

**`description`** 0:: New(NewBidder)

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[encodedLength](../classes/_codec_enumtype_.enum.md#encodedlength)*

*Defined in [codec/EnumType.ts:164](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L164)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[index](../classes/_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:171](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L171)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[isEmpty](../classes/_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:178](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L178)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[isNone](../classes/_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:185](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L185)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[isNull](../classes/_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L192)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[type](../classes/_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:199](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L199)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[value](../classes/_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:206](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L206)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[eq](../classes/_codec_enumtype_.enum.md#eq)*

*Defined in [codec/EnumType.ts:213](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L213)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toHex](../classes/_codec_enumtype_.enum.md#tohex)*

*Defined in [codec/EnumType.ts:228](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L228)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toJSON](../classes/_codec_enumtype_.enum.md#tojson)*

*Defined in [codec/EnumType.ts:235](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L235)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toNumber](../classes/_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:244](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L244)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toRawType](../classes/_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:251](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L251)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toString](../classes/_codec_enumtype_.enum.md#tostring)*

*Defined in [codec/EnumType.ts:266](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L266)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toU8a](../classes/_codec_enumtype_.enum.md#tou8a)*

*Defined in [codec/EnumType.ts:276](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L276)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TypesDef` | string[]): *`EnumConstructor<Enum>`*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[with](../classes/_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*