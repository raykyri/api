> # Class: SignaturePayload

**`name`** SignaturePayload

**`description`** 
A signing payload for an [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

## Hierarchy

* [Base](_codec_base_.base.md)‹*[SignaturePayloadV1](_primitive_extrinsic_v1_signaturepayload_.signaturepayloadv1.md) | [SignaturePayloadV2](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md)*›

  * **SignaturePayload**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_signaturepayload_.signaturepayload.md#constructor)

### Accessors

* [blockHash](_primitive_extrinsic_signaturepayload_.signaturepayload.md#blockhash)
* [encodedLength](_primitive_extrinsic_signaturepayload_.signaturepayload.md#encodedlength)
* [era](_primitive_extrinsic_signaturepayload_.signaturepayload.md#era)
* [isEmpty](_primitive_extrinsic_signaturepayload_.signaturepayload.md#isempty)
* [method](_primitive_extrinsic_signaturepayload_.signaturepayload.md#method)
* [nonce](_primitive_extrinsic_signaturepayload_.signaturepayload.md#nonce)
* [tip](_primitive_extrinsic_signaturepayload_.signaturepayload.md#tip)

### Methods

* [eq](_primitive_extrinsic_signaturepayload_.signaturepayload.md#eq)
* [sign](_primitive_extrinsic_signaturepayload_.signaturepayload.md#sign)
* [toHex](_primitive_extrinsic_signaturepayload_.signaturepayload.md#tohex)
* [toJSON](_primitive_extrinsic_signaturepayload_.signaturepayload.md#tojson)
* [toRawType](_primitive_extrinsic_signaturepayload_.signaturepayload.md#torawtype)
* [toString](_primitive_extrinsic_signaturepayload_.signaturepayload.md#tostring)
* [toU8a](_primitive_extrinsic_signaturepayload_.signaturepayload.md#tou8a)
* [decodeSignaturePayload](_primitive_extrinsic_signaturepayload_.signaturepayload.md#static-decodesignaturepayload)

## Constructors

###  constructor

\+ **new SignaturePayload**(`value`: [SignaturePayloadValueV1](../interfaces/_primitive_extrinsic_v1_signaturepayload_.signaturepayloadvaluev1.md) | [SignaturePayloadValueV2](../interfaces/_primitive_extrinsic_v2_signaturepayload_.signaturepayloadvaluev2.md) | `Uint8Array` | string | undefined, `__namedParameters`: object): *[SignaturePayload](_primitive_extrinsic_signaturepayload_.signaturepayload.md)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [primitive/Extrinsic/SignaturePayload.ts:29](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/primitive/Extrinsic/SignaturePayload.ts#L29)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [SignaturePayloadValueV1](../interfaces/_primitive_extrinsic_v1_signaturepayload_.signaturepayloadvaluev1.md) \| [SignaturePayloadValueV2](../interfaces/_primitive_extrinsic_v2_signaturepayload_.signaturepayloadvaluev2.md) \| `Uint8Array` \| string \| undefined | - |
`__namedParameters` | object |  {} |

**Returns:** *[SignaturePayload](_primitive_extrinsic_signaturepayload_.signaturepayload.md)*

## Accessors

###  blockHash

• **get blockHash**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [primitive/Extrinsic/SignaturePayload.ts:51](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/primitive/Extrinsic/SignaturePayload.ts#L51)*

**`description`** The block [Hash](_primitive_hash_.hash.md) the signature applies to (mortal/immortal)

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Base.ts:21](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Base.ts#L21)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Defined in [primitive/Extrinsic/SignaturePayload.ts:65](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/primitive/Extrinsic/SignaturePayload.ts#L65)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:28](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Base.ts#L28)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[U8a](_codec_u8a_.u8a.md)*

*Defined in [primitive/Extrinsic/SignaturePayload.ts:58](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/primitive/Extrinsic/SignaturePayload.ts#L58)*

**`description`** The [U8a](_codec_u8a_.u8a.md) contained in the payload

**Returns:** *[U8a](_codec_u8a_.u8a.md)*

___

###  nonce

• **get nonce**(): *[NonceCompact](_type_noncecompact_.noncecompact.md)*

*Defined in [primitive/Extrinsic/SignaturePayload.ts:72](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/primitive/Extrinsic/SignaturePayload.ts#L72)*

**`description`** The [NonceCompact](_type_noncecompact_.noncecompact.md)

**Returns:** *[NonceCompact](_type_noncecompact_.noncecompact.md)*

___

###  tip

• **get tip**(): *[BalanceCompact](_primitive_balancecompact_.balancecompact.md)*

*Defined in [primitive/Extrinsic/SignaturePayload.ts:79](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/primitive/Extrinsic/SignaturePayload.ts#L79)*

**`description`** The [BalanceCompact](_primitive_balancecompact_.balancecompact.md)

**Returns:** *[BalanceCompact](_primitive_balancecompact_.balancecompact.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [primitive/Extrinsic/SignaturePayload.ts:86](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/primitive/Extrinsic/SignaturePayload.ts#L86)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md)): *object*

*Defined in [primitive/Extrinsic/SignaturePayload.ts:93](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/primitive/Extrinsic/SignaturePayload.ts#L93)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |

**Returns:** *object*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/Base.ts:42](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Base.ts#L42)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [primitive/Extrinsic/SignaturePayload.ts:108](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/primitive/Extrinsic/SignaturePayload.ts#L108)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/Base.ts:71](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Base.ts#L71)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [primitive/Extrinsic/SignaturePayload.ts:115](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/primitive/Extrinsic/SignaturePayload.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Base.ts:64](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Base.ts#L64)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeSignaturePayload

▸ **decodeSignaturePayload**(`value`: [SignaturePayload](_primitive_extrinsic_signaturepayload_.signaturepayload.md) | [SignaturePayloadValueV1](../interfaces/_primitive_extrinsic_v1_signaturepayload_.signaturepayloadvaluev1.md) | [SignaturePayloadValueV2](../interfaces/_primitive_extrinsic_v2_signaturepayload_.signaturepayloadvaluev2.md) | `Uint8Array` | string | undefined, `version`: number): *[SignaturePayloadV1](_primitive_extrinsic_v1_signaturepayload_.signaturepayloadv1.md) | [SignaturePayloadV2](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md)*

*Defined in [primitive/Extrinsic/SignaturePayload.ts:36](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/primitive/Extrinsic/SignaturePayload.ts#L36)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [SignaturePayload](_primitive_extrinsic_signaturepayload_.signaturepayload.md) \| [SignaturePayloadValueV1](../interfaces/_primitive_extrinsic_v1_signaturepayload_.signaturepayloadvaluev1.md) \| [SignaturePayloadValueV2](../interfaces/_primitive_extrinsic_v2_signaturepayload_.signaturepayloadvaluev2.md) \| `Uint8Array` \| string \| undefined | - |
`version` | number |  DEFAULT_VERSION |

**Returns:** *[SignaturePayloadV1](_primitive_extrinsic_v1_signaturepayload_.signaturepayloadv1.md) | [SignaturePayloadV2](_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md)*