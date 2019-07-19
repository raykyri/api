> # Class: Extrinsic

**`name`** Extrinsic

**`description`** 
Representation of an Extrinsic in the system. It contains the actual call,
(optional) signature and encodes with an actual length prefix

https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node.

Can be:
- signed, to create a transaction
- left as is, to create an inherent

## Hierarchy

* [Base](_codec_base_.base.md)‹*[ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)*›

  * **Extrinsic**

## Implements

* [IExtrinsic](../interfaces/_types_.iextrinsic.md)
* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_type_extrinsic_.extrinsic.md#constructor)

### Accessors

* [args](_type_extrinsic_.extrinsic.md#args)
* [argsDef](_type_extrinsic_.extrinsic.md#argsdef)
* [callIndex](_type_extrinsic_.extrinsic.md#callindex)
* [data](_type_extrinsic_.extrinsic.md#data)
* [encodedLength](_type_extrinsic_.extrinsic.md#encodedlength)
* [hasOrigin](_type_extrinsic_.extrinsic.md#hasorigin)
* [hash](_type_extrinsic_.extrinsic.md#hash)
* [isEmpty](_type_extrinsic_.extrinsic.md#isempty)
* [isSigned](_type_extrinsic_.extrinsic.md#issigned)
* [length](_type_extrinsic_.extrinsic.md#length)
* [meta](_type_extrinsic_.extrinsic.md#meta)
* [method](_type_extrinsic_.extrinsic.md#method)
* [signature](_type_extrinsic_.extrinsic.md#signature)

### Methods

* [addSignature](_type_extrinsic_.extrinsic.md#addsignature)
* [eq](_type_extrinsic_.extrinsic.md#eq)
* [sign](_type_extrinsic_.extrinsic.md#sign)
* [toHex](_type_extrinsic_.extrinsic.md#tohex)
* [toJSON](_type_extrinsic_.extrinsic.md#tojson)
* [toRawType](_type_extrinsic_.extrinsic.md#torawtype)
* [toString](_type_extrinsic_.extrinsic.md#tostring)
* [toU8a](_type_extrinsic_.extrinsic.md#tou8a)
* [decodeExtrinsic](_type_extrinsic_.extrinsic.md#static-decodeextrinsic)
* [decodeU8a](_type_extrinsic_.extrinsic.md#static-decodeu8a)

## Constructors

###  constructor

\+ **new Extrinsic**(`value?`: `ExtrinsicValue` | [AnyU8a](../modules/_types_.md#anyu8a) | [Method](_primitive_method_.method.md)): *[Extrinsic](_type_extrinsic_.extrinsic.md)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [type/Extrinsic.ts:34](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `ExtrinsicValue` \| [AnyU8a](../modules/_types_.md#anyu8a) \| [Method](_primitive_method_.method.md) |

**Returns:** *[Extrinsic](_type_extrinsic_.extrinsic.md)*

## Accessors

###  args

• **get args**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Defined in [type/Extrinsic.ts:91](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L91)*

**`description`** The arguments passed to for the call, exposes args so it is compatible with [Method](_primitive_method_.method.md)

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../interfaces/_types_.argsdef.md)*

*Defined in [type/Extrinsic.ts:98](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L98)*

**`description`** Thge argument defintions, compatible with [Method](_primitive_method_.method.md)

**Returns:** *[ArgsDef](../interfaces/_types_.argsdef.md)*

___

###  callIndex

• **get callIndex**(): *`Uint8Array`*

*Defined in [type/Extrinsic.ts:105](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L105)*

**`description`** The actual `[sectionIndex, methodIndex]` as used in the Method

**Returns:** *`Uint8Array`*

___

###  data

• **get data**(): *`Uint8Array`*

*Defined in [type/Extrinsic.ts:112](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L112)*

**`description`** The actual data for the Method

**Returns:** *`Uint8Array`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [type/Extrinsic.ts:119](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L119)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Defined in [type/Extrinsic.ts:133](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L133)*

**`description`** `true` is method has `Origin` argument (compatibility with [Method](_primitive_method_.method.md))

**Returns:** *boolean*

___

###  hash

• **get hash**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [type/Extrinsic.ts:126](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L126)*

**`description`** Convernience function, encodes the extrinsic and returns the actual hash

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [type/Extrinsic.ts:140](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [type/Extrinsic.ts:147](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L147)*

**`description`** `true` id the extrinsic is signed

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Defined in [type/Extrinsic.ts:154](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L154)*

**`description`** The length of the encoded value

**Returns:** *number*

___

###  meta

• **get meta**(): *[FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)*

*Defined in [type/Extrinsic.ts:161](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L161)*

**`description`** The [FunctionMetadata](_metadata_v1_calls_.functionmetadata.md) that describes the extrinsic

**Returns:** *[FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)*

___

###  method

• **get method**(): *[Method](_primitive_method_.method.md)*

*Defined in [type/Extrinsic.ts:168](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L168)*

**`description`** The [Method](_primitive_method_.method.md) this extrinsic wraps

**Returns:** *[Method](_primitive_method_.method.md)*

___

###  signature

• **get signature**(): *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

*Defined in [type/Extrinsic.ts:175](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L175)*

**`description`** The [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

**Returns:** *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_primitive_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `nonce`: [AnyNumber](../modules/_types_.md#anynumber), `era`: `Uint8Array` | [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md)): *[Extrinsic](_type_extrinsic_.extrinsic.md)*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Defined in [type/Extrinsic.ts:182](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L182)*

**`description`** Add an [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_primitive_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`nonce` | [AnyNumber](../modules/_types_.md#anynumber) |
`era` | `Uint8Array` \| [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md) |

**Returns:** *[Extrinsic](_type_extrinsic_.extrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [type/Extrinsic.ts:200](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L200)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_types_.signatureoptions.md)): *[Extrinsic](_type_extrinsic_.extrinsic.md)*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Defined in [type/Extrinsic.ts:191](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L191)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_types_.signatureoptions.md) |

**Returns:** *[Extrinsic](_type_extrinsic_.extrinsic.md)*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [type/Extrinsic.ts:207](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L207)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [type/Extrinsic.ts:214](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L214)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [type/Extrinsic.ts:228](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L228)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [type/Extrinsic.ts:221](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L221)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [type/Extrinsic.ts:236](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L236)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`value?`: `ExtrinsicValue` | [AnyU8a](../modules/_types_.md#anyu8a) | [Method](_primitive_method_.method.md)): *[ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)*

*Defined in [type/Extrinsic.ts:39](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `ExtrinsicValue` \| [AnyU8a](../modules/_types_.md#anyu8a) \| [Method](_primitive_method_.method.md) |

**Returns:** *[ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)*

___

### `Static` decodeU8a

▸ **decodeU8a**(`value`: `Uint8Array`): *[ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)*

*Defined in [type/Extrinsic.ts:75](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/type/Extrinsic.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `Uint8Array` |

**Returns:** *[ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)*