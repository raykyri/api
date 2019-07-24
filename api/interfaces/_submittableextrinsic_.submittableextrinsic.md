> # Interface: SubmittableExtrinsic <**ApiType**>

## Type parameters

▪ **ApiType**

## Hierarchy

* `IExtrinsic`

  * **SubmittableExtrinsic**

## Index

### Properties

* [args](_submittableextrinsic_.submittableextrinsic.md#args)
* [argsDef](_submittableextrinsic_.submittableextrinsic.md#argsdef)
* [callIndex](_submittableextrinsic_.submittableextrinsic.md#callindex)
* [data](_submittableextrinsic_.submittableextrinsic.md#data)
* [encodedLength](_submittableextrinsic_.submittableextrinsic.md#encodedlength)
* [era](_submittableextrinsic_.submittableextrinsic.md#era)
* [hasOrigin](_submittableextrinsic_.submittableextrinsic.md#hasorigin)
* [hash](_submittableextrinsic_.submittableextrinsic.md#hash)
* [isEmpty](_submittableextrinsic_.submittableextrinsic.md#isempty)
* [isSigned](_submittableextrinsic_.submittableextrinsic.md#issigned)
* [length](_submittableextrinsic_.submittableextrinsic.md#length)
* [meta](_submittableextrinsic_.submittableextrinsic.md#meta)
* [method](_submittableextrinsic_.submittableextrinsic.md#method)
* [nonce](_submittableextrinsic_.submittableextrinsic.md#nonce)
* [signature](_submittableextrinsic_.submittableextrinsic.md#signature)
* [signer](_submittableextrinsic_.submittableextrinsic.md#signer)
* [tip](_submittableextrinsic_.submittableextrinsic.md#tip)
* [type](_submittableextrinsic_.submittableextrinsic.md#type)
* [version](_submittableextrinsic_.submittableextrinsic.md#version)

### Methods

* [addSignature](_submittableextrinsic_.submittableextrinsic.md#addsignature)
* [eq](_submittableextrinsic_.submittableextrinsic.md#eq)
* [send](_submittableextrinsic_.submittableextrinsic.md#send)
* [sign](_submittableextrinsic_.submittableextrinsic.md#sign)
* [signAndSend](_submittableextrinsic_.submittableextrinsic.md#signandsend)
* [toHex](_submittableextrinsic_.submittableextrinsic.md#tohex)
* [toJSON](_submittableextrinsic_.submittableextrinsic.md#tojson)
* [toRawType](_submittableextrinsic_.submittableextrinsic.md#torawtype)
* [toString](_submittableextrinsic_.submittableextrinsic.md#tostring)
* [toU8a](_submittableextrinsic_.submittableextrinsic.md#tou8a)

## Properties

###  args

• **args**: *`Codec`[]*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:138](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L138)*

___

###  argsDef

• **argsDef**: *`ArgsDef`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:139](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L139)*

___

###  callIndex

• **callIndex**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:140](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L140)*

___

###  data

• **data**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:141](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L141)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:57](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L57)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *`IExtrinsicEra`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:149](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L149)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:143](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L143)*

___

###  hash

• **hash**: *`IHash`*

*Inherited from void*

*Overrides void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:187](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L187)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:62](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L62)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:148](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L148)*

___

###  length

• **length**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:188](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L188)*

___

###  meta

• **meta**: *`FunctionMetadata`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:144](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L144)*

___

###  method

• **method**: *`Method`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:189](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L189)*

___

###  nonce

• **nonce**: *`NonceCompact`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:150](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L150)*

___

###  signature

• **signature**: *`IHash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:151](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L151)*

___

###  signer

• **signer**: *`Address`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:152](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L152)*

___

###  tip

• **tip**: *`BalanceCompact`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:153](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L153)*

___

###  type

• **type**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:190](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L190)*

___

###  version

• **version**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:191](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L191)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: `Address` | `Uint8Array` | string, `signature`: `Uint8Array` | string, `payload`: `ExtrinsicPayloadValue` | `Uint8Array` | string): *`IExtrinsic`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:193](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | `Address` \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`payload` | `ExtrinsicPayloadValue` \| `Uint8Array` \| string |

**Returns:** *`IExtrinsic`*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:67](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L67)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  send

▸ **send**(): *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:95](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/api/src/SubmittableExtrinsic.ts#L95)*

**Returns:** *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

▸ **send**(`statusCb`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:97](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/api/src/SubmittableExtrinsic.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

___

###  sign

▸ **sign**(`account`: `IKeyringPair`, `_options`: `Partial<SignatureOptions>`): *this*

*Overrides void*

*Defined in [SubmittableExtrinsic.ts:99](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/api/src/SubmittableExtrinsic.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` |
`_options` | `Partial<SignatureOptions>` |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `options?`: `Partial<SignerOptions>`): *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:101](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/api/src/SubmittableExtrinsic.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`options?` | `Partial<SignerOptions>` |

**Returns:** *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `statusCb`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:103](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/api/src/SubmittableExtrinsic.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`statusCb` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `options`: `Partial<SignerOptions>`, `statusCb?`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:105](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/api/src/SubmittableExtrinsic.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`options` | `Partial<SignerOptions>` |
`statusCb?` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:72](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L72)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *`AnyJson`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:77](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L77)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *`AnyJson`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:82](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L82)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:87](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L87)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:93](https://github.com/polkadot-js/api/blob/fcaa7a5/packages/types/src/types.ts#L93)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*