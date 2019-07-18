> # Class: MetadataV1 <**S, T, V, E**>

**`name`** MetadataV1

**`description`** 
The runtime metadata as a decoded structure

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **MetadataV1**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)‹*[ModuleMetadata](_metadata_v1_metadata_.modulemetadata.md)*›

### Index

#### Constructors

* [constructor](_metadata_v1_metadata_.metadatav1.md#constructor)

#### Accessors

* [Type](_metadata_v1_metadata_.metadatav1.md#type)
* [encodedLength](_metadata_v1_metadata_.metadatav1.md#encodedlength)
* [isEmpty](_metadata_v1_metadata_.metadatav1.md#isempty)
* [modules](_metadata_v1_metadata_.metadatav1.md#modules)

#### Methods

* [eq](_metadata_v1_metadata_.metadatav1.md#eq)
* [get](_metadata_v1_metadata_.metadatav1.md#get)
* [getAtIndex](_metadata_v1_metadata_.metadatav1.md#getatindex)
* [getUniqTypes](_metadata_v1_metadata_.metadatav1.md#getuniqtypes)
* [toArray](_metadata_v1_metadata_.metadatav1.md#toarray)
* [toHex](_metadata_v1_metadata_.metadatav1.md#tohex)
* [toJSON](_metadata_v1_metadata_.metadatav1.md#tojson)
* [toRawType](_metadata_v1_metadata_.metadatav1.md#torawtype)
* [toString](_metadata_v1_metadata_.metadatav1.md#tostring)
* [toU8a](_metadata_v1_metadata_.metadatav1.md#tou8a)
* [with](_metadata_v1_metadata_.metadatav1.md#static-with)

## Constructors

###  constructor

\+ **new MetadataV1**(`value?`: any): *[MetadataV1](_metadata_v1_metadata_.metadatav1.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v1/Metadata.ts:74](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/Metadata/v1/Metadata.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[MetadataV1](_metadata_v1_metadata_.metadatav1.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  modules

• **get modules**(): *[Vector](_codec_vector_.vector.md)‹*[ModuleMetadata](_metadata_v1_metadata_.modulemetadata.md)*›*

*Defined in [Metadata/v1/Metadata.ts:84](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/Metadata/v1/Metadata.ts#L84)*

**`description`** The associated modules for this structure

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[ModuleMetadata](_metadata_v1_metadata_.modulemetadata.md)*›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  getUniqTypes

▸ **getUniqTypes**(`throwError`: boolean): *string[]*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Defined in [Metadata/v1/Metadata.ts:123](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/Metadata/v1/Metadata.ts#L123)*

**`description`** Helper to retrieve a list of all type that are found, sorted and de-deuplicated

**Parameters:**

Name | Type |
------ | ------ |
`throwError` | boolean |

**Returns:** *string[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L260)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*