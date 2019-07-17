> # Class: RuntimeVersion <**S, T, V, E**>

**`name`** RuntimeVersion

**`description`** 
A defintion of the runtime and the associated versions thereof

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **RuntimeVersion**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [RuntimeVersionInterface](../interfaces/_types_.runtimeversioninterface.md)

### Index

#### Constructors

* [constructor](_rpc_runtimeversion_.runtimeversion.md#constructor)

#### Accessors

* [Type](_rpc_runtimeversion_.runtimeversion.md#type)
* [apis](_rpc_runtimeversion_.runtimeversion.md#apis)
* [authoringVersion](_rpc_runtimeversion_.runtimeversion.md#authoringversion)
* [encodedLength](_rpc_runtimeversion_.runtimeversion.md#encodedlength)
* [implName](_rpc_runtimeversion_.runtimeversion.md#implname)
* [implVersion](_rpc_runtimeversion_.runtimeversion.md#implversion)
* [isEmpty](_rpc_runtimeversion_.runtimeversion.md#isempty)
* [specName](_rpc_runtimeversion_.runtimeversion.md#specname)
* [specVersion](_rpc_runtimeversion_.runtimeversion.md#specversion)

#### Methods

* [eq](_rpc_runtimeversion_.runtimeversion.md#eq)
* [get](_rpc_runtimeversion_.runtimeversion.md#get)
* [getAtIndex](_rpc_runtimeversion_.runtimeversion.md#getatindex)
* [toArray](_rpc_runtimeversion_.runtimeversion.md#toarray)
* [toHex](_rpc_runtimeversion_.runtimeversion.md#tohex)
* [toJSON](_rpc_runtimeversion_.runtimeversion.md#tojson)
* [toRawType](_rpc_runtimeversion_.runtimeversion.md#torawtype)
* [toString](_rpc_runtimeversion_.runtimeversion.md#tostring)
* [toU8a](_rpc_runtimeversion_.runtimeversion.md#tou8a)
* [with](_rpc_runtimeversion_.runtimeversion.md#static-with)

## Constructors

###  constructor

\+ **new RuntimeVersion**(`value?`: `RuntimeVersionValue` | `Uint8Array`): *[RuntimeVersion](_rpc_runtimeversion_.runtimeversion.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [rpc/RuntimeVersion.ts:72](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/rpc/RuntimeVersion.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `RuntimeVersionValue` \| `Uint8Array` |

**Returns:** *[RuntimeVersion](_rpc_runtimeversion_.runtimeversion.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  apis

• **get apis**(): *[Vector](_codec_vector_.vector.md)‹*[RuntimeVersionApi](_rpc_runtimeversion_.runtimeversionapi.md)*›*

*Defined in [rpc/RuntimeVersion.ts:87](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/rpc/RuntimeVersion.ts#L87)*

**`description`** The available APIs as [RuntimeVersionApi](_rpc_runtimeversion_.runtimeversionapi.md)

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[RuntimeVersionApi](_rpc_runtimeversion_.runtimeversionapi.md)*›*

___

###  authoringVersion

• **get authoringVersion**(): *[U32](_primitive_u32_.u32.md)*

*Defined in [rpc/RuntimeVersion.ts:94](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/rpc/RuntimeVersion.ts#L94)*

**`description`** The authoring version as [U32](_primitive_u32_.u32.md)

**Returns:** *[U32](_primitive_u32_.u32.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  implName

• **get implName**(): *[Text](_primitive_text_.text.md)*

*Defined in [rpc/RuntimeVersion.ts:101](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/rpc/RuntimeVersion.ts#L101)*

**`description`** The implementation name

**Returns:** *[Text](_primitive_text_.text.md)*

___

###  implVersion

• **get implVersion**(): *[U32](_primitive_u32_.u32.md)*

*Defined in [rpc/RuntimeVersion.ts:108](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/rpc/RuntimeVersion.ts#L108)*

**`description`** The implementation version

**Returns:** *[U32](_primitive_u32_.u32.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  specName

• **get specName**(): *[Text](_primitive_text_.text.md)*

*Defined in [rpc/RuntimeVersion.ts:115](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/rpc/RuntimeVersion.ts#L115)*

**`description`** The specification name

**Returns:** *[Text](_primitive_text_.text.md)*

___

###  specVersion

• **get specVersion**(): *[U32](_primitive_u32_.u32.md)*

*Defined in [rpc/RuntimeVersion.ts:122](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/rpc/RuntimeVersion.ts#L122)*

**`description`** The specification version

**Returns:** *[U32](_primitive_u32_.u32.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L202)*

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

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L260)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/28cf21d/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*