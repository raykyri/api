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
* [hasOrigin](_submittableextrinsic_.submittableextrinsic.md#hasorigin)
* [hash](_submittableextrinsic_.submittableextrinsic.md#hash)
* [isEmpty](_submittableextrinsic_.submittableextrinsic.md#isempty)
* [isSigned](_submittableextrinsic_.submittableextrinsic.md#issigned)
* [meta](_submittableextrinsic_.submittableextrinsic.md#meta)
* [method](_submittableextrinsic_.submittableextrinsic.md#method)
* [signature](_submittableextrinsic_.submittableextrinsic.md#signature)

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:138](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L138)*

___

###  argsDef

• **argsDef**: *`ArgsDef`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:139](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L139)*

___

###  callIndex

• **callIndex**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:140](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L140)*

___

###  data

• **data**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:141](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L141)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:55](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L55)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:142](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L142)*

___

###  hash

• **hash**: *`IHash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:160](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L160)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:60](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L60)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:161](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L161)*

___

###  meta

• **meta**: *`FunctionMetadata`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:143](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L143)*

___

###  method

• **method**: *`Method`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:162](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L162)*

___

###  signature

• **signature**: *`IExtrinsicSignature`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:163](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L163)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: `Address` | `Uint8Array` | string, `signature`: `Uint8Array` | string, `nonce`: `AnyNumber`, `era`: `Uint8Array` | `IExtrinsicEra`): *`IExtrinsic`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:164](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | `Address` \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`nonce` | `AnyNumber` |
`era` | `Uint8Array` \| `IExtrinsicEra` |

**Returns:** *`IExtrinsic`*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:66](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L66)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  send

▸ **send**(): *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:90](https://github.com/polkadot-js/api/blob/37af934/packages/api/src/SubmittableExtrinsic.ts#L90)*

**Returns:** *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

▸ **send**(`statusCb`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:92](https://github.com/polkadot-js/api/blob/37af934/packages/api/src/SubmittableExtrinsic.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

___

###  sign

▸ **sign**(`account`: `IKeyringPair`, `_options`: `Partial<SignatureOptions>`): *this*

*Overrides void*

*Defined in [SubmittableExtrinsic.ts:94](https://github.com/polkadot-js/api/blob/37af934/packages/api/src/SubmittableExtrinsic.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` |
`_options` | `Partial<SignatureOptions>` |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `options?`: `Partial<SignerOptions>`): *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:96](https://github.com/polkadot-js/api/blob/37af934/packages/api/src/SubmittableExtrinsic.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`options?` | `Partial<SignerOptions>` |

**Returns:** *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `statusCb`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:98](https://github.com/polkadot-js/api/blob/37af934/packages/api/src/SubmittableExtrinsic.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`statusCb` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `options`: `Partial<SignerOptions>`, `statusCb?`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:100](https://github.com/polkadot-js/api/blob/37af934/packages/api/src/SubmittableExtrinsic.ts#L100)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:71](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L71)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:76](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L76)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *`AnyJson`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:81](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L81)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:86](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L86)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:92](https://github.com/polkadot-js/api/blob/37af934/packages/types/src/types.ts#L92)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*