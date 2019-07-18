> # Class: MisbehaviorKind

**`name`** MisbehaviorKind

**`description`** 
An [Enum](_codec_enumtype_.enum.md) containing a Bft misbehaviour

## Hierarchy

  * [Enum](_codec_enumtype_.enum.md)

  * **MisbehaviorKind**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_type_misbehaviorreport_.misbehaviorkind.md#constructor)

### Accessors

* [asBftDoubleCommit](_type_misbehaviorreport_.misbehaviorkind.md#asbftdoublecommit)
* [asBftDoublePrepare](_type_misbehaviorreport_.misbehaviorkind.md#asbftdoubleprepare)
* [asBftDoublePropose](_type_misbehaviorreport_.misbehaviorkind.md#asbftdoublepropose)
* [asBftProposeOutOfTurn](_type_misbehaviorreport_.misbehaviorkind.md#asbftproposeoutofturn)
* [encodedLength](_type_misbehaviorreport_.misbehaviorkind.md#encodedlength)
* [index](_type_misbehaviorreport_.misbehaviorkind.md#index)
* [isBftDoubleCommit](_type_misbehaviorreport_.misbehaviorkind.md#isbftdoublecommit)
* [isBftDoublePrepare](_type_misbehaviorreport_.misbehaviorkind.md#isbftdoubleprepare)
* [isBftDoublePropose](_type_misbehaviorreport_.misbehaviorkind.md#isbftdoublepropose)
* [isBftProposeOutOfTurn](_type_misbehaviorreport_.misbehaviorkind.md#isbftproposeoutofturn)
* [isEmpty](_type_misbehaviorreport_.misbehaviorkind.md#isempty)
* [isNone](_type_misbehaviorreport_.misbehaviorkind.md#isnone)
* [isNull](_type_misbehaviorreport_.misbehaviorkind.md#isnull)
* [type](_type_misbehaviorreport_.misbehaviorkind.md#type)
* [value](_type_misbehaviorreport_.misbehaviorkind.md#value)

### Methods

* [eq](_type_misbehaviorreport_.misbehaviorkind.md#eq)
* [toHex](_type_misbehaviorreport_.misbehaviorkind.md#tohex)
* [toJSON](_type_misbehaviorreport_.misbehaviorkind.md#tojson)
* [toNumber](_type_misbehaviorreport_.misbehaviorkind.md#tonumber)
* [toRawType](_type_misbehaviorreport_.misbehaviorkind.md#torawtype)
* [toString](_type_misbehaviorreport_.misbehaviorkind.md#tostring)
* [toU8a](_type_misbehaviorreport_.misbehaviorkind.md#tou8a)
* [with](_type_misbehaviorreport_.misbehaviorkind.md#static-with)

## Constructors

###  constructor

\+ **new MisbehaviorKind**(`value?`: `BftAtReportValue` | `Uint8Array`, `index?`: undefined | number): *[MisbehaviorKind](_type_misbehaviorreport_.misbehaviorkind.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [type/MisbehaviorReport.ts:123](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/MisbehaviorReport.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `BftAtReportValue` \| `Uint8Array` |
`index?` | undefined \| number |

**Returns:** *[MisbehaviorKind](_type_misbehaviorreport_.misbehaviorkind.md)*

## Accessors

###  asBftDoubleCommit

• **get asBftDoubleCommit**(): *[BftDoubleCommit](_type_misbehaviorreport_.bftdoublecommit.md)*

*Defined in [type/MisbehaviorReport.ts:136](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/MisbehaviorReport.ts#L136)*

**`description`** Returns the item as a [BftDoubleCommit](_type_misbehaviorreport_.bftdoublecommit.md)

**Returns:** *[BftDoubleCommit](_type_misbehaviorreport_.bftdoublecommit.md)*

___

###  asBftDoublePrepare

• **get asBftDoublePrepare**(): *[BftDoublePrepare](_type_misbehaviorreport_.bftdoubleprepare.md)*

*Defined in [type/MisbehaviorReport.ts:145](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/MisbehaviorReport.ts#L145)*

**`description`** Returns the item as a [BftDoublePrepare](_type_misbehaviorreport_.bftdoubleprepare.md)

**Returns:** *[BftDoublePrepare](_type_misbehaviorreport_.bftdoubleprepare.md)*

___

###  asBftDoublePropose

• **get asBftDoublePropose**(): *[BftDoublePropose](_type_misbehaviorreport_.bftdoublepropose.md)*

*Defined in [type/MisbehaviorReport.ts:154](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/MisbehaviorReport.ts#L154)*

**`description`** Returns the item as a [BftDoublePropose](_type_misbehaviorreport_.bftdoublepropose.md)

**Returns:** *[BftDoublePropose](_type_misbehaviorreport_.bftdoublepropose.md)*

___

###  asBftProposeOutOfTurn

• **get asBftProposeOutOfTurn**(): *[BftProposeOutOfTurn](_type_misbehaviorreport_.bftproposeoutofturn.md)*

*Defined in [type/MisbehaviorReport.ts:163](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/MisbehaviorReport.ts#L163)*

**`description`** Returns the item as a [BftProposeOutOfTurn](_type_misbehaviorreport_.bftproposeoutofturn.md)

**Returns:** *[BftProposeOutOfTurn](_type_misbehaviorreport_.bftproposeoutofturn.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Defined in [codec/EnumType.ts:164](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L164)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:171](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L171)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isBftDoubleCommit

• **get isBftDoubleCommit**(): *boolean*

*Defined in [type/MisbehaviorReport.ts:172](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/MisbehaviorReport.ts#L172)*

**`description`** true when this is a BftDoubleCommit

**Returns:** *boolean*

___

###  isBftDoublePrepare

• **get isBftDoublePrepare**(): *boolean*

*Defined in [type/MisbehaviorReport.ts:179](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/MisbehaviorReport.ts#L179)*

**`description`** true when this is a BftDoublePrepare

**Returns:** *boolean*

___

###  isBftDoublePropose

• **get isBftDoublePropose**(): *boolean*

*Defined in [type/MisbehaviorReport.ts:186](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/MisbehaviorReport.ts#L186)*

**`description`** true when this is a BftDoublePropose

**Returns:** *boolean*

___

###  isBftProposeOutOfTurn

• **get isBftProposeOutOfTurn**(): *boolean*

*Defined in [type/MisbehaviorReport.ts:193](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/MisbehaviorReport.ts#L193)*

**`description`** true when this is a BftProposeOutOfTurn

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isEmpty](_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:178](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L178)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:185](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L185)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L192)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:199](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L199)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:206](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L206)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

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

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Defined in [codec/EnumType.ts:228](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L228)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [codec/EnumType.ts:235](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L235)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:244](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L244)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:251](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L251)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [codec/EnumType.ts:266](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L266)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

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

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/EnumType.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*