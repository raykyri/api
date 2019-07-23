> # Interface: IExtrinsicImpl

## Hierarchy

* [Codec](_types_.codec.md)

  * **IExtrinsicImpl**

## Implemented by

* [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)
* [ExtrinsicV2](../classes/_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)

## Index

### Properties

* [encodedLength](_types_.iextrinsicimpl.md#encodedlength)
* [isEmpty](_types_.iextrinsicimpl.md#isempty)
* [method](_types_.iextrinsicimpl.md#method)
* [signature](_types_.iextrinsicimpl.md#signature)
* [version](_types_.iextrinsicimpl.md#version)

### Methods

* [addSignature](_types_.iextrinsicimpl.md#addsignature)
* [eq](_types_.iextrinsicimpl.md#eq)
* [sign](_types_.iextrinsicimpl.md#sign)
* [toHex](_types_.iextrinsicimpl.md#tohex)
* [toJSON](_types_.iextrinsicimpl.md#tojson)
* [toRawType](_types_.iextrinsicimpl.md#torawtype)
* [toString](_types_.iextrinsicimpl.md#tostring)
* [toU8a](_types_.iextrinsicimpl.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:57](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L57)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:62](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L62)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *[Method](../classes/_primitive_method_.method.md)*

*Defined in [types.ts:177](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L177)*

___

###  signature

• **signature**: *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [types.ts:178](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L178)*

___

###  version

• **version**: *number*

*Defined in [types.ts:179](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L179)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../classes/_primitive_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | `Uint8Array` | string): *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

*Defined in [types.ts:181](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../classes/_primitive_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) \| `Uint8Array` \| string |

**Returns:** *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:67](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L67)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

*Defined in [types.ts:182](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L182)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:72](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L72)*

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

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L77)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L82)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L87)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:93](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/types.ts#L93)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*