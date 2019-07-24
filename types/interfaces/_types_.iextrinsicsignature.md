> # Interface: IExtrinsicSignature

## Hierarchy

* `ExtrinsicSignatureBase`

* [Codec](_types_.codec.md)

  * **IExtrinsicSignature**

## Implemented by

* [ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)
* [ExtrinsicSignatureV2](../classes/_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)

## Index

### Properties

* [encodedLength](_types_.iextrinsicsignature.md#encodedlength)
* [era](_types_.iextrinsicsignature.md#era)
* [isEmpty](_types_.iextrinsicsignature.md#isempty)
* [isSigned](_types_.iextrinsicsignature.md#issigned)
* [nonce](_types_.iextrinsicsignature.md#nonce)
* [signature](_types_.iextrinsicsignature.md#signature)
* [signer](_types_.iextrinsicsignature.md#signer)
* [tip](_types_.iextrinsicsignature.md#tip)

### Methods

* [addSignature](_types_.iextrinsicsignature.md#addsignature)
* [eq](_types_.iextrinsicsignature.md#eq)
* [sign](_types_.iextrinsicsignature.md#sign)
* [toHex](_types_.iextrinsicsignature.md#tohex)
* [toJSON](_types_.iextrinsicsignature.md#tojson)
* [toRawType](_types_.iextrinsicsignature.md#torawtype)
* [toString](_types_.iextrinsicsignature.md#tostring)
* [toU8a](_types_.iextrinsicsignature.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:57](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L57)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[IExtrinsicEra](_types_.iextrinsicera.md)*

*Inherited from void*

*Defined in [types.ts:149](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L149)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:62](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L62)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [types.ts:148](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L148)*

___

###  nonce

• **nonce**: *[NonceCompact](../classes/_type_noncecompact_.noncecompact.md)*

*Inherited from void*

*Defined in [types.ts:150](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L150)*

___

###  signature

• **signature**: *[IHash](_types_.ihash.md)*

*Inherited from void*

*Defined in [types.ts:151](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L151)*

___

###  signer

• **signer**: *[Address](../classes/_primitive_address_.address.md)*

*Inherited from void*

*Defined in [types.ts:152](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L152)*

___

###  tip

• **tip**: *[BalanceCompact](../classes/_primitive_balancecompact_.balancecompact.md)*

*Inherited from void*

*Defined in [types.ts:153](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L153)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../classes/_primitive_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `payload`: `Uint8Array` | string): *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [types.ts:165](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../classes/_primitive_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`payload` | `Uint8Array` \| string |

**Returns:** *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:67](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L67)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`method`: [Method](../classes/_primitive_method_.method.md), `account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [types.ts:166](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Method](../classes/_primitive_method_.method.md) |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:72](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L72)*

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

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L77)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L82)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L87)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:93](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L93)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*