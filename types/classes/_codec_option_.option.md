> # Class: Option <**T**>

**`name`** Option

**`description`** 
An Option is an optional field. Basically the first byte indicates that there is
is value to follow. If the byte is `1` there is an actual value. So the Option
implements that - decodes, checks for optionality and wraps the required structure
with a value if/as required/found.

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

* [Base](_codec_base_.base.md)‹*`T`*›

  * **Option**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_codec_option_.option.md#constructor)

#### Accessors

* [encodedLength](_codec_option_.option.md#encodedlength)
* [isEmpty](_codec_option_.option.md#isempty)
* [isNone](_codec_option_.option.md#isnone)
* [isSome](_codec_option_.option.md#issome)
* [value](_codec_option_.option.md#value)

#### Methods

* [eq](_codec_option_.option.md#eq)
* [toHex](_codec_option_.option.md#tohex)
* [toJSON](_codec_option_.option.md#tojson)
* [toRawType](_codec_option_.option.md#torawtype)
* [toString](_codec_option_.option.md#tostring)
* [toU8a](_codec_option_.option.md#tou8a)
* [unwrap](_codec_option_.option.md#unwrap)
* [unwrapOr](_codec_option_.option.md#unwrapor)
* [decodeOption](_codec_option_.option.md#static-decodeoption)
* [with](_codec_option_.option.md#static-with)

## Constructors

###  constructor

\+ **new Option**(`Type`: [Constructor](../interfaces/_types_.constructor.md), `value?`: any): *[Option](_codec_option_.option.md)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Option.ts:20](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md) |
`value?` | any |

**Returns:** *[Option](_codec_option_.option.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [codec/Option.ts:60](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L60)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [codec/Option.ts:68](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L68)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Defined in [codec/Option.ts:75](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L75)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isSome

• **get isSome**(): *boolean*

*Defined in [codec/Option.ts:82](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L82)*

**`description`** Checks if the Option has a value

**Returns:** *boolean*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Option.ts:89](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L89)*

**`description`** The actual value for the Option

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Option.ts:96](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L96)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [codec/Option.ts:107](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L107)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Option.ts:118](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L118)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Option.ts:125](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L125)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Option.ts:132](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L132)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Option.ts:140](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L140)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

###  unwrap

▸ **unwrap**(): *`T`*

*Defined in [codec/Option.ts:158](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L158)*

**`description`** Returns the value that the Option represents (if available), throws if null

**Returns:** *`T`*

___

###  unwrapOr

▸ **unwrapOr**<**O**>(`defaultValue`: `O`): *`T` | `O`*

*Defined in [codec/Option.ts:170](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L170)*

**`description`** Returns the value that the Option represents (if available) or defaultValue if none

**Type parameters:**

▪ **O**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`defaultValue` | `O` | The value to return if the option isNone  |

**Returns:** *`T` | `O`*

___

### `Static` decodeOption

▸ **decodeOption**(`Type`: [Constructor](../interfaces/_types_.constructor.md), `value?`: any): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Option.ts:30](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md) |
`value?` | any |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)): *[Constructor](../interfaces/_types_.constructor.md)‹*[Option](_codec_option_.option.md)‹*`O`*›*›*

*Defined in [codec/Option.ts:49](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Option.ts#L49)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Option](_codec_option_.option.md)‹*`O`*›*›*