> # Class: ExtrinsicV1 <**S, T, V, E**>

**`name`** ExtrinsicV1

**`description`** 
The first generation of compact extrinsics

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **ExtrinsicV1**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)

## Index

### Constructors

* [constructor](_type_extrinsicv1_.extrinsicv1.md#constructor)

### Accessors

* [Type](_type_extrinsicv1_.extrinsicv1.md#type)
* [args](_type_extrinsicv1_.extrinsicv1.md#args)
* [argsDef](_type_extrinsicv1_.extrinsicv1.md#argsdef)
* [callIndex](_type_extrinsicv1_.extrinsicv1.md#callindex)
* [data](_type_extrinsicv1_.extrinsicv1.md#data)
* [encodedLength](_type_extrinsicv1_.extrinsicv1.md#encodedlength)
* [hasOrigin](_type_extrinsicv1_.extrinsicv1.md#hasorigin)
* [hash](_type_extrinsicv1_.extrinsicv1.md#hash)
* [isEmpty](_type_extrinsicv1_.extrinsicv1.md#isempty)
* [isSigned](_type_extrinsicv1_.extrinsicv1.md#issigned)
* [length](_type_extrinsicv1_.extrinsicv1.md#length)
* [meta](_type_extrinsicv1_.extrinsicv1.md#meta)
* [method](_type_extrinsicv1_.extrinsicv1.md#method)
* [signature](_type_extrinsicv1_.extrinsicv1.md#signature)

### Methods

* [addSignature](_type_extrinsicv1_.extrinsicv1.md#addsignature)
* [eq](_type_extrinsicv1_.extrinsicv1.md#eq)
* [get](_type_extrinsicv1_.extrinsicv1.md#get)
* [getAtIndex](_type_extrinsicv1_.extrinsicv1.md#getatindex)
* [sign](_type_extrinsicv1_.extrinsicv1.md#sign)
* [toArray](_type_extrinsicv1_.extrinsicv1.md#toarray)
* [toHex](_type_extrinsicv1_.extrinsicv1.md#tohex)
* [toJSON](_type_extrinsicv1_.extrinsicv1.md#tojson)
* [toRawType](_type_extrinsicv1_.extrinsicv1.md#torawtype)
* [toString](_type_extrinsicv1_.extrinsicv1.md#tostring)
* [toU8a](_type_extrinsicv1_.extrinsicv1.md#tou8a)
* [with](_type_extrinsicv1_.extrinsicv1.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV1**(`value?`: `Uint8Array` | [ExtrinsicValueV1](../interfaces/_type_extrinsicv1_.extrinsicvaluev1.md)): *[ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/ExtrinsicV1.ts:28](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `Uint8Array` \| [ExtrinsicValueV1](../interfaces/_type_extrinsicv1_.extrinsicvaluev1.md) |

**Returns:** *[ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  args

• **get args**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Defined in [type/ExtrinsicV1.ts:39](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L39)*

**`description`** The arguments passed to for the call, exposes args so it is compatible with [Method](_primitive_method_.method.md)

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../interfaces/_types_.argsdef.md)*

*Defined in [type/ExtrinsicV1.ts:46](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L46)*

**`description`** Thge argument defintions, compatible with [Method](_primitive_method_.method.md)

**Returns:** *[ArgsDef](../interfaces/_types_.argsdef.md)*

___

###  callIndex

• **get callIndex**(): *`Uint8Array`*

*Defined in [type/ExtrinsicV1.ts:53](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L53)*

**`description`** The actual `[sectionIndex, methodIndex]` as used in the Method

**Returns:** *`Uint8Array`*

___

###  data

• **get data**(): *`Uint8Array`*

*Defined in [type/ExtrinsicV1.ts:60](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L60)*

**`description`** The actual data for the Method

**Returns:** *`Uint8Array`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [type/ExtrinsicV1.ts:67](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L67)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Defined in [type/ExtrinsicV1.ts:85](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L85)*

**`description`** `true` is method has `Origin` argument (compatibility with [Method](_primitive_method_.method.md))

**Returns:** *boolean*

___

###  hash

• **get hash**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [type/ExtrinsicV1.ts:76](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L76)*

**`description`** Convernience function, encodes the extrinsic and returns the actual hash

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [type/ExtrinsicV1.ts:92](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L92)*

**`description`** `true` id the extrinsic is signed

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Defined in [type/ExtrinsicV1.ts:99](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L99)*

**`description`** The length of the encoded value

**Returns:** *number*

___

###  meta

• **get meta**(): *[FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)*

*Defined in [type/ExtrinsicV1.ts:106](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L106)*

**`description`** The [FunctionMetadata](_metadata_v1_calls_.functionmetadata.md) that describes the extrinsic

**Returns:** *[FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)*

___

###  method

• **get method**(): *[Method](_primitive_method_.method.md)*

*Defined in [type/ExtrinsicV1.ts:113](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L113)*

**`description`** The [Method](_primitive_method_.method.md) this extrinsic wraps

**Returns:** *[Method](_primitive_method_.method.md)*

___

###  signature

• **get signature**(): *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

*Defined in [type/ExtrinsicV1.ts:120](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L120)*

**`description`** The [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

**Returns:** *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_primitive_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `nonce`: [AnyNumber](../modules/_types_.md#anynumber), `era`: `Uint8Array` | [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md)): *[ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Defined in [type/ExtrinsicV1.ts:127](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L127)*

**`description`** Add an [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_primitive_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`nonce` | [AnyNumber](../modules/_types_.md#anynumber) |
`era` | `Uint8Array` \| [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md) |

**Returns:** *[ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_types_.signatureoptions.md)): *[ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Defined in [type/ExtrinsicV1.ts:136](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L136)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_types_.signatureoptions.md) |

**Returns:** *[ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Overrides [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [type/ExtrinsicV1.ts:145](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L145)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [type/ExtrinsicV1.ts:152](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L152)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [type/ExtrinsicV1.ts:159](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L159)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [type/ExtrinsicV1.ts:168](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/type/ExtrinsicV1.ts#L168)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*