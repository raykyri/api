> # Class: Proposal <**S, T, V, E**>

**`name`** Proposal

**`description`** 
A proposal in the system. It just extends [Method](_primitive_method_.method.md) (Proposal = Call in Rust)

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Method](_primitive_method_.method.md)

  * **Proposal**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IMethod](../interfaces/_types_.imethod.md)

## Index

### Constructors

* [constructor](_type_proposal_.proposal.md#constructor)

### Accessors

* [Type](_type_proposal_.proposal.md#type)
* [args](_type_proposal_.proposal.md#args)
* [argsDef](_type_proposal_.proposal.md#argsdef)
* [callIndex](_type_proposal_.proposal.md#callindex)
* [data](_type_proposal_.proposal.md#data)
* [encodedLength](_type_proposal_.proposal.md#encodedlength)
* [hasOrigin](_type_proposal_.proposal.md#hasorigin)
* [isEmpty](_type_proposal_.proposal.md#isempty)
* [meta](_type_proposal_.proposal.md#meta)
* [methodName](_type_proposal_.proposal.md#methodname)
* [sectionName](_type_proposal_.proposal.md#sectionname)

### Methods

* [eq](_type_proposal_.proposal.md#eq)
* [get](_type_proposal_.proposal.md#get)
* [getAtIndex](_type_proposal_.proposal.md#getatindex)
* [toArray](_type_proposal_.proposal.md#toarray)
* [toHex](_type_proposal_.proposal.md#tohex)
* [toJSON](_type_proposal_.proposal.md#tojson)
* [toRawType](_type_proposal_.proposal.md#torawtype)
* [toString](_type_proposal_.proposal.md#tostring)
* [toU8a](_type_proposal_.proposal.md#tou8a)
* [filterOrigin](_type_proposal_.proposal.md#static-filterorigin)
* [findFunction](_type_proposal_.proposal.md#static-findfunction)
* [injectMethods](_type_proposal_.proposal.md#static-injectmethods)
* [with](_type_proposal_.proposal.md#static-with)

## Constructors

###  constructor

\+ **new Proposal**(`value`: any, `meta?`: `FunctionMetadataV6`): *[Proposal](_type_proposal_.proposal.md)*

*Inherited from [Method](_primitive_method_.method.md).[constructor](_primitive_method_.method.md#constructor)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Method.ts:66](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`meta?` | `FunctionMetadataV6` |

**Returns:** *[Proposal](_type_proposal_.proposal.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  args

• **get args**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Method](_primitive_method_.method.md).[args](_primitive_method_.method.md#args)*

*Defined in [primitive/Method.ts:181](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L181)*

**`description`** The arguments for the function call

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../interfaces/_types_.argsdef.md)*

*Inherited from [Method](_primitive_method_.method.md).[argsDef](_primitive_method_.method.md#argsdef)*

*Defined in [primitive/Method.ts:189](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L189)*

**`description`** Thge argument defintions

**Returns:** *[ArgsDef](../interfaces/_types_.argsdef.md)*

___

###  callIndex

• **get callIndex**(): *`Uint8Array`*

*Inherited from [Method](_primitive_method_.method.md).[callIndex](_primitive_method_.method.md#callindex)*

*Defined in [primitive/Method.ts:196](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L196)*

**`description`** The encoded `[sectionIndex, methodIndex]` identifier

**Returns:** *`Uint8Array`*

___

###  data

• **get data**(): *`Uint8Array`*

*Inherited from [Method](_primitive_method_.method.md).[data](_primitive_method_.method.md#data)*

*Defined in [primitive/Method.ts:203](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L203)*

**`description`** The encoded data

**Returns:** *`Uint8Array`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Inherited from [Method](_primitive_method_.method.md).[hasOrigin](_primitive_method_.method.md#hasorigin)*

*Defined in [primitive/Method.ts:210](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L210)*

**`description`** `true` if the `Origin` type is on the method (extrinsic method)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *`FunctionMetadataV6`*

*Inherited from [Method](_primitive_method_.method.md).[meta](_primitive_method_.method.md#meta)*

*Defined in [primitive/Method.ts:219](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L219)*

**`description`** The [FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)

**Returns:** *`FunctionMetadataV6`*

___

###  methodName

• **get methodName**(): *string*

*Inherited from [Method](_primitive_method_.method.md).[methodName](_primitive_method_.method.md#methodname)*

*Defined in [primitive/Method.ts:226](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L226)*

**`description`** Returns the name of the method

**Returns:** *string*

___

###  sectionName

• **get sectionName**(): *string*

*Inherited from [Method](_primitive_method_.method.md).[sectionName](_primitive_method_.method.md#sectionname)*

*Defined in [primitive/Method.ts:233](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L233)*

**`description`** Returns the module containing the method

**Returns:** *string*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L202)*

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

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Method](_primitive_method_.method.md).[toRawType](_primitive_method_.method.md#torawtype)*

*Overrides [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [primitive/Method.ts:240](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L240)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L260)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` filterOrigin

▸ **filterOrigin**(`meta?`: `FunctionMetadataV6`): *[FunctionArgumentMetadata](_metadata_v1_calls_.functionargumentmetadata.md)[]*

*Inherited from [Method](_primitive_method_.method.md).[filterOrigin](_primitive_method_.method.md#static-filterorigin)*

*Defined in [primitive/Method.ts:129](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | `FunctionMetadataV6` |

**Returns:** *[FunctionArgumentMetadata](_metadata_v1_calls_.functionargumentmetadata.md)[]*

___

### `Static` findFunction

▸ **findFunction**(`callIndex`: `Uint8Array`): *[MethodFunction](../interfaces/_primitive_method_.methodfunction.md)*

*Inherited from [Method](_primitive_method_.method.md).[findFunction](_primitive_method_.method.md#static-findfunction)*

*Defined in [primitive/Method.ts:145](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | `Uint8Array` |

**Returns:** *[MethodFunction](../interfaces/_primitive_method_.methodfunction.md)*

___

### `Static` injectMethods

▸ **injectMethods**(`moduleMethods`: [ModulesWithMethods](../interfaces/_primitive_method_.moduleswithmethods.md)): *void*

*Inherited from [Method](_primitive_method_.method.md).[injectMethods](_primitive_method_.method.md#static-injectmethods)*

*Defined in [primitive/Method.ts:170](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/primitive/Method.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`moduleMethods` | [ModulesWithMethods](../interfaces/_primitive_method_.moduleswithmethods.md) |

**Returns:** *void*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/dd7b138/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*