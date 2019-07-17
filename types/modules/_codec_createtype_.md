> # External module: "codec/createType"

### Index

#### Enumerations

* [TypeDefInfo](../enums/_codec_createtype_.typedefinfo.md)

#### Interfaces

* [TypeDef](../interfaces/_codec_createtype_.typedef.md)
* [TypeDefExtVecFixed](../interfaces/_codec_createtype_.typedefextvecfixed.md)

#### Functions

* [ClassOf](_codec_createtype_.md#classof)
* [createClass](_codec_createtype_.md#createclass)
* [createType](_codec_createtype_.md#createtype)
* [getTypeClass](_codec_createtype_.md#gettypeclass)
* [getTypeClassMap](_codec_createtype_.md#gettypeclassmap)
* [getTypeDef](_codec_createtype_.md#gettypedef)
* [typeSplit](_codec_createtype_.md#typesplit)

## Functions

###  ClassOf

▸ **ClassOf**(`name`: string): *[Constructor](../interfaces/_types_.constructor.md)*

*Defined in [codec/createType.ts:269](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/createType.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)*

___

###  createClass

▸ **createClass**(`type`: [Text](../classes/_primitive_text_.text.md) | string): *[Constructor](../interfaces/_types_.constructor.md)*

*Defined in [codec/createType.ts:177](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/createType.ts#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Text](../classes/_primitive_text_.text.md) \| string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)*

___

###  createType

▸ **createType**(`type`: [Text](../classes/_primitive_text_.text.md) | string, `value?`: any, `isPedantic?`: undefined | false | true): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/createType.ts:304](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/createType.ts#L304)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Text](../classes/_primitive_text_.text.md) \| string |
`value?` | any |
`isPedantic?` | undefined \| false \| true |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  getTypeClass

▸ **getTypeClass**(`value`: [TypeDef](../interfaces/_codec_createtype_.typedef.md), `Fallback?`: [Constructor](../interfaces/_types_.constructor.md)): *[Constructor](../interfaces/_types_.constructor.md)*

*Defined in [codec/createType.ts:195](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/createType.ts#L195)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [TypeDef](../interfaces/_codec_createtype_.typedef.md) |
`Fallback?` | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)*

___

###  getTypeClassMap

▸ **getTypeClassMap**(`defs`: [TypeDef](../interfaces/_codec_createtype_.typedef.md)[]): *object*

*Defined in [codec/createType.ts:185](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/createType.ts#L185)*

**Parameters:**

Name | Type |
------ | ------ |
`defs` | [TypeDef](../interfaces/_codec_createtype_.typedef.md)[] |

**Returns:** *object*

● \[▪ **index**: *string*\]: [Constructor](../interfaces/_types_.constructor.md)

___

###  getTypeDef

▸ **getTypeDef**(`_type`: [Text](../classes/_primitive_text_.text.md) | string, `name?`: undefined | string): *[TypeDef](../interfaces/_codec_createtype_.typedef.md)*

*Defined in [codec/createType.ts:99](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/createType.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`_type` | [Text](../classes/_primitive_text_.text.md) \| string |
`name?` | undefined \| string |

**Returns:** *[TypeDef](../interfaces/_codec_createtype_.typedef.md)*

___

###  typeSplit

▸ **typeSplit**(`type`: string): *string[]*

*Defined in [codec/createType.ts:52](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/createType.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *string[]*