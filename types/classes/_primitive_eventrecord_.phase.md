> # Class: Phase

**`name`** Phase

**`description`** 
An [Enum](_codec_enumtype_.enum.md) that indicates the specific phase where the [EventRecord](_primitive_eventrecord_.eventrecord.md) was generated

## Hierarchy

  * [Enum](_codec_enumtype_.enum.md)

  * **Phase**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_eventrecord_.phase.md#constructor)

### Accessors

* [asApplyExtrinsic](_primitive_eventrecord_.phase.md#asapplyextrinsic)
* [asFinalization](_primitive_eventrecord_.phase.md#asfinalization)
* [encodedLength](_primitive_eventrecord_.phase.md#encodedlength)
* [index](_primitive_eventrecord_.phase.md#index)
* [isApplyExtrinsic](_primitive_eventrecord_.phase.md#isapplyextrinsic)
* [isEmpty](_primitive_eventrecord_.phase.md#isempty)
* [isFinalization](_primitive_eventrecord_.phase.md#isfinalization)
* [isNone](_primitive_eventrecord_.phase.md#isnone)
* [isNull](_primitive_eventrecord_.phase.md#isnull)
* [type](_primitive_eventrecord_.phase.md#type)
* [value](_primitive_eventrecord_.phase.md#value)

### Methods

* [eq](_primitive_eventrecord_.phase.md#eq)
* [toHex](_primitive_eventrecord_.phase.md#tohex)
* [toJSON](_primitive_eventrecord_.phase.md#tojson)
* [toNumber](_primitive_eventrecord_.phase.md#tonumber)
* [toRawType](_primitive_eventrecord_.phase.md#torawtype)
* [toString](_primitive_eventrecord_.phase.md#tostring)
* [toU8a](_primitive_eventrecord_.phase.md#tou8a)
* [with](_primitive_eventrecord_.phase.md#static-with)

## Constructors

###  constructor

\+ **new Phase**(`value`: any, `index?`: undefined | number): *[Phase](_primitive_eventrecord_.phase.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [primitive/EventRecord.ts:36](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/primitive/EventRecord.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`index?` | undefined \| number |

**Returns:** *[Phase](_primitive_eventrecord_.phase.md)*

## Accessors

###  asApplyExtrinsic

• **get asApplyExtrinsic**(): *[ApplyExtrinsic](_primitive_eventrecord_.applyextrinsic.md)*

*Defined in [primitive/EventRecord.ts:47](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/primitive/EventRecord.ts#L47)*

**`description`** Returns the item as a [ApplyExtrinsic](_primitive_eventrecord_.applyextrinsic.md)

**Returns:** *[ApplyExtrinsic](_primitive_eventrecord_.applyextrinsic.md)*

___

###  asFinalization

• **get asFinalization**(): *[Finalization](_primitive_eventrecord_.finalization.md)*

*Defined in [primitive/EventRecord.ts:56](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/primitive/EventRecord.ts#L56)*

**`description`** Returns the item as a [Finalization](_primitive_eventrecord_.finalization.md)

**Returns:** *[Finalization](_primitive_eventrecord_.finalization.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:164](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L164)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:171](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L171)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isApplyExtrinsic

• **get isApplyExtrinsic**(): *boolean*

*Defined in [primitive/EventRecord.ts:65](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/primitive/EventRecord.ts#L65)*

**`description`** true when this is a ApplyExtrinsic

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:28](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/Base.ts#L28)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isFinalization

• **get isFinalization**(): *boolean*

*Defined in [primitive/EventRecord.ts:72](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/primitive/EventRecord.ts#L72)*

**`description`** true when this is a ApplyExtrinsic

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:178](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L178)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:185](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L185)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L192)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:199](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L199)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/EnumType.ts:206](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L206)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/EnumType.ts:221](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L221)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/EnumType.ts:228](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L228)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:237](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L237)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/EnumType.ts:244](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L244)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/EnumType.ts:259](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L259)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/EnumType.ts:269](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L269)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TypesDef` | string[]): *`EnumConstructor<Enum>`*

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/3827353/packages/types/src/codec/EnumType.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*