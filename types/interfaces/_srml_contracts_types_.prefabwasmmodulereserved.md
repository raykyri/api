> # Interface: PrefabWasmModuleReserved

## Hierarchy

  * [Option](../classes/_codec_option_.option.md)‹*[Null](../classes/_primitive_null_.null.md)*›

  * **PrefabWasmModuleReserved**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_srml_contracts_types_.prefabwasmmodulereserved.md#constructor)

### Accessors

* [encodedLength](_srml_contracts_types_.prefabwasmmodulereserved.md#encodedlength)
* [isEmpty](_srml_contracts_types_.prefabwasmmodulereserved.md#isempty)
* [isNone](_srml_contracts_types_.prefabwasmmodulereserved.md#isnone)
* [isSome](_srml_contracts_types_.prefabwasmmodulereserved.md#issome)
* [value](_srml_contracts_types_.prefabwasmmodulereserved.md#value)

### Methods

* [eq](_srml_contracts_types_.prefabwasmmodulereserved.md#eq)
* [toHex](_srml_contracts_types_.prefabwasmmodulereserved.md#tohex)
* [toJSON](_srml_contracts_types_.prefabwasmmodulereserved.md#tojson)
* [toRawType](_srml_contracts_types_.prefabwasmmodulereserved.md#torawtype)
* [toString](_srml_contracts_types_.prefabwasmmodulereserved.md#tostring)
* [toU8a](_srml_contracts_types_.prefabwasmmodulereserved.md#tou8a)
* [unwrap](_srml_contracts_types_.prefabwasmmodulereserved.md#unwrap)
* [unwrapOr](_srml_contracts_types_.prefabwasmmodulereserved.md#unwrapor)
* [decodeOption](_srml_contracts_types_.prefabwasmmodulereserved.md#static-decodeoption)
* [with](_srml_contracts_types_.prefabwasmmodulereserved.md#static-with)

## Constructors

###  constructor

\+ **new PrefabWasmModuleReserved**(`Type`: [Constructor](_types_.constructor.md), `value?`: any): *[PrefabWasmModuleReserved](_srml_contracts_types_.prefabwasmmodulereserved.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[constructor](../classes/_codec_option_.option.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [codec/Option.ts:20](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](_types_.constructor.md) |
`value?` | any |

**Returns:** *[PrefabWasmModuleReserved](_srml_contracts_types_.prefabwasmmodulereserved.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Option](../classes/_codec_option_.option.md).[encodedLength](../classes/_codec_option_.option.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [codec/Option.ts:60](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L60)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[isEmpty](../classes/_codec_option_.option.md#isempty)*

*Overrides [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [codec/Option.ts:68](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L68)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[isNone](../classes/_codec_option_.option.md#isnone)*

*Defined in [codec/Option.ts:75](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L75)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isSome

• **get isSome**(): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[isSome](../classes/_codec_option_.option.md#issome)*

*Defined in [codec/Option.ts:82](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L82)*

**`description`** Checks if the Option has a value

**Returns:** *boolean*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[value](../classes/_codec_option_.option.md#value)*

*Defined in [codec/Option.ts:89](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L89)*

**`description`** The actual value for the Option

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[eq](../classes/_codec_option_.option.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [codec/Option.ts:96](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L96)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Option](../classes/_codec_option_.option.md).[toHex](../classes/_codec_option_.option.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [codec/Option.ts:107](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L107)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [codec/Base.ts:49](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Base.ts#L49)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Option](../classes/_codec_option_.option.md).[toRawType](../classes/_codec_option_.option.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [codec/Option.ts:118](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L118)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [codec/Base.ts:56](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Base.ts#L56)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Option](../classes/_codec_option_.option.md).[toU8a](../classes/_codec_option_.option.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [codec/Option.ts:126](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L126)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

###  unwrap

▸ **unwrap**(): *[Null](../classes/_primitive_null_.null.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[unwrap](../classes/_codec_option_.option.md#unwrap)*

*Defined in [codec/Option.ts:144](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L144)*

**`description`** Returns the value that the Option represents (if available), throws if null

**Returns:** *[Null](../classes/_primitive_null_.null.md)*

___

###  unwrapOr

▸ **unwrapOr**<**O**>(`defaultValue`: `O`): *[Null](../classes/_primitive_null_.null.md) | `O`*

*Inherited from [Option](../classes/_codec_option_.option.md).[unwrapOr](../classes/_codec_option_.option.md#unwrapor)*

*Defined in [codec/Option.ts:156](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L156)*

**`description`** Returns the value that the Option represents (if available) or defaultValue if none

**Type parameters:**

▪ **O**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`defaultValue` | `O` | The value to return if the option isNone  |

**Returns:** *[Null](../classes/_primitive_null_.null.md) | `O`*

___

### `Static` decodeOption

▸ **decodeOption**(`Type`: [Constructor](_types_.constructor.md), `value?`: any): *[Codec](_types_.codec.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[decodeOption](../classes/_codec_option_.option.md#static-decodeoption)*

*Defined in [codec/Option.ts:30](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](_types_.constructor.md) |
`value?` | any |

**Returns:** *[Codec](_types_.codec.md)*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](_types_.constructor.md)): *[Constructor](_types_.constructor.md)‹*[Option](../classes/_codec_option_.option.md)‹*`O`*›*›*

*Inherited from [Option](../classes/_codec_option_.option.md).[with](../classes/_codec_option_.option.md#static-with)*

*Defined in [codec/Option.ts:49](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/codec/Option.ts#L49)*

**Type parameters:**

▪ **O**: *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](_types_.constructor.md) |

**Returns:** *[Constructor](_types_.constructor.md)‹*[Option](../classes/_codec_option_.option.md)‹*`O`*›*›*