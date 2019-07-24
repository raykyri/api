> # Class: Method <**S, T, V, E**>

**`name`** Method

**`description`** 
Extrinsic function descriptor, as defined in
https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node.

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **Method**

  * [Proposal](_type_proposal_.proposal.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IMethod](../interfaces/_types_.imethod.md)

## Index

### Constructors

* [constructor](_primitive_method_.method.md#constructor)

### Accessors

* [Type](_primitive_method_.method.md#type)
* [args](_primitive_method_.method.md#args)
* [argsDef](_primitive_method_.method.md#argsdef)
* [callIndex](_primitive_method_.method.md#callindex)
* [data](_primitive_method_.method.md#data)
* [encodedLength](_primitive_method_.method.md#encodedlength)
* [hasOrigin](_primitive_method_.method.md#hasorigin)
* [hash](_primitive_method_.method.md#hash)
* [isEmpty](_primitive_method_.method.md#isempty)
* [meta](_primitive_method_.method.md#meta)
* [methodName](_primitive_method_.method.md#methodname)
* [sectionName](_primitive_method_.method.md#sectionname)

### Methods

* [eq](_primitive_method_.method.md#eq)
* [get](_primitive_method_.method.md#get)
* [getAtIndex](_primitive_method_.method.md#getatindex)
* [toArray](_primitive_method_.method.md#toarray)
* [toHex](_primitive_method_.method.md#tohex)
* [toJSON](_primitive_method_.method.md#tojson)
* [toRawType](_primitive_method_.method.md#torawtype)
* [toString](_primitive_method_.method.md#tostring)
* [toU8a](_primitive_method_.method.md#tou8a)
* [filterOrigin](_primitive_method_.method.md#static-filterorigin)
* [findFunction](_primitive_method_.method.md#static-findfunction)
* [injectMethods](_primitive_method_.method.md#static-injectmethods)
* [with](_primitive_method_.method.md#static-with)

## Constructors

###  constructor

\+ **new Method**(`value`: any, `meta?`: `FunctionMetadataV7`): *[Method](_primitive_method_.method.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Method.ts:68](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`meta?` | `FunctionMetadataV7` |

**Returns:** *[Method](_primitive_method_.method.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  args

• **get args**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Defined in [primitive/Method.ts:183](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L183)*

**`description`** The arguments for the function call

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../modules/_types_.md#argsdef)*

*Defined in [primitive/Method.ts:191](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L191)*

**`description`** Thge argument defintions

**Returns:** *[ArgsDef](../modules/_types_.md#argsdef)*

___

###  callIndex

• **get callIndex**(): *`Uint8Array`*

*Defined in [primitive/Method.ts:198](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L198)*

**`description`** The encoded `[sectionIndex, methodIndex]` identifier

**Returns:** *`Uint8Array`*

___

###  data

• **get data**(): *`Uint8Array`*

*Defined in [primitive/Method.ts:205](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L205)*

**`description`** The encoded data

**Returns:** *`Uint8Array`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Defined in [primitive/Method.ts:221](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L221)*

**`description`** `true` if the `Origin` type is on the method (extrinsic method)

**Returns:** *boolean*

___

###  hash

• **get hash**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [primitive/Method.ts:212](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L212)*

**`description`** Convenience function, encodes the Method and returns the actual hash

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *`FunctionMetadataV7`*

*Defined in [primitive/Method.ts:230](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L230)*

**`description`** The [FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)

**Returns:** *`FunctionMetadataV7`*

___

###  methodName

• **get methodName**(): *string*

*Defined in [primitive/Method.ts:237](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L237)*

**`description`** Returns the name of the method

**Returns:** *string*

___

###  sectionName

• **get sectionName**(): *string*

*Defined in [primitive/Method.ts:244](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L244)*

**`description`** Returns the module containing the method

**Returns:** *string*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L202)*

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

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [primitive/Method.ts:251](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L251)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L260)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` filterOrigin

▸ **filterOrigin**(`meta?`: `FunctionMetadataV7`): *[FunctionArgumentMetadata](_metadata_v1_calls_.functionargumentmetadata.md)[]*

*Defined in [primitive/Method.ts:131](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | `FunctionMetadataV7` |

**Returns:** *[FunctionArgumentMetadata](_metadata_v1_calls_.functionargumentmetadata.md)[]*

___

### `Static` findFunction

▸ **findFunction**(`callIndex`: `Uint8Array`): *[MethodFunction](../interfaces/_primitive_method_.methodfunction.md)*

*Defined in [primitive/Method.ts:147](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | `Uint8Array` |

**Returns:** *[MethodFunction](../interfaces/_primitive_method_.methodfunction.md)*

___

### `Static` injectMethods

▸ **injectMethods**(`moduleMethods`: [ModulesWithMethods](../interfaces/_primitive_method_.moduleswithmethods.md)): *void*

*Defined in [primitive/Method.ts:172](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Method.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`moduleMethods` | [ModulesWithMethods](../interfaces/_primitive_method_.moduleswithmethods.md) |

**Returns:** *void*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*