> # Interface: IExtrinsic

## Hierarchy

  * [IMethod](_types_.imethod.md)

  * **IExtrinsic**

## Implemented by

* [Extrinsic](../classes/_type_extrinsic_.extrinsic.md)
* [ExtrinsicV1](../classes/_type_extrinsicv1_.extrinsicv1.md)

## Index

### Properties

* [args](_types_.iextrinsic.md#args)
* [argsDef](_types_.iextrinsic.md#argsdef)
* [callIndex](_types_.iextrinsic.md#callindex)
* [data](_types_.iextrinsic.md#data)
* [encodedLength](_types_.iextrinsic.md#encodedlength)
* [hasOrigin](_types_.iextrinsic.md#hasorigin)
* [hash](_types_.iextrinsic.md#hash)
* [isEmpty](_types_.iextrinsic.md#isempty)
* [isSigned](_types_.iextrinsic.md#issigned)
* [meta](_types_.iextrinsic.md#meta)
* [method](_types_.iextrinsic.md#method)
* [signature](_types_.iextrinsic.md#signature)

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

*Defined in [types.ts:138](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L138)*

___

###  argsDef

• **argsDef**: *[ArgsDef](_types_.argsdef.md)*

*Inherited from [IMethod](_types_.imethod.md).[argsDef](_types_.imethod.md#argsdef)*

*Defined in [types.ts:139](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L139)*

___

###  callIndex

• **callIndex**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[callIndex](_types_.imethod.md#callindex)*

*Defined in [types.ts:140](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L140)*

___

###  data

• **data**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[data](_types_.imethod.md#data)*

*Defined in [types.ts:141](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L141)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:55](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L55)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from [IMethod](_types_.imethod.md).[hasOrigin](_types_.imethod.md#hasorigin)*

*Defined in [types.ts:142](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L142)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Defined in [types.ts:160](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L160)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:60](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L60)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Defined in [types.ts:161](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L161)*

___

###  meta

• **meta**: *[FunctionMetadata](../classes/_metadata_v1_calls_.functionmetadata.md)*

*Inherited from [IMethod](_types_.imethod.md).[meta](_types_.imethod.md#meta)*

*Defined in [types.ts:143](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L143)*

___

###  method

• **method**: *[Method](../classes/_primitive_method_.method.md)*

*Defined in [types.ts:162](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L162)*

___

###  signature

• **signature**: *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [types.ts:163](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L163)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../classes/_primitive_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `nonce`: [AnyNumber](../modules/_types_.md#anynumber), `era`: `Uint8Array` | [IExtrinsicEra](_types_.iextrinsicera.md)): *[IExtrinsic](_types_.iextrinsic.md)*

*Defined in [types.ts:164](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../classes/_primitive_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`nonce` | [AnyNumber](../modules/_types_.md#anynumber) |
`era` | `Uint8Array` \| [IExtrinsicEra](_types_.iextrinsicera.md) |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:66](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L66)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsic](_types_.iextrinsic.md)*

*Defined in [types.ts:165](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L165)*

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

*Defined in [types.ts:71](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L71)*

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

*Defined in [types.ts:76](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L76)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:81](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L81)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:86](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L86)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:92](https://github.com/polkadot-js/api/blob/61065a2/packages/types/src/types.ts#L92)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*