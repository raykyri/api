// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import { AnyFunction, Callback, Codec, CodecArg, IExtrinsic, RegistryTypes, SignatureOptions } from '@polkadot/types/types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { DeriveCustom } from '@polkadot/api-derive';
import { Constants } from '@polkadot/api-metadata/consts/types';
import { ProviderInterface, ProviderInterfaceEmitted } from '@polkadot/rpc-provider/types';
import { u64 } from '@polkadot/types';
import { MethodFunction } from '@polkadot/types/primitive/Generic/Method';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';

import ApiBase from './Base';
import { ISubmittableResult, SubmittableExtrinsic } from './SubmittableExtrinsic';

// Prepend an element V onto the beginning of a tuple T.
// Cons<1, [2,3,4]> is [1,2,3,4]
type Cons<V, T extends any[]> = ((v: V, ...t: T) => void) extends ((...r: infer R) => void)
  ? R
  : never;

// Append an element V onto the end of a tuple T
// Push<[1,2,3],4> is [1,2,3,4]
// note that this DOES NOT PRESERVE optionality/readonly in tuples.
// So unfortunately Push<[1, 2?, 3?], 4> is [1,2|undefined,3|undefined,4]
type Push<T extends any[], V> = (
  (
    Cons<any, Required<T>> extends infer R
      ? { [K in keyof R]: K extends keyof T ? T[K] : V }
      : never
  ) extends infer P
    ? P extends any[] ? P : never
    : never
);

// Returns the inner type of an Observable
export type ObsInnerType<O extends Observable<any>> = O extends Observable<infer U> ? U : never;

export type UnsubscribePromise = Promise<() => void>;

// In the abstract `decorateMethod` in Base.ts, we can also pass in some meta-
// information. This describes it.
export interface DecorateMethodOptions {
  methodName?: string;
}

// Here are the return types of these parts of the api:
// - api.query.*.*: no exact typings
// - api.tx.*.*: SubmittableExtrinsic<ApiType>
// - api.derive.*.*: MethodResult<ApiType, F>
// - api.rpc.*.*: no exact typings (for now, FIXME: should be  MethodResult<ApiType, F>, like in derive)

// These are the types that don't lose type information (used for api.derive.*)
// Also use these for api.rpc.* https://github.com/polkadot-js/api/issues/1009
export type RxResult<F extends AnyFunction> = (...args: Parameters<F>) => Observable<ObsInnerType<ReturnType<F>>>;

// eslint-disable-next-line @typescript-eslint/prefer-interface
export type PromiseResult<F extends AnyFunction> = {
  (...args: Parameters<F>): Promise<ObsInnerType<ReturnType<F>>>;
  (...args: Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>): UnsubscribePromise;
};

// FIXME The day TS has higher-kinded types, we can remove this hardcoded stuff
export type MethodResult<ApiType, F extends AnyFunction> = ApiType extends 'rxjs'
  ? RxResult<F>
  : PromiseResult<F>;

type DecoratedRpcMethod<ApiType> = ApiType extends 'rxjs'
  ? {
    (arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): Observable<Codec>;
    <T extends Codec>(arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): Observable<T>;
  }
  : {
    // These signatures are allowed and exposed here (bit or a stoopid way, but checked
    // RPCs and we have 3 max args, with subs max one arg... YMMV) -
    //  (arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): Promise<Codec>;
    //  (arg1: CodecArg, callback: Callback<Codec>): UnsubscribePromise;
    //  (callback: Callback<Codec>): UnsubscribePromise;
    (arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): Promise<Codec>;
    <T extends Codec>(arg1?: CodecArg, arg2?: CodecArg, arg3?: CodecArg): Promise<T>;
    <T extends Codec>(callback: Callback<T>): UnsubscribePromise;
    <T extends Codec>(arg: CodecArg, callback: Callback<T>): UnsubscribePromise;
  };

// FIXME https://github.com/polkadot-js/api/issues/1009
export interface DecoratedRpcSection<ApiType> {
  [index: string]: DecoratedRpcMethod<ApiType>;
}

// FIXME https://github.com/polkadot-js/api/issues/1009
export interface DecoratedRpc<ApiType> {
  author: DecoratedRpcSection<ApiType>;
  chain: DecoratedRpcSection<ApiType>;
  state: DecoratedRpcSection<ApiType>;
  system: DecoratedRpcSection<ApiType>;
}

export interface StorageEntryObservable {
  (arg1?: CodecArg, arg2?: CodecArg): Observable<Codec>;
  <T extends Codec>(arg1?: CodecArg, arg2?: CodecArg): Observable<T>;
  at: (hash: Hash | Uint8Array | string, arg1?: CodecArg, arg2?: CodecArg) => Observable<Codec>;
  creator: StorageEntry;
  hash: (arg1?: CodecArg, arg2?: CodecArg) => Observable<Hash>;
  key: (arg1?: CodecArg, arg2?: CodecArg) => string;
  multi: <T extends Codec>(args: (CodecArg[] | CodecArg)[]) => Observable<T[]>;
  size: (arg1?: CodecArg, arg2?: CodecArg) => Observable<u64>;
}

export interface StorageEntryPromiseOverloads {
  (arg1?: CodecArg, arg2?: CodecArg): Promise<Codec>;
  <T extends Codec>(arg1?: CodecArg, arg2?: CodecArg): Promise<T>;
  <T extends Codec>(callback: Callback<T>): UnsubscribePromise;
  <T extends Codec>(arg: CodecArg, callback: Callback<T>): UnsubscribePromise;
  <T extends Codec>(arg1: CodecArg, arg2: CodecArg, callback: Callback<T>): UnsubscribePromise;
}

export interface StorageEntryPromiseMulti {
  <T extends Codec>(args: (CodecArg[] | CodecArg)[]): Promise<T[]>;
  <T extends Codec>(args: (CodecArg[] | CodecArg)[], callback: Callback<T[]>): UnsubscribePromise;
}

export interface StorageEntryPromise extends StorageEntryPromiseOverloads {
  at: (hash: Hash | Uint8Array | string, arg1?: CodecArg, arg2?: CodecArg) => Promise<Codec>;
  creator: StorageEntry;
  hash: (arg1?: CodecArg, arg2?: CodecArg) => Promise<Hash>;
  key: (arg1?: CodecArg, arg2?: CodecArg) => string;
  multi: StorageEntryPromiseMulti;
  size: (arg1?: CodecArg, arg2?: CodecArg) => Promise<u64>;
}

export type QueryableStorageEntry<ApiType> =
  ApiType extends 'rxjs'
    ? StorageEntryObservable
    : StorageEntryPromise;

export interface QueryableModuleStorage<ApiType> {
  [index: string]: QueryableStorageEntry<ApiType>;
}

export type QueryableStorageMultiArg<ApiType> =
  QueryableStorageEntry<ApiType> |
  [QueryableStorageEntry<ApiType>, ...CodecArg[]];

export type QueryableStorageMultiArgs<ApiType> = QueryableStorageMultiArg<ApiType>[];

export interface QueryableStorageMultiBase<ApiType> {
  <T extends Codec>(calls: QueryableStorageMultiArgs<ApiType>): Observable<T[]>;
}

export interface QueryableStorageMultiPromise<ApiType> {
  <T extends Codec>(calls: QueryableStorageMultiArgs<ApiType>, callback: Callback<T[]>): UnsubscribePromise;
}

export type QueryableStorageMulti<ApiType> =
  ApiType extends 'rxjs'
    ? QueryableStorageMultiBase<ApiType>
    : QueryableStorageMultiPromise<ApiType>;

export interface QueryableStorage<ApiType> {
  [index: string]: QueryableModuleStorage<ApiType>;
}

export interface SubmittableExtrinsicFunction<ApiType> extends MethodFunction {
  (...params: CodecArg[]): SubmittableExtrinsic<ApiType>;
}

export interface SubmittableModuleExtrinsics<ApiType> {
  [index: string]: SubmittableExtrinsicFunction<ApiType>;
}

export interface SubmittableExtrinsics<ApiType> {
  (extrinsic: Uint8Array | string): SubmittableExtrinsic<ApiType>;
  [index: string]: SubmittableModuleExtrinsics<ApiType>;
}

export interface ApiOptions {
  /**
   * @description Add custom derives to be injected
   */
  derives?: DeriveCustom;
  /**
   * @description prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string
   * if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain
   */
  metadata?: Record<string, string>;
  /**
   * @description Transport Provider from rpc-provider. If not specified, it will default to
   * connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`
   */
  provider?: ProviderInterface;
  /**
   * @description An external signer which will be used to sign extrinsic when account passed in is not KeyringPair
   */
  signer?: Signer;
  /**
   * @description The source object to use for runtime information (only used when cloning)
   */
  source?: ApiBase<any>;
  /**
   * @description Additional types used by runtime modules. This is nessusary if the runtime modules
   * uses types not available in the base Substrate runtime.
   */
  types?: RegistryTypes;
}

// A smaller interface of ApiRx, used in derive and in SubmittableExtrinsic
export interface ApiInterfaceRx {
  consts: Constants;
  extrinsicType: number;
  genesisHash: Hash;
  hasSubscriptions: boolean;
  runtimeMetadata: Metadata;
  runtimeVersion: RuntimeVersion;
  query: QueryableStorage<'rxjs'>;
  queryMulti: QueryableStorageMulti<'rxjs'>;
  rpc: DecoratedRpc<'rxjs'>;
  tx: SubmittableExtrinsics<'rxjs'>;
  signer?: Signer;
}

export type ApiInterfaceEvents = ProviderInterfaceEmitted | 'ready';

export type ApiTypes = 'promise' | 'rxjs';

export interface SignerOptions extends SignatureOptions {
  blockNumber: BN;
  genesisHash: Hash;
}

export interface SignerPayload {
  /**
   * @description The ss-58 encoded address
   */
  address: string;

  /**
   * @description The checkpoint hash of the block, in hex
   */
  blockHash: string;

  /**
   * @description The checkpoint block number, in hex
   */
  blockNumber: string;

  /**
   * @description The era for this transaction, in hex
   */
  era: string;

  /**
   * @description The genesis hash of the chain, in hex
   */
  genesisHash: string;

  /**
   * @description The encoded method (with arguments) in hex
   */
  method: string;

  /**
   * @description The nonce for this transaction, in hex
   */
  nonce: string;

  /**
   * @description The tip for this transaction, in hex
   */
  tip: string;

  /**
   * @description The version of the extrinsic we are dealing with
   */
  version: number;
}

export interface SignerResult {
  /**
   * @description The id for this request
   */
  id: number;

  /**
   * @description The resulting signature in hex
   */
  signature: string;
}

export interface Signer {
  /**
   * @deprecated Implement and use signPayload instead
   * @description Signs an extrinsic, returning an id (>0) that can be used to retrieve updates
   */
  sign?: (extrinsic: IExtrinsic, address: string, options: SignerOptions) => Promise<number>;

  /**
   * @description signs an extrinsic payload from a serialized form
   */
  signPayload (payload: SignerPayload): Promise<SignerResult>;

  /**
   * @description Receives an update for the extrinsic signed by a `signer.sign`
   */
  update?: (id: number, status: Hash | ISubmittableResult) => void;
}
