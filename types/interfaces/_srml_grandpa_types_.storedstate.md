> # Interface: StoredState

## Hierarchy

  * [Enum](../classes/_codec_enumtype_.enum.md)

  * **StoredState**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_srml_grandpa_types_.storedstate.md#constructor)

### Properties

* [asPendingPause](_srml_grandpa_types_.storedstate.md#aspendingpause)
* [asPendingResume](_srml_grandpa_types_.storedstate.md#aspendingresume)
* [isLive](_srml_grandpa_types_.storedstate.md#islive)
* [isPaused](_srml_grandpa_types_.storedstate.md#ispaused)
* [isPendingPause](_srml_grandpa_types_.storedstate.md#ispendingpause)
* [isPendingResume](_srml_grandpa_types_.storedstate.md#ispendingresume)

### Accessors

* [encodedLength](_srml_grandpa_types_.storedstate.md#encodedlength)
* [index](_srml_grandpa_types_.storedstate.md#index)
* [isEmpty](_srml_grandpa_types_.storedstate.md#isempty)
* [isNone](_srml_grandpa_types_.storedstate.md#isnone)
* [isNull](_srml_grandpa_types_.storedstate.md#isnull)
* [type](_srml_grandpa_types_.storedstate.md#type)
* [value](_srml_grandpa_types_.storedstate.md#value)

### Methods

* [eq](_srml_grandpa_types_.storedstate.md#eq)
* [toHex](_srml_grandpa_types_.storedstate.md#tohex)
* [toJSON](_srml_grandpa_types_.storedstate.md#tojson)
* [toNumber](_srml_grandpa_types_.storedstate.md#tonumber)
* [toRawType](_srml_grandpa_types_.storedstate.md#torawtype)
* [toString](_srml_grandpa_types_.storedstate.md#tostring)
* [toU8a](_srml_grandpa_types_.storedstate.md#tou8a)
* [with](_srml_grandpa_types_.storedstate.md#static-with)

## Constructors

###  constructor

\+ **new StoredState**(`def`: `TypesDef` | string[], `value?`: any, `index?`: number | [Enum](../classes/_codec_enumtype_.enum.md)): *[StoredState](_srml_grandpa_types_.storedstate.md)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[constructor](../classes/_codec_enumtype_.enum.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:39](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | `TypesDef` \| string[] |
`value?` | any |
`index?` | number \| [Enum](../classes/_codec_enumtype_.enum.md) |

**Returns:** *[StoredState](_srml_grandpa_types_.storedstate.md)*

## Properties

###  asPendingPause

• **asPendingPause**: *[PendingPause](_srml_grandpa_types_.pendingpause.md)*

*Defined in [srml/grandpa/types.ts:39](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/srml/grandpa/types.ts#L39)*

___

###  asPendingResume

• **asPendingResume**: *[PendingResume](_srml_grandpa_types_.pendingresume.md)*

*Defined in [srml/grandpa/types.ts:48](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/srml/grandpa/types.ts#L48)*

___

###  isLive

• **isLive**: *boolean*

*Defined in [srml/grandpa/types.ts:34](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/srml/grandpa/types.ts#L34)*

**`description`** 0:: Live

___

###  isPaused

• **isPaused**: *boolean*

*Defined in [srml/grandpa/types.ts:43](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/srml/grandpa/types.ts#L43)*

**`description`** 2:: Paused

___

###  isPendingPause

• **isPendingPause**: *boolean*

*Defined in [srml/grandpa/types.ts:38](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/srml/grandpa/types.ts#L38)*

**`description`** 1:: PendingPause(PendingPause)

___

###  isPendingResume

• **isPendingResume**: *boolean*

*Defined in [srml/grandpa/types.ts:47](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/srml/grandpa/types.ts#L47)*

**`description`** 3:: PendingResume(PendingResume)

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[encodedLength](../classes/_codec_enumtype_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:164](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L164)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[index](../classes/_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:171](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L171)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:28](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Base.ts#L28)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[isNone](../classes/_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:178](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L178)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[isNull](../classes/_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:185](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L185)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[type](../classes/_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L192)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[value](../classes/_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:199](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L199)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[eq](../classes/_codec_enumtype_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [codec/EnumType.ts:206](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L206)*

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

*Defined in [codec/EnumType.ts:221](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L221)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toJSON](../classes/_codec_enumtype_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [codec/EnumType.ts:228](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L228)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toNumber](../classes/_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:237](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L237)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toRawType](../classes/_codec_enumtype_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [codec/EnumType.ts:244](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L244)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toString](../classes/_codec_enumtype_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [codec/EnumType.ts:259](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L259)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toU8a](../classes/_codec_enumtype_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [codec/EnumType.ts:269](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L269)*

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

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/EnumType.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*