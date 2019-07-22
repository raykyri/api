> # Interface: IExtrinsic

## Hierarchy

* `ExtrinsicSignatureBase`

  * [IMethod](_types_.imethod.md)

  * **IExtrinsic**

## Implemented by

* [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)

## Index

### Properties

* [args](_types_.iextrinsic.md#args)
* [argsDef](_types_.iextrinsic.md#argsdef)
* [callIndex](_types_.iextrinsic.md#callindex)
* [data](_types_.iextrinsic.md#data)
* [encodedLength](_types_.iextrinsic.md#encodedlength)
* [era](_types_.iextrinsic.md#era)
* [hasOrigin](_types_.iextrinsic.md#hasorigin)
* [hash](_types_.iextrinsic.md#hash)
* [isEmpty](_types_.iextrinsic.md#isempty)
* [isSigned](_types_.iextrinsic.md#issigned)
* [length](_types_.iextrinsic.md#length)
* [meta](_types_.iextrinsic.md#meta)
* [method](_types_.iextrinsic.md#method)
* [nonce](_types_.iextrinsic.md#nonce)
* [signature](_types_.iextrinsic.md#signature)
* [signer](_types_.iextrinsic.md#signer)
* [tip](_types_.iextrinsic.md#tip)
* [type](_types_.iextrinsic.md#type)
* [version](_types_.iextrinsic.md#version)

### Methods

* [addSignature](_types_.iextrinsic.md#addsignature)
* [eq](_types_.iextrinsic.md#eq)
* [sign](_types_.iextrinsic.md#sign)
* [toHex](_types_.iextrinsic.md#tohex)
* [toJSON](_types_.iextrinsic.md#tojson)
* [toRawType](_types_.iextrinsic.md#torawtype)
* [toString](_types_.iextrinsic.md#tostring)
* [toU8a](_types_.iextrinsic.md#tou8a)

## Properties

###  args

• **args**: *[Codec](_types_.codec.md)[]*

*Inherited from [IMethod](_types_.imethod.md).[args](_types_.imethod.md#args)*

*Defined in [types.ts:138](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L138)*

___

###  argsDef

• **argsDef**: *[ArgsDef](../modules/_types_.md#argsdef)*

*Inherited from [IMethod](_types_.imethod.md).[argsDef](_types_.imethod.md#argsdef)*

*Defined in [types.ts:139](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L139)*

___

###  callIndex

• **callIndex**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[callIndex](_types_.imethod.md#callindex)*

*Defined in [types.ts:140](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L140)*

___

###  data

• **data**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[data](_types_.imethod.md#data)*

*Defined in [types.ts:141](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L141)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:57](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L57)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[IExtrinsicEra](_types_.iextrinsicera.md)*

*Inherited from void*

*Defined in [types.ts:148](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L148)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from [IMethod](_types_.imethod.md).[hasOrigin](_types_.imethod.md#hasorigin)*

*Defined in [types.ts:142](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L142)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Defined in [types.ts:186](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L186)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:62](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L62)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [types.ts:147](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L147)*

___

###  length

• **length**: *number*

*Defined in [types.ts:187](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L187)*

___

###  meta

• **meta**: *[FunctionMetadata](../classes/_metadata_v1_calls_.functionmetadata.md)*

*Inherited from [IMethod](_types_.imethod.md).[meta](_types_.imethod.md#meta)*

*Defined in [types.ts:143](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L143)*

___

###  method

• **method**: *[Method](../classes/_primitive_method_.method.md)*

*Defined in [types.ts:188](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L188)*

___

###  nonce

• **nonce**: *[NonceCompact](../classes/_type_noncecompact_.noncecompact.md)*

*Inherited from void*

*Defined in [types.ts:149](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L149)*

___

###  signature

• **signature**: *[IHash](_types_.ihash.md)*

*Inherited from void*

*Defined in [types.ts:150](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L150)*

___

###  signer

• **signer**: *[Address](../classes/_primitive_address_.address.md)*

*Inherited from void*

*Defined in [types.ts:151](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L151)*

___

###  tip

• **tip**: *[BalanceCompact](../classes/_primitive_balancecompact_.balancecompact.md)*

*Inherited from void*

*Defined in [types.ts:152](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L152)*

___

###  type

• **type**: *number*

*Defined in [types.ts:189](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L189)*

___

###  version

• **version**: *number*

*Defined in [types.ts:190](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L190)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../classes/_primitive_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | `Uint8Array` | string): *[IExtrinsic](_types_.iextrinsic.md)*

*Defined in [types.ts:192](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../classes/_primitive_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) \| `Uint8Array` \| string |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:67](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L67)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsic](_types_.iextrinsic.md)*

*Defined in [types.ts:193](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:72](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L72)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L77)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L82)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L87)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:93](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L93)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*