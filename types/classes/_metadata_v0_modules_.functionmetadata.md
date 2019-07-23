> # Class: FunctionMetadata <**S, T, V, E**>

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **FunctionMetadata**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_v0_modules_.functionmetadata.md#constructor)

### Accessors

* [Type](_metadata_v0_modules_.functionmetadata.md#type)
* [args](_metadata_v0_modules_.functionmetadata.md#args)
* [arguments](_metadata_v0_modules_.functionmetadata.md#arguments)
* [docs](_metadata_v0_modules_.functionmetadata.md#docs)
* [documentation](_metadata_v0_modules_.functionmetadata.md#documentation)
* [encodedLength](_metadata_v0_modules_.functionmetadata.md#encodedlength)
* [id](_metadata_v0_modules_.functionmetadata.md#id)
* [isEmpty](_metadata_v0_modules_.functionmetadata.md#isempty)
* [name](_metadata_v0_modules_.functionmetadata.md#name)

### Methods

* [eq](_metadata_v0_modules_.functionmetadata.md#eq)
* [get](_metadata_v0_modules_.functionmetadata.md#get)
* [getAtIndex](_metadata_v0_modules_.functionmetadata.md#getatindex)
* [toArray](_metadata_v0_modules_.functionmetadata.md#toarray)
* [toHex](_metadata_v0_modules_.functionmetadata.md#tohex)
* [toJSON](_metadata_v0_modules_.functionmetadata.md#tojson)
* [toRawType](_metadata_v0_modules_.functionmetadata.md#torawtype)
* [toString](_metadata_v0_modules_.functionmetadata.md#tostring)
* [toU8a](_metadata_v0_modules_.functionmetadata.md#tou8a)
* [with](_metadata_v0_modules_.functionmetadata.md#static-with)

## Constructors

###  constructor

\+ **new FunctionMetadata**(`value?`: any): *[FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v0/Modules.ts:37](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/Metadata/v0/Modules.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  args

• **get args**(): *[Vector](_codec_vector_.vector.md)‹*[FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)*›*

*Defined in [Metadata/v0/Modules.ts:50](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/Metadata/v0/Modules.ts#L50)*

**`description`** The arguments of [Type](_metadata_v0_modules_.functionmetadata.md#type)

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)*›*

___

###  arguments

• **get arguments**(): *[Vector](_codec_vector_.vector.md)‹*[FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)*›*

*Defined in [Metadata/v0/Modules.ts:58](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/Metadata/v0/Modules.ts#L58)*

**`description`** The [FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md) for arguments

**`deprecated`** Use `.args` instead

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)*›*

___

###  docs

• **get docs**(): *[Vector](_codec_vector_.vector.md)‹*[Text](_primitive_text_.text.md)*›*

*Defined in [Metadata/v0/Modules.ts:73](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/Metadata/v0/Modules.ts#L73)*

**`description`** The [Text](_primitive_text_.text.md) documentation

**`deprecated`** Use `.documentation` instead.

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[Text](_primitive_text_.text.md)*›*

___

###  documentation

• **get documentation**(): *[Vector](_codec_vector_.vector.md)‹*[Text](_primitive_text_.text.md)*›*

*Defined in [Metadata/v0/Modules.ts:65](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/Metadata/v0/Modules.ts#L65)*

**`description`** The [Text](_primitive_text_.text.md) documentation

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[Text](_primitive_text_.text.md)*›*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  id

• **get id**(): *[U16](_primitive_u16_.u16.md)*

*Defined in [Metadata/v0/Modules.ts:80](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/Metadata/v0/Modules.ts#L80)*

**`description`** The `[sectionIndex, methodIndex]` call id

**Returns:** *[U16](_primitive_u16_.u16.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  name

• **get name**(): *[Text](_primitive_text_.text.md)*

*Defined in [Metadata/v0/Modules.ts:87](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/Metadata/v0/Modules.ts#L87)*

**`description`** The call name

**Returns:** *[Text](_primitive_text_.text.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L187)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L195)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L260)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/c3811ee/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*