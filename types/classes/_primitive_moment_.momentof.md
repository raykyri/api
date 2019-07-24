> # Class: MomentOf

**`name`** MomentOf

**`description`** 
The Substrate MomentOf representation as a [Moment](_primitive_moment_.moment.md).

## Hierarchy

  * [Moment](_primitive_moment_.moment.md)

  * **MomentOf**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_moment_.momentof.md#constructor)

### Accessors

* [encodedLength](_primitive_moment_.momentof.md#encodedlength)
* [isEmpty](_primitive_moment_.momentof.md#isempty)

### Methods

* [bitLength](_primitive_moment_.momentof.md#bitlength)
* [eq](_primitive_moment_.momentof.md#eq)
* [toBn](_primitive_moment_.momentof.md#tobn)
* [toHex](_primitive_moment_.momentof.md#tohex)
* [toJSON](_primitive_moment_.momentof.md#tojson)
* [toNumber](_primitive_moment_.momentof.md#tonumber)
* [toRawType](_primitive_moment_.momentof.md#torawtype)
* [toString](_primitive_moment_.momentof.md#tostring)
* [toU8a](_primitive_moment_.momentof.md#tou8a)
* [decodeMoment](_primitive_moment_.momentof.md#static-decodemoment)

## Constructors

###  constructor

\+ **new MomentOf**(`value`: [Moment](_primitive_moment_.moment.md) | `Date` | [AnyNumber](../modules/_types_.md#anynumber)): *[MomentOf](_primitive_moment_.momentof.md)*

*Inherited from [Moment](_primitive_moment_.moment.md).[constructor](_primitive_moment_.moment.md#constructor)*

*Defined in [primitive/Moment.ts:24](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [Moment](_primitive_moment_.moment.md) \| `Date` \| [AnyNumber](../modules/_types_.md#anynumber) | 0 |

**Returns:** *[MomentOf](_primitive_moment_.momentof.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Moment](_primitive_moment_.moment.md).[encodedLength](_primitive_moment_.moment.md#encodedlength)*

*Defined in [primitive/Moment.ts:51](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L51)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Moment](_primitive_moment_.moment.md).[isEmpty](_primitive_moment_.moment.md#isempty)*

*Defined in [primitive/Moment.ts:58](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L58)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

*Inherited from [Moment](_primitive_moment_.moment.md).[bitLength](_primitive_moment_.moment.md#bitlength)*

*Defined in [primitive/Moment.ts:72](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L72)*

**`description`** Returns the number of bits in the value

**Returns:** *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Moment](_primitive_moment_.moment.md).[eq](_primitive_moment_.moment.md#eq)*

*Defined in [primitive/Moment.ts:65](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L65)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *`BN`*

*Inherited from [Moment](_primitive_moment_.moment.md).[toBn](_primitive_moment_.moment.md#tobn)*

*Defined in [primitive/Moment.ts:79](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L79)*

**`description`** Returns the BN representation of the timestamp

**Returns:** *`BN`*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [Moment](_primitive_moment_.moment.md).[toHex](_primitive_moment_.moment.md#tohex)*

*Defined in [primitive/Moment.ts:86](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L86)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Moment](_primitive_moment_.moment.md).[toJSON](_primitive_moment_.moment.md#tojson)*

*Overrides void*

*Defined in [primitive/Moment.ts:97](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L97)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Moment](_primitive_moment_.moment.md).[toNumber](_primitive_moment_.moment.md#tonumber)*

*Defined in [primitive/Moment.ts:106](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L106)*

**`description`** Returns the number representation for the timestamp

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Moment](_primitive_moment_.moment.md).[toRawType](_primitive_moment_.moment.md#torawtype)*

*Defined in [primitive/Moment.ts:113](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L113)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Moment](_primitive_moment_.moment.md).[toString](_primitive_moment_.moment.md#tostring)*

*Overrides void*

*Defined in [primitive/Moment.ts:120](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L120)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Moment](_primitive_moment_.moment.md).[toU8a](_primitive_moment_.moment.md#tou8a)*

*Defined in [primitive/Moment.ts:130](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L130)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeMoment

▸ **decodeMoment**(`value`: [Moment](_primitive_moment_.moment.md) | `Date` | [AnyNumber](../modules/_types_.md#anynumber)): *`Date`*

*Inherited from [Moment](_primitive_moment_.moment.md).[decodeMoment](_primitive_moment_.moment.md#static-decodemoment)*

*Defined in [primitive/Moment.ts:34](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/Moment.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Moment](_primitive_moment_.moment.md) \| `Date` \| [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *`Date`*