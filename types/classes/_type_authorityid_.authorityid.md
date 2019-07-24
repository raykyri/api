> # Class: AuthorityId

## Hierarchy

  * [AccountId](_primitive_accountid_.accountid.md)

  * **AuthorityId**

  * [SessionKey](../interfaces/_srml_session_types_.sessionkey.md)

  * [SessionKey](_type_sessionkey_.sessionkey.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_type_authorityid_.authorityid.md#constructor)

### Accessors

* [encodedLength](_type_authorityid_.authorityid.md#encodedlength)
* [isEmpty](_type_authorityid_.authorityid.md#isempty)
* [length](_type_authorityid_.authorityid.md#length)

### Methods

* [bitLength](_type_authorityid_.authorityid.md#bitlength)
* [eq](_type_authorityid_.authorityid.md#eq)
* [subarray](_type_authorityid_.authorityid.md#subarray)
* [toHex](_type_authorityid_.authorityid.md#tohex)
* [toJSON](_type_authorityid_.authorityid.md#tojson)
* [toRawType](_type_authorityid_.authorityid.md#torawtype)
* [toString](_type_authorityid_.authorityid.md#tostring)
* [toU8a](_type_authorityid_.authorityid.md#tou8a)
* [encode](_type_authorityid_.authorityid.md#static-encode)
* [with](_type_authorityid_.authorityid.md#static-with)

## Constructors

###  constructor

\+ **new AuthorityId**(`value`: [AnyU8a](../modules/_types_.md#anyu8a)): *[AuthorityId](_type_authorityid_.authorityid.md)*

*Inherited from [AccountId](_primitive_accountid_.accountid.md).[constructor](_primitive_accountid_.accountid.md#constructor)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [primitive/AccountId.ts:19](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/AccountId.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [AnyU8a](../modules/_types_.md#anyu8a) |  new Uint8Array() |

**Returns:** *[AuthorityId](_type_authorityid_.authorityid.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:36](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L36)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L43)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:50](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L50)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[bitLength](_codec_u8afixed_.u8afixed.md#bitlength)*

*Defined in [codec/U8aFixed.ts:60](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8aFixed.ts#L60)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AccountId](_primitive_accountid_.accountid.md).[eq](_primitive_accountid_.accountid.md#eq)*

*Overrides [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [primitive/AccountId.ts:46](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/AccountId.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *`Uint8Array`*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L73)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined \| number | The position to end at  |

**Returns:** *`Uint8Array`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:80](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L80)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AccountId](_primitive_accountid_.accountid.md).[toJSON](_primitive_accountid_.accountid.md#tojson)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [primitive/AccountId.ts:53](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/AccountId.ts#L53)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AccountId](_primitive_accountid_.accountid.md).[toRawType](_primitive_accountid_.accountid.md#torawtype)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[toRawType](_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [primitive/AccountId.ts:67](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/AccountId.ts#L67)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AccountId](_primitive_accountid_.accountid.md).[toString](_primitive_accountid_.accountid.md#tostring)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Defined in [primitive/AccountId.ts:60](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/AccountId.ts#L60)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:110](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8a.ts#L110)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` encode

▸ **encode**(`value`: `Uint8Array`): *string*

*Inherited from [AccountId](_primitive_accountid_.accountid.md).[encode](_primitive_accountid_.accountid.md#static-encode)*

*Defined in [primitive/AccountId.ts:27](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/primitive/AccountId.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `Uint8Array` |

**Returns:** *string*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[Constructor](../interfaces/_types_.constructor.md)‹*[U8aFixed](_codec_u8afixed_.u8afixed.md)*›*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[with](_codec_u8afixed_.u8afixed.md#static-with)*

*Defined in [codec/U8aFixed.ts:49](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/U8aFixed.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[U8aFixed](_codec_u8afixed_.u8afixed.md)*›*