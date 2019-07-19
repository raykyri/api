> # Class: ContractInfo

**`name`** ContractInfo

**`description`** 
The contract information for a given contract

## Hierarchy

  * [Enum](_codec_enumtype_.enum.md)

  * **ContractInfo**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_type_contractinfo_.contractinfo.md#constructor)

### Accessors

* [asAlive](_type_contractinfo_.contractinfo.md#asalive)
* [asTombstone](_type_contractinfo_.contractinfo.md#astombstone)
* [encodedLength](_type_contractinfo_.contractinfo.md#encodedlength)
* [index](_type_contractinfo_.contractinfo.md#index)
* [isAlive](_type_contractinfo_.contractinfo.md#isalive)
* [isEmpty](_type_contractinfo_.contractinfo.md#isempty)
* [isNone](_type_contractinfo_.contractinfo.md#isnone)
* [isNull](_type_contractinfo_.contractinfo.md#isnull)
* [isTombstone](_type_contractinfo_.contractinfo.md#istombstone)
* [type](_type_contractinfo_.contractinfo.md#type)
* [value](_type_contractinfo_.contractinfo.md#value)

### Methods

* [eq](_type_contractinfo_.contractinfo.md#eq)
* [toHex](_type_contractinfo_.contractinfo.md#tohex)
* [toJSON](_type_contractinfo_.contractinfo.md#tojson)
* [toNumber](_type_contractinfo_.contractinfo.md#tonumber)
* [toRawType](_type_contractinfo_.contractinfo.md#torawtype)
* [toString](_type_contractinfo_.contractinfo.md#tostring)
* [toU8a](_type_contractinfo_.contractinfo.md#tou8a)
* [with](_type_contractinfo_.contractinfo.md#static-with)

## Constructors

###  constructor

\+ **new ContractInfo**(`value?`: any): *[ContractInfo](_type_contractinfo_.contractinfo.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [type/ContractInfo.ts:71](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/ContractInfo.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[ContractInfo](_type_contractinfo_.contractinfo.md)*

## Accessors

###  asAlive

• **get asAlive**(): *[Alive](_type_contractinfo_.alive.md)*

*Defined in [type/ContractInfo.ts:82](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/ContractInfo.ts#L82)*

**`description`** Returns the item as an [Alive](_type_contractinfo_.alive.md)

**Returns:** *[Alive](_type_contractinfo_.alive.md)*

___

###  asTombstone

• **get asTombstone**(): *[Tombstone](_type_contractinfo_.tombstone.md)*

*Defined in [type/ContractInfo.ts:91](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/ContractInfo.ts#L91)*

**`description`** Returns the item as an [Tombstone](_type_contractinfo_.tombstone.md)

**Returns:** *[Tombstone](_type_contractinfo_.tombstone.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Defined in [codec/EnumType.ts:164](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L164)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:171](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L171)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isAlive

• **get isAlive**(): *boolean*

*Defined in [type/ContractInfo.ts:100](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/ContractInfo.ts#L100)*

**`description`** value is an [Alive](_type_contractinfo_.alive.md)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isEmpty](_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:178](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L178)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:185](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L185)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L192)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isTombstone

• **get isTombstone**(): *boolean*

*Defined in [type/ContractInfo.ts:107](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/ContractInfo.ts#L107)*

**`description`** value is an [Tombstone](_type_contractinfo_.tombstone.md)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:199](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L199)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:206](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L206)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Defined in [codec/EnumType.ts:213](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L213)*

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

*Defined in [codec/EnumType.ts:228](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L228)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [codec/EnumType.ts:235](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L235)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:244](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L244)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:251](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L251)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [codec/EnumType.ts:266](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L266)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Defined in [codec/EnumType.ts:276](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L276)*

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

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/EnumType.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*