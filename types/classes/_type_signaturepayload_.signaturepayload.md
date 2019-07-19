> # Class: SignaturePayload <**S, T, V, E**>

**`name`** SignaturePayload

**`description`** 
A signing payload for an [Extrinsic](_type_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

  1-8 bytes: The Transaction Compact<Index/Nonce> as provided in the transaction itself.
  2+ bytes: The Function Descriptor as provided in the transaction itself.
  1/2 bytes: The Transaction Era as provided in the transaction itself.
  32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **SignaturePayload**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_type_signaturepayload_.signaturepayload.md#constructor)

### Accessors

* [Type](_type_signaturepayload_.signaturepayload.md#type)
* [blockHash](_type_signaturepayload_.signaturepayload.md#blockhash)
* [encodedLength](_type_signaturepayload_.signaturepayload.md#encodedlength)
* [era](_type_signaturepayload_.signaturepayload.md#era)
* [isEmpty](_type_signaturepayload_.signaturepayload.md#isempty)
* [isSigned](_type_signaturepayload_.signaturepayload.md#issigned)
* [method](_type_signaturepayload_.signaturepayload.md#method)
* [nonce](_type_signaturepayload_.signaturepayload.md#nonce)
* [signature](_type_signaturepayload_.signaturepayload.md#signature)

### Methods

* [eq](_type_signaturepayload_.signaturepayload.md#eq)
* [get](_type_signaturepayload_.signaturepayload.md#get)
* [getAtIndex](_type_signaturepayload_.signaturepayload.md#getatindex)
* [sign](_type_signaturepayload_.signaturepayload.md#sign)
* [toArray](_type_signaturepayload_.signaturepayload.md#toarray)
* [toHex](_type_signaturepayload_.signaturepayload.md#tohex)
* [toJSON](_type_signaturepayload_.signaturepayload.md#tojson)
* [toRawType](_type_signaturepayload_.signaturepayload.md#torawtype)
* [toString](_type_signaturepayload_.signaturepayload.md#tostring)
* [toU8a](_type_signaturepayload_.signaturepayload.md#tou8a)
* [with](_type_signaturepayload_.signaturepayload.md#static-with)

## Constructors

###  constructor

\+ **new SignaturePayload**(`value?`: `SignaturePayloadValue` | `Uint8Array`): *[SignaturePayload](_type_signaturepayload_.signaturepayload.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/SignaturePayload.ts:45](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/SignaturePayload.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `SignaturePayloadValue` \| `Uint8Array` |

**Returns:** *[SignaturePayload](_type_signaturepayload_.signaturepayload.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  blockHash

• **get blockHash**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [type/SignaturePayload.ts:66](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/SignaturePayload.ts#L66)*

**`description`** The block [Hash](_primitive_hash_.hash.md) the signature applies to (mortal/immortal)

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)*

*Defined in [type/SignaturePayload.ts:80](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/SignaturePayload.ts#L80)*

**`description`** The [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [type/SignaturePayload.ts:59](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/SignaturePayload.ts#L59)*

**`description`** `true` if the payload refers to a valid signature

**Returns:** *boolean*

___

###  method

• **get method**(): *[Method](_primitive_method_.method.md)*

*Defined in [type/SignaturePayload.ts:73](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/SignaturePayload.ts#L73)*

**`description`** The [Method](_primitive_method_.method.md) contained in the payload

**Returns:** *[Method](_primitive_method_.method.md)*

___

###  nonce

• **get nonce**(): *[Nonce](_type_nonce_.nonce.md)*

*Defined in [type/SignaturePayload.ts:87](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/SignaturePayload.ts#L87)*

**`description`** The [Nonce](_type_nonce_.nonce.md)

**Returns:** *[Nonce](_type_nonce_.nonce.md)*

___

###  signature

• **get signature**(): *`Uint8Array`*

*Defined in [type/SignaturePayload.ts:94](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/SignaturePayload.ts#L94)*

**`description`** The raw signature as a `Uint8Array`

**Returns:** *`Uint8Array`*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `version?`: [RuntimeVersion](_rpc_runtimeversion_.runtimeversion.md)): *`Uint8Array`*

*Defined in [type/SignaturePayload.ts:106](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/SignaturePayload.ts#L106)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`version?` | [RuntimeVersion](_rpc_runtimeversion_.runtimeversion.md) |

**Returns:** *`Uint8Array`*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L260)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*