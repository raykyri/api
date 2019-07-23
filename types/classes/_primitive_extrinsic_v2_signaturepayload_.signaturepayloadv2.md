> # Class: SignaturePayloadV2 <**S, T, V, E**>

**`name`** SignaturePayloadV2

**`description`** 
A signing payload for an [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **SignaturePayloadV2**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#constructor)

### Accessors

* [Type](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#type)
* [blockHash](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#blockhash)
* [encodedLength](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#encodedlength)
* [era](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#era)
* [isEmpty](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#isempty)
* [method](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#method)
* [nonce](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#nonce)
* [tip](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#tip)

### Methods

* [eq](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#eq)
* [get](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#get)
* [getAtIndex](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#getatindex)
* [sign](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#sign)
* [toArray](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#toarray)
* [toHex](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#tohex)
* [toJSON](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#tojson)
* [toRawType](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#torawtype)
* [toString](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#tostring)
* [toU8a](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#tou8a)
* [with](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md#static-with)

## Constructors

###  constructor

\+ **new SignaturePayloadV2**(`value?`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | [SignaturePayloadValueV2](../interfaces/_primitive_extrinsic_v2_signaturepayload_.signaturepayloadvaluev2.md) | `Uint8Array` | string): *[SignaturePayloadV2](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v2/SignaturePayload.ts:35](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/primitive/Extrinsic/v2/SignaturePayload.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) \| [SignaturePayloadValueV2](../interfaces/_primitive_extrinsic_v2_signaturepayload_.signaturepayloadvaluev2.md) \| `Uint8Array` \| string |

**Returns:** *[SignaturePayloadV2](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  blockHash

• **get blockHash**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [primitive/Extrinsic/v2/SignaturePayload.ts:46](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/primitive/Extrinsic/v2/SignaturePayload.ts#L46)*

**`description`** The block [Hash](_primitive_hash_.hash.md) the signature applies to (mortal/immortal)

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Defined in [primitive/Extrinsic/v2/SignaturePayload.ts:60](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/primitive/Extrinsic/v2/SignaturePayload.ts#L60)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[U8a](_codec_u8a_.u8a.md)*

*Defined in [primitive/Extrinsic/v2/SignaturePayload.ts:53](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/primitive/Extrinsic/v2/SignaturePayload.ts#L53)*

**`description`** The [U8a](_codec_u8a_.u8a.md) contained in the payload

**Returns:** *[U8a](_codec_u8a_.u8a.md)*

___

###  nonce

• **get nonce**(): *[NonceCompact](_type_noncecompact_.noncecompact.md)*

*Defined in [primitive/Extrinsic/v2/SignaturePayload.ts:67](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/primitive/Extrinsic/v2/SignaturePayload.ts#L67)*

**`description`** The [NonceCompact](_type_noncecompact_.noncecompact.md)

**Returns:** *[NonceCompact](_type_noncecompact_.noncecompact.md)*

___

###  tip

• **get tip**(): *[BalanceCompact](_primitive_balancecompact_.balancecompact.md)*

*Defined in [primitive/Extrinsic/v2/SignaturePayload.ts:74](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/primitive/Extrinsic/v2/SignaturePayload.ts#L74)*

**`description`** The tip [BalanceCompact](_primitive_balancecompact_.balancecompact.md)

**Returns:** *[BalanceCompact](_primitive_balancecompact_.balancecompact.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md)): *`Uint8Array`*

*Defined in [primitive/Extrinsic/v2/SignaturePayload.ts:82](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/primitive/Extrinsic/v2/SignaturePayload.ts#L82)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |

**Returns:** *`Uint8Array`*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L260)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*