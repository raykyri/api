> # Class: BalanceOf

**`name`** BalanceOf

**`description`** 
The Substrate BalanceOf representation as a [Balance](_primitive_balance_.balance.md).

## Hierarchy

  * [Balance](_primitive_balance_.balance.md)

  * **BalanceOf**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_balance_.balanceof.md#constructor)

### Methods

* [toHex](_primitive_balance_.balanceof.md#tohex)
* [toRawType](_primitive_balance_.balanceof.md#torawtype)
* [toU8a](_primitive_balance_.balanceof.md#tou8a)

## Constructors

###  constructor

\+ **new BalanceOf**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[BalanceOf](_primitive_balance_.balanceof.md)*

*Inherited from [U128](_primitive_u128_.u128.md).[constructor](_primitive_u128_.u128.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U128.ts:14](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/U128.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[BalanceOf](_primitive_balance_.balanceof.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/UInt.ts#L36)*

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

*Inherited from [Balance](_primitive_balance_.balance.md).[toRawType](_primitive_balance_.balance.md#torawtype)*

*Overrides [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Defined in [primitive/Balance.ts:16](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Balance.ts#L16)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:57](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/UInt.ts#L57)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*