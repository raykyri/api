> # Interface: AuthorityWeight

## Hierarchy

  * [U64](../classes/_primitive_u64_.u64.md)

  * **AuthorityWeight**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_srml_grandpa_types_.authorityweight.md#constructor)

### Methods

* [toHex](_srml_grandpa_types_.authorityweight.md#tohex)
* [toRawType](_srml_grandpa_types_.authorityweight.md#torawtype)
* [toU8a](_srml_grandpa_types_.authorityweight.md#tou8a)

## Constructors

###  constructor

\+ **new AuthorityWeight**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[AuthorityWeight](_srml_grandpa_types_.authorityweight.md)*

*Inherited from [U64](../classes/_primitive_u64_.u64.md).[constructor](../classes/_primitive_u64_.u64.md#constructor)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[constructor](../classes/_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U64.ts:14](https://github.com/polkadot-js/api/blob/e1cf002/packages/types/src/primitive/U64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[AuthorityWeight](_srml_grandpa_types_.authorityweight.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toHex](../classes/_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/e1cf002/packages/types/src/codec/UInt.ts#L36)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toRawType](../classes/_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [codec/UInt.ts:48](https://github.com/polkadot-js/api/blob/e1cf002/packages/types/src/codec/UInt.ts#L48)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toU8a](../classes/_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:57](https://github.com/polkadot-js/api/blob/e1cf002/packages/types/src/codec/UInt.ts#L57)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*