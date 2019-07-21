> # Class: Balance

**`name`** Balance

**`description`** 
The Substrate Balance representation as a [U128](_primitive_u128_.u128.md).

## Hierarchy

  * [U128](_primitive_u128_.u128.md)

  * **Balance**

  * [BalanceOf](_primitive_balance_.balanceof.md)

  * [Amount](_type_amount_.amount.md)

  * [AssetOf](_type_assetof_.assetof.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_balance_.balance.md#constructor)

### Methods

* [toHex](_primitive_balance_.balance.md#tohex)
* [toRawType](_primitive_balance_.balance.md#torawtype)
* [toU8a](_primitive_balance_.balance.md#tou8a)

## Constructors

###  constructor

\+ **new Balance**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[Balance](_primitive_balance_.balance.md)*

*Inherited from [U128](_primitive_u128_.u128.md).[constructor](_primitive_u128_.u128.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U128.ts:14](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/U128.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[Balance](_primitive_balance_.balance.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/codec/UInt.ts#L36)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Defined in [primitive/Balance.ts:16](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/primitive/Balance.ts#L16)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:57](https://github.com/polkadot-js/api/blob/3d7a460/packages/types/src/codec/UInt.ts#L57)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*