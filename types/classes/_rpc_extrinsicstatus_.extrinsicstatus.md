> # Class: ExtrinsicStatus

**`name`** ExtrinsicStatus

**`description`** 
An [Enum](_codec_enumtype_.enum.md) that indicates the status of the [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md) as been submitted

## Hierarchy

  * [Enum](_codec_enumtype_.enum.md)

  * **ExtrinsicStatus**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_rpc_extrinsicstatus_.extrinsicstatus.md#constructor)

### Accessors

* [asBroadcast](_rpc_extrinsicstatus_.extrinsicstatus.md#asbroadcast)
* [asDropped](_rpc_extrinsicstatus_.extrinsicstatus.md#asdropped)
* [asFinalized](_rpc_extrinsicstatus_.extrinsicstatus.md#asfinalized)
* [asFuture](_rpc_extrinsicstatus_.extrinsicstatus.md#asfuture)
* [asInvalid](_rpc_extrinsicstatus_.extrinsicstatus.md#asinvalid)
* [asReady](_rpc_extrinsicstatus_.extrinsicstatus.md#asready)
* [asUsurped](_rpc_extrinsicstatus_.extrinsicstatus.md#asusurped)
* [encodedLength](_rpc_extrinsicstatus_.extrinsicstatus.md#encodedlength)
* [index](_rpc_extrinsicstatus_.extrinsicstatus.md#index)
* [isBroadcast](_rpc_extrinsicstatus_.extrinsicstatus.md#isbroadcast)
* [isDropped](_rpc_extrinsicstatus_.extrinsicstatus.md#isdropped)
* [isEmpty](_rpc_extrinsicstatus_.extrinsicstatus.md#isempty)
* [isFinalized](_rpc_extrinsicstatus_.extrinsicstatus.md#isfinalized)
* [isFuture](_rpc_extrinsicstatus_.extrinsicstatus.md#isfuture)
* [isInvalid](_rpc_extrinsicstatus_.extrinsicstatus.md#isinvalid)
* [isNone](_rpc_extrinsicstatus_.extrinsicstatus.md#isnone)
* [isNull](_rpc_extrinsicstatus_.extrinsicstatus.md#isnull)
* [isReady](_rpc_extrinsicstatus_.extrinsicstatus.md#isready)
* [isUsurped](_rpc_extrinsicstatus_.extrinsicstatus.md#isusurped)
* [type](_rpc_extrinsicstatus_.extrinsicstatus.md#type)
* [value](_rpc_extrinsicstatus_.extrinsicstatus.md#value)

### Methods

* [eq](_rpc_extrinsicstatus_.extrinsicstatus.md#eq)
* [toHex](_rpc_extrinsicstatus_.extrinsicstatus.md#tohex)
* [toJSON](_rpc_extrinsicstatus_.extrinsicstatus.md#tojson)
* [toNumber](_rpc_extrinsicstatus_.extrinsicstatus.md#tonumber)
* [toRawType](_rpc_extrinsicstatus_.extrinsicstatus.md#torawtype)
* [toString](_rpc_extrinsicstatus_.extrinsicstatus.md#tostring)
* [toU8a](_rpc_extrinsicstatus_.extrinsicstatus.md#tou8a)
* [with](_rpc_extrinsicstatus_.extrinsicstatus.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicStatus**(`value`: any, `index?`: undefined | number): *[ExtrinsicStatus](_rpc_extrinsicstatus_.extrinsicstatus.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [rpc/ExtrinsicStatus.ts:74](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`index?` | undefined \| number |

**Returns:** *[ExtrinsicStatus](_rpc_extrinsicstatus_.extrinsicstatus.md)*

## Accessors

###  asBroadcast

• **get asBroadcast**(): *[Broadcast](_rpc_extrinsicstatus_.broadcast.md)*

*Defined in [rpc/ExtrinsicStatus.ts:90](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L90)*

**`description`** Returns the item as a [Broadcast](_rpc_extrinsicstatus_.broadcast.md)

**Returns:** *[Broadcast](_rpc_extrinsicstatus_.broadcast.md)*

___

###  asDropped

• **get asDropped**(): *[Dropped](_rpc_extrinsicstatus_.dropped.md)*

*Defined in [rpc/ExtrinsicStatus.ts:99](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L99)*

**`description`** Returns the item as a [Dropped](_rpc_extrinsicstatus_.dropped.md)

**Returns:** *[Dropped](_rpc_extrinsicstatus_.dropped.md)*

___

###  asFinalized

• **get asFinalized**(): *[Finalized](_rpc_extrinsicstatus_.finalized.md)*

*Defined in [rpc/ExtrinsicStatus.ts:108](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L108)*

**`description`** Returns the item as a [Finalized](_rpc_extrinsicstatus_.finalized.md)

**Returns:** *[Finalized](_rpc_extrinsicstatus_.finalized.md)*

___

###  asFuture

• **get asFuture**(): *[Future](_rpc_extrinsicstatus_.future.md)*

*Defined in [rpc/ExtrinsicStatus.ts:117](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L117)*

**`description`** Returns the item as a [Future](_rpc_extrinsicstatus_.future.md)

**Returns:** *[Future](_rpc_extrinsicstatus_.future.md)*

___

###  asInvalid

• **get asInvalid**(): *[Invalid](_rpc_extrinsicstatus_.invalid.md)*

*Defined in [rpc/ExtrinsicStatus.ts:126](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L126)*

**`description`** Returns the item as a [Invalid](_rpc_extrinsicstatus_.invalid.md)

**Returns:** *[Invalid](_rpc_extrinsicstatus_.invalid.md)*

___

###  asReady

• **get asReady**(): *[Ready](_rpc_extrinsicstatus_.ready.md)*

*Defined in [rpc/ExtrinsicStatus.ts:135](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L135)*

**`description`** Returns the item as a [Ready](_rpc_extrinsicstatus_.ready.md)

**Returns:** *[Ready](_rpc_extrinsicstatus_.ready.md)*

___

###  asUsurped

• **get asUsurped**(): *[Usurped](_rpc_extrinsicstatus_.usurped.md)*

*Defined in [rpc/ExtrinsicStatus.ts:144](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L144)*

**`description`** Returns the item as a [Usurped](_rpc_extrinsicstatus_.usurped.md)

**Returns:** *[Usurped](_rpc_extrinsicstatus_.usurped.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:164](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L164)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:171](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L171)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isBroadcast

• **get isBroadcast**(): *boolean*

*Defined in [rpc/ExtrinsicStatus.ts:153](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L153)*

**`description`** Returns true if the status is boadcast

**Returns:** *boolean*

___

###  isDropped

• **get isDropped**(): *boolean*

*Defined in [rpc/ExtrinsicStatus.ts:160](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L160)*

**`description`** Returns true if the status is dropped

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:28](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Base.ts#L28)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isFinalized

• **get isFinalized**(): *boolean*

*Defined in [rpc/ExtrinsicStatus.ts:167](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L167)*

**`description`** Returns true if the status is finalized

**Returns:** *boolean*

___

###  isFuture

• **get isFuture**(): *boolean*

*Defined in [rpc/ExtrinsicStatus.ts:174](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L174)*

**`description`** Returns true if the status is future

**Returns:** *boolean*

___

###  isInvalid

• **get isInvalid**(): *boolean*

*Defined in [rpc/ExtrinsicStatus.ts:181](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L181)*

**`description`** Returns true if the status is invalid

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:178](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L178)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:185](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L185)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isReady

• **get isReady**(): *boolean*

*Defined in [rpc/ExtrinsicStatus.ts:188](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L188)*

**`description`** Returns true if the status is eady

**Returns:** *boolean*

___

###  isUsurped

• **get isUsurped**(): *boolean*

*Defined in [rpc/ExtrinsicStatus.ts:195](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/ExtrinsicStatus.ts#L195)*

**`description`** Returns true if the status is usurped

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L192)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:199](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L199)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

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

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/EnumType.ts:221](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L221)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/EnumType.ts:228](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L228)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:237](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L237)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/EnumType.ts:244](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L244)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/EnumType.ts:259](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L259)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

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

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/EnumType.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*