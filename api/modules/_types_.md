> # External module: "types"

## Index

### Interfaces

* [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md)
* [ApiOptions](../interfaces/_types_.apioptions.md)
* [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)
* [DecoratedRpc](../interfaces/_types_.decoratedrpc.md)
* [DecoratedRpcSection](../interfaces/_types_.decoratedrpcsection.md)
* [QueryableModuleStorage](../interfaces/_types_.queryablemodulestorage.md)
* [QueryableStorage](../interfaces/_types_.queryablestorage.md)
* [QueryableStorageMultiBase](../interfaces/_types_.queryablestoragemultibase.md)
* [QueryableStorageMultiPromise](../interfaces/_types_.queryablestoragemultipromise.md)
* [Signer](../interfaces/_types_.signer.md)
* [SignerOptions](../interfaces/_types_.signeroptions.md)
* [SignerPayload](../interfaces/_types_.signerpayload.md)
* [SignerResult](../interfaces/_types_.signerresult.md)
* [StorageEntryObservable](../interfaces/_types_.storageentryobservable.md)
* [StorageEntryPromise](../interfaces/_types_.storageentrypromise.md)
* [StorageEntryPromiseMulti](../interfaces/_types_.storageentrypromisemulti.md)
* [StorageEntryPromiseOverloads](../interfaces/_types_.storageentrypromiseoverloads.md)
* [SubmittableExtrinsicFunction](../interfaces/_types_.submittableextrinsicfunction.md)
* [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)
* [SubmittableModuleExtrinsics](../interfaces/_types_.submittablemoduleextrinsics.md)

### Type aliases

* [ApiInterfaceEvents](_types_.md#apiinterfaceevents)
* [ApiTypes](_types_.md#apitypes)
* [MethodResult](_types_.md#methodresult)
* [ObsInnerType](_types_.md#obsinnertype)
* [PromiseResult](_types_.md#promiseresult)
* [QueryableStorageEntry](_types_.md#queryablestorageentry)
* [QueryableStorageMulti](_types_.md#queryablestoragemulti)
* [QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)
* [QueryableStorageMultiArgs](_types_.md#queryablestoragemultiargs)
* [RxResult](_types_.md#rxresult)
* [UnsubscribePromise](_types_.md#unsubscribepromise)

## Type aliases

###  ApiInterfaceEvents

Ƭ **ApiInterfaceEvents**: *`ProviderInterfaceEmitted` | "ready"*

*Defined in [types.ts:223](https://github.com/polkadot-js/api/blob/e1cf002/packages/api/src/types.ts#L223)*

___

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [types.ts:225](https://github.com/polkadot-js/api/blob/e1cf002/packages/api/src/types.ts#L225)*

___

###  MethodResult

Ƭ **MethodResult**: *`MethodResult<ApiType, F>`*

*Defined in [types.ts:66](https://github.com/polkadot-js/api/blob/e1cf002/packages/api/src/types.ts#L66)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *`ObsInnerType<O>`*

*Defined in [types.ts:39](https://github.com/polkadot-js/api/blob/e1cf002/packages/api/src/types.ts#L39)*

___

###  PromiseResult

Ƭ **PromiseResult**: *function*

*Defined in [types.ts:60](https://github.com/polkadot-js/api/blob/e1cf002/packages/api/src/types.ts#L60)*

#### Type declaration:

▸ (...`args`: `Parameters<F>`): *`Promise<ObsInnerType<ReturnType<F>>>`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

▸ (...`args`: `Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>`): *[UnsubscribePromise](_types_.md#unsubscribepromise)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>` |

___

###  QueryableStorageEntry

Ƭ **QueryableStorageEntry**: *`QueryableStorageEntry<ApiType>`*

*Defined in [types.ts:133](https://github.com/polkadot-js/api/blob/e1cf002/packages/api/src/types.ts#L133)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *`QueryableStorageMulti<ApiType>`*

*Defined in [types.ts:156](https://github.com/polkadot-js/api/blob/e1cf002/packages/api/src/types.ts#L156)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageEntry](_types_.md#queryablestorageentry)‹*`ApiType`*› | [[QueryableStorageEntry](_types_.md#queryablestorageentry)‹*`ApiType`*›, `Array`]*

*Defined in [types.ts:142](https://github.com/polkadot-js/api/blob/e1cf002/packages/api/src/types.ts#L142)*

___

###  QueryableStorageMultiArgs

Ƭ **QueryableStorageMultiArgs**: *[QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)‹*`ApiType`*›[]*

*Defined in [types.ts:146](https://github.com/polkadot-js/api/blob/e1cf002/packages/api/src/types.ts#L146)*

___

###  RxResult

Ƭ **RxResult**: *function*

*Defined in [types.ts:57](https://github.com/polkadot-js/api/blob/e1cf002/packages/api/src/types.ts#L57)*

#### Type declaration:

▸ (...`args`: `Parameters<F>`): *`Observable<ObsInnerType<ReturnType<F>>>`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *`Promise<function>`*

*Defined in [types.ts:41](https://github.com/polkadot-js/api/blob/e1cf002/packages/api/src/types.ts#L41)*