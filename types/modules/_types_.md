> # External module: "types"

## Index

### Interfaces

* [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)
* [AnyJsonObject](../interfaces/_types_.anyjsonobject.md)
* [ArgsDef](../interfaces/_types_.argsdef.md)
* [Codec](../interfaces/_types_.codec.md)
* [Constructor](../interfaces/_types_.constructor.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)
* [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)
* [IHash](../interfaces/_types_.ihash.md)
* [IKeyringPair](../interfaces/_types_.ikeyringpair.md)
* [IMethod](../interfaces/_types_.imethod.md)
* [RuntimeVersionInterface](../interfaces/_types_.runtimeversioninterface.md)
* [SignatureOptions](../interfaces/_types_.signatureoptions.md)

### Type aliases

* [AnyFunction](_types_.md#anyfunction)
* [AnyJson](_types_.md#anyjson)
* [AnyNumber](_types_.md#anynumber)
* [AnyString](_types_.md#anystring)
* [AnyU8a](_types_.md#anyu8a)
* [Callback](_types_.md#callback)
* [CodecArg](_types_.md#codecarg)
* [CodecTo](_types_.md#codecto)
* [ConstructorDef](_types_.md#constructordef)
* [RegistryTypes](_types_.md#registrytypes)
* [TypeDef](_types_.md#typedef)

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *function*

*Defined in [types.ts:30](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/types.ts#L30)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | [AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Defined in [types.ts:42](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/types.ts#L42)*

___

###  AnyNumber

Ƭ **AnyNumber**: *`BN` | `Uint8Array` | number | string*

*Defined in [types.ts:32](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/types.ts#L32)*

___

###  AnyString

Ƭ **AnyString**: *string | string*

*Defined in [types.ts:34](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/types.ts#L34)*

___

###  AnyU8a

Ƭ **AnyU8a**: *`Uint8Array` | number[] | string*

*Defined in [types.ts:36](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/types.ts#L36)*

___

###  Callback

Ƭ **Callback**: *function*

*Defined in [types.ts:23](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/types.ts#L23)*

#### Type declaration:

▸ (`result`: `T`): *void | `Promise<void>`*

**Parameters:**

Name | Type |
------ | ------ |
`result` | `T` |

___

###  CodecArg

Ƭ **CodecArg**: *[Codec](../interfaces/_types_.codec.md) | `BN` | boolean | string | `Uint8Array` | boolean | number | string | undefined | `CodecArgArray` | `CodecArgObject`*

*Defined in [types.ts:21](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/types.ts#L21)*

___

###  CodecTo

Ƭ **CodecTo**: *"toHex" | "toJSON" | "toString" | "toU8a"*

*Defined in [types.ts:95](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/types.ts#L95)*

___

###  ConstructorDef

Ƭ **ConstructorDef**: *`Record<string, Constructor<T>>`*

*Defined in [types.ts:104](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/types.ts#L104)*

___

###  RegistryTypes

Ƭ **RegistryTypes**: *`Record<string, Constructor | string | Record<string, string> | object>`*

*Defined in [types.ts:108](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/types.ts#L108)*

___

###  TypeDef

Ƭ **TypeDef**: *`Record<string, Codec>`*

*Defined in [types.ts:106](https://github.com/polkadot-js/api/blob/ab74db5/packages/types/src/types.ts#L106)*