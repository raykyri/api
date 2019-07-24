> # Interface: SlotRange

## Hierarchy

  * [Enum](../classes/_codec_enumtype_.enum.md)

  * **SlotRange**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_srml_parachains_types_.slotrange.md#constructor)

### Properties

* [isOneOne](_srml_parachains_types_.slotrange.md#isoneone)
* [isOneThree](_srml_parachains_types_.slotrange.md#isonethree)
* [isOneTwo](_srml_parachains_types_.slotrange.md#isonetwo)
* [isThreeThree](_srml_parachains_types_.slotrange.md#isthreethree)
* [isTwoThree](_srml_parachains_types_.slotrange.md#istwothree)
* [isTwoTwo](_srml_parachains_types_.slotrange.md#istwotwo)
* [isZeroOne](_srml_parachains_types_.slotrange.md#iszeroone)
* [isZeroThree](_srml_parachains_types_.slotrange.md#iszerothree)
* [isZeroTwo](_srml_parachains_types_.slotrange.md#iszerotwo)
* [isZeroZero](_srml_parachains_types_.slotrange.md#iszerozero)

### Accessors

* [encodedLength](_srml_parachains_types_.slotrange.md#encodedlength)
* [index](_srml_parachains_types_.slotrange.md#index)
* [isEmpty](_srml_parachains_types_.slotrange.md#isempty)
* [isNone](_srml_parachains_types_.slotrange.md#isnone)
* [isNull](_srml_parachains_types_.slotrange.md#isnull)
* [type](_srml_parachains_types_.slotrange.md#type)
* [value](_srml_parachains_types_.slotrange.md#value)

### Methods

* [eq](_srml_parachains_types_.slotrange.md#eq)
* [toHex](_srml_parachains_types_.slotrange.md#tohex)
* [toJSON](_srml_parachains_types_.slotrange.md#tojson)
* [toNumber](_srml_parachains_types_.slotrange.md#tonumber)
* [toRawType](_srml_parachains_types_.slotrange.md#torawtype)
* [toString](_srml_parachains_types_.slotrange.md#tostring)
* [toU8a](_srml_parachains_types_.slotrange.md#tou8a)
* [with](_srml_parachains_types_.slotrange.md#static-with)

## Constructors

###  constructor

\+ **new SlotRange**(`def`: `TypesDef` | string[], `value?`: any, `index?`: number | [Enum](../classes/_codec_enumtype_.enum.md)): *[SlotRange](_srml_parachains_types_.slotrange.md)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[constructor](../classes/_codec_enumtype_.enum.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:39](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | `TypesDef` \| string[] |
`value?` | any |
`index?` | number \| [Enum](../classes/_codec_enumtype_.enum.md) |

**Returns:** *[SlotRange](_srml_parachains_types_.slotrange.md)*

## Properties

###  isOneOne

• **isOneOne**: *boolean*

*Defined in [srml/parachains/types.ts:127](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/srml/parachains/types.ts#L127)*

**`description`** 4:: OneOne

___

###  isOneThree

• **isOneThree**: *boolean*

*Defined in [srml/parachains/types.ts:135](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/srml/parachains/types.ts#L135)*

**`description`** 6:: OneThree

___

###  isOneTwo

• **isOneTwo**: *boolean*

*Defined in [srml/parachains/types.ts:131](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/srml/parachains/types.ts#L131)*

**`description`** 5:: OneTwo

___

###  isThreeThree

• **isThreeThree**: *boolean*

*Defined in [srml/parachains/types.ts:147](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/srml/parachains/types.ts#L147)*

**`description`** 9:: ThreeThree

___

###  isTwoThree

• **isTwoThree**: *boolean*

*Defined in [srml/parachains/types.ts:143](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/srml/parachains/types.ts#L143)*

**`description`** 8:: TwoThree

___

###  isTwoTwo

• **isTwoTwo**: *boolean*

*Defined in [srml/parachains/types.ts:139](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/srml/parachains/types.ts#L139)*

**`description`** 7:: TwoTwo

___

###  isZeroOne

• **isZeroOne**: *boolean*

*Defined in [srml/parachains/types.ts:115](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/srml/parachains/types.ts#L115)*

**`description`** 1:: ZeroOne

___

###  isZeroThree

• **isZeroThree**: *boolean*

*Defined in [srml/parachains/types.ts:123](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/srml/parachains/types.ts#L123)*

**`description`** 3:: ZeroThree

___

###  isZeroTwo

• **isZeroTwo**: *boolean*

*Defined in [srml/parachains/types.ts:119](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/srml/parachains/types.ts#L119)*

**`description`** 2:: ZeroTwo

___

###  isZeroZero

• **isZeroZero**: *boolean*

*Defined in [srml/parachains/types.ts:111](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/srml/parachains/types.ts#L111)*

**`description`** 0:: ZeroZero

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[encodedLength](../classes/_codec_enumtype_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:164](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L164)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[index](../classes/_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:171](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L171)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:28](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Base.ts#L28)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[isNone](../classes/_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:178](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L178)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[isNull](../classes/_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:185](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L185)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[type](../classes/_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L192)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[value](../classes/_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:199](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L199)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[eq](../classes/_codec_enumtype_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [codec/EnumType.ts:206](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L206)*

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

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [codec/EnumType.ts:221](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L221)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toJSON](../classes/_codec_enumtype_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [codec/EnumType.ts:228](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L228)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toNumber](../classes/_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:237](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L237)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toRawType](../classes/_codec_enumtype_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [codec/EnumType.ts:244](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L244)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toString](../classes/_codec_enumtype_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [codec/EnumType.ts:259](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L259)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toU8a](../classes/_codec_enumtype_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [codec/EnumType.ts:269](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L269)*

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

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*