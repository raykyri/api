> # External module: "SubmittableExtrinsic"

### Index

#### Classes

* [SubmittableResult](../classes/_submittableextrinsic_.submittableresult.md)

#### Interfaces

* [ISubmittableResult](../interfaces/_submittableextrinsic_.isubmittableresult.md)
* [SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)

#### Type aliases

* [SumbitableResultResult](_submittableextrinsic_.md#sumbitableresultresult)
* [SumbitableResultSubscription](_submittableextrinsic_.md#sumbitableresultsubscription)

#### Functions

* [createSubmittableExtrinsic](_submittableextrinsic_.md#createsubmittableextrinsic)

## Type aliases

###  SumbitableResultResult

Ƭ **SumbitableResultResult**: *`SumbitableResultResult<ApiType>`*

*Defined in [SubmittableExtrinsic.ts:28](https://github.com/polkadot-js/api/blob/28cf21d/packages/api/src/SubmittableExtrinsic.ts#L28)*

___

###  SumbitableResultSubscription

Ƭ **SumbitableResultSubscription**: *`SumbitableResultSubscription<ApiType>`*

*Defined in [SubmittableExtrinsic.ts:33](https://github.com/polkadot-js/api/blob/28cf21d/packages/api/src/SubmittableExtrinsic.ts#L33)*

## Functions

###  createSubmittableExtrinsic

▸ **createSubmittableExtrinsic**<**ApiType**>(`type`: [ApiTypes](_types_.md#apitypes), `api`: [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md), `decorateMethod`: `decorateMethod`, `extrinsic`: `Method` | `Uint8Array` | string, `trackingCb?`: `Callback<ISubmittableResult>`): *[SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:103](https://github.com/polkadot-js/api/blob/28cf21d/packages/api/src/SubmittableExtrinsic.ts#L103)*

**Type parameters:**

▪ **ApiType**

**Parameters:**

Name | Type |
------ | ------ |
`type` | [ApiTypes](_types_.md#apitypes) |
`api` | [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md) |
`decorateMethod` | `decorateMethod` |
`extrinsic` | `Method` \| `Uint8Array` \| string |
`trackingCb?` | `Callback<ISubmittableResult>` |

**Returns:** *[SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)‹*`ApiType`*›*