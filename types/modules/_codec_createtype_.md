> # External module: "codec/createType"

## Index

### Enumerations

* [TypeDefInfo](../enums/_codec_createtype_.typedefinfo.md)

### Interfaces

* [TypeDef](../interfaces/_codec_createtype_.typedef.md)
* [TypeDefExtVecFixed](../interfaces/_codec_createtype_.typedefextvecfixed.md)

### Functions

* [ClassOf](_codec_createtype_.md#classof)
* [createClass](_codec_createtype_.md#createclass)
* [createType](_codec_createtype_.md#createtype)
* [getTypeClass](_codec_createtype_.md#gettypeclass)
* [getTypeClassMap](_codec_createtype_.md#gettypeclassmap)
* [getTypeDef](_codec_createtype_.md#gettypedef)
* [typeSplit](_codec_createtype_.md#typesplit)

## Functions

###  ClassOf

▸ **ClassOf**<**T**>(`name`: string): *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

*Defined in [codec/createType.ts:283](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/createType.ts#L283)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

___

###  createClass

▸ **createClass**<**T**>(`type`: [Text](../classes/_primitive_text_.text.md) | string): *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

*Defined in [codec/createType.ts:192](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/createType.ts#L192)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Text](../classes/_primitive_text_.text.md) \| string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

___

###  createType

▸ **createType**<**T**>(`type`: [Text](../classes/_primitive_text_.text.md) | string, `value?`: any, `isPedantic?`: undefined | false | true): *`T`*

*Defined in [codec/createType.ts:318](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/createType.ts#L318)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Text](../classes/_primitive_text_.text.md) \| string |
`value?` | any |
`isPedantic?` | undefined \| false \| true |

**Returns:** *`T`*

___

###  getTypeClass

▸ **getTypeClass**<**T**>(`value`: [TypeDef](../interfaces/_codec_createtype_.typedef.md), `Fallback?`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›): *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

*Defined in [codec/createType.ts:207](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/createType.ts#L207)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [TypeDef](../interfaces/_codec_createtype_.typedef.md) |
`Fallback?` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

___

###  getTypeClassMap

▸ **getTypeClassMap**(`defs`: [TypeDef](../interfaces/_codec_createtype_.typedef.md)[]): *object*

*Defined in [codec/createType.ts:197](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/createType.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`defs` | [TypeDef](../interfaces/_codec_createtype_.typedef.md)[] |

**Returns:** *object*

● \[▪ **index**: *string*\]: [Constructor](../interfaces/_types_.constructor.md)

___

###  getTypeDef

▸ **getTypeDef**(`_type`: [Text](../classes/_primitive_text_.text.md) | string, `name?`: undefined | string): *[TypeDef](../interfaces/_codec_createtype_.typedef.md)*

*Defined in [codec/createType.ts:100](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/createType.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`_type` | [Text](../classes/_primitive_text_.text.md) \| string |
`name?` | undefined \| string |

**Returns:** *[TypeDef](../interfaces/_codec_createtype_.typedef.md)*

___

###  typeSplit

▸ **typeSplit**(`type`: string): *string[]*

*Defined in [codec/createType.ts:53](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/createType.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *string[]*