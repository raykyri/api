> # Class: ExtrinsicSignature <**S, T, V, E**>

**`name`** ExtrinsicSignature

**`description`** 
A container for the [Signature](_primitive_signature_.signature.md) associated with a specific [Extrinsic](_type_extrinsic_.extrinsic.md)

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **ExtrinsicSignature**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)

## Index

### Constructors

* [constructor](_type_extrinsicsignature_.extrinsicsignature.md#constructor)

### Accessors

* [Type](_type_extrinsicsignature_.extrinsicsignature.md#type)
* [encodedLength](_type_extrinsicsignature_.extrinsicsignature.md#encodedlength)
* [era](_type_extrinsicsignature_.extrinsicsignature.md#era)
* [isEmpty](_type_extrinsicsignature_.extrinsicsignature.md#isempty)
* [isSigned](_type_extrinsicsignature_.extrinsicsignature.md#issigned)
* [nonce](_type_extrinsicsignature_.extrinsicsignature.md#nonce)
* [signature](_type_extrinsicsignature_.extrinsicsignature.md#signature)
* [signer](_type_extrinsicsignature_.extrinsicsignature.md#signer)
* [version](_type_extrinsicsignature_.extrinsicsignature.md#version)

### Methods

* [addSignature](_type_extrinsicsignature_.extrinsicsignature.md#addsignature)
* [eq](_type_extrinsicsignature_.extrinsicsignature.md#eq)
* [get](_type_extrinsicsignature_.extrinsicsignature.md#get)
* [getAtIndex](_type_extrinsicsignature_.extrinsicsignature.md#getatindex)
* [sign](_type_extrinsicsignature_.extrinsicsignature.md#sign)
* [toArray](_type_extrinsicsignature_.extrinsicsignature.md#toarray)
* [toHex](_type_extrinsicsignature_.extrinsicsignature.md#tohex)
* [toJSON](_type_extrinsicsignature_.extrinsicsignature.md#tojson)
* [toRawType](_type_extrinsicsignature_.extrinsicsignature.md#torawtype)
* [toString](_type_extrinsicsignature_.extrinsicsignature.md#tostring)
* [toU8a](_type_extrinsicsignature_.extrinsicsignature.md#tou8a)
* [decodeExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md#static-decodeextrinsicsignature)
* [with](_type_extrinsicsignature_.extrinsicsignature.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicSignature**(`value?`: [Uint8Array](_codec_u8a_.u8a.md#static-uint8array)): *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/ExtrinsicSignature.ts:28](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [Uint8Array](_codec_u8a_.u8a.md#static-uint8array) |

**Returns:** *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [type/ExtrinsicSignature.ts:65](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L65)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)*

*Defined in [type/ExtrinsicSignature.ts:81](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L81)*

**`description`** The [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** *[ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)*

• **set era**(`era`: [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)): *void*

*Defined in [type/ExtrinsicSignature.ts:88](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L88)*

**`description`** The [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Parameters:**

Name | Type |
------ | ------ |
`era` | [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md) |

**Returns:** *void*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [type/ExtrinsicSignature.ts:74](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L74)*

**`description`** `true` if the signature is valid

**Returns:** *boolean*

___

###  nonce

• **get nonce**(): *[Nonce](_type_nonce_.nonce.md)*

*Defined in [type/ExtrinsicSignature.ts:95](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L95)*

**`description`** The [Nonce](_type_nonce_.nonce.md) for the signature

**Returns:** *[Nonce](_type_nonce_.nonce.md)*

___

###  signature

• **get signature**(): *[Signature](_primitive_signature_.signature.md)*

*Defined in [type/ExtrinsicSignature.ts:102](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L102)*

**`description`** The actuall [Signature](_primitive_signature_.signature.md) hash

**Returns:** *[Signature](_primitive_signature_.signature.md)*

___

###  signer

• **get signer**(): *[Address](_primitive_address_.address.md)*

*Defined in [type/ExtrinsicSignature.ts:109](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L109)*

**`description`** The [Address](_primitive_address_.address.md) that signed

**Returns:** *[Address](_primitive_address_.address.md)*

___

###  version

• **get version**(): *number*

*Defined in [type/ExtrinsicSignature.ts:116](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L116)*

**`description`** The encoded version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`_signer`: [Address](_primitive_address_.address.md) | `Uint8Array` | string, `_signature`: `Uint8Array` | string, `_nonce`: [AnyNumber](../modules/_types_.md#anynumber), `_era`: `Uint8Array` | [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md)): *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

*Defined in [type/ExtrinsicSignature.ts:137](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L137)*

**`description`** Adds a raw signature

**Parameters:**

Name | Type |
------ | ------ |
`_signer` | [Address](_primitive_address_.address.md) \| `Uint8Array` \| string |
`_signature` | `Uint8Array` \| string |
`_nonce` | [AnyNumber](../modules/_types_.md#anynumber) |
`_era` | `Uint8Array` \| [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md) |

**Returns:** *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`method`: [Method](_primitive_method_.method.md), `account`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `__namedParameters`: object): *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

*Defined in [type/ExtrinsicSignature.ts:149](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L149)*

**`description`** Generate a payload and pplies the signature from a keypair

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Method](_primitive_method_.method.md) |
`account` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`__namedParameters` | object |

**Returns:** *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [type/ExtrinsicSignature.ts:166](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L166)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(`value?`: [Uint8Array](_codec_u8a_.u8a.md#static-uint8array)): *object | `Uint8Array`*

*Defined in [type/ExtrinsicSignature.ts:45](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/type/ExtrinsicSignature.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [Uint8Array](_codec_u8a_.u8a.md#static-uint8array) |

**Returns:** *object | `Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*