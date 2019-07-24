> # Class: Vote

**`name`** Vote

**`description`** 
A number of lock periods, plus a vote, one way or the other.

## Hierarchy

  * [U8a](_codec_u8a_.u8a.md)

  * **Vote**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_type_vote_.vote.md#constructor)

### Accessors

* [conviction](_type_vote_.vote.md#conviction)
* [encodedLength](_type_vote_.vote.md#encodedlength)
* [isAye](_type_vote_.vote.md#isaye)
* [isEmpty](_type_vote_.vote.md#isempty)
* [isNay](_type_vote_.vote.md#isnay)
* [length](_type_vote_.vote.md#length)

### Methods

* [eq](_type_vote_.vote.md#eq)
* [subarray](_type_vote_.vote.md#subarray)
* [toHex](_type_vote_.vote.md#tohex)
* [toJSON](_type_vote_.vote.md#tojson)
* [toRawType](_type_vote_.vote.md#torawtype)
* [toString](_type_vote_.vote.md#tostring)
* [toU8a](_type_vote_.vote.md#tou8a)

## Constructors

###  constructor

\+ **new Vote**(`value?`: any): *[Vote](_type_vote_.vote.md)*

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [type/Vote.ts:19](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/type/Vote.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[Vote](_type_vote_.vote.md)*

## Accessors

###  conviction

• **get conviction**(): *[Conviction](_type_conviction_.conviction.md)*

*Defined in [type/Vote.ts:64](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/type/Vote.ts#L64)*

**`description`** returns a V2 conviction

**Returns:** *[Conviction](_type_conviction_.conviction.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:36](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L36)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isAye

• **get isAye**(): *boolean*

*Defined in [type/Vote.ts:71](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/type/Vote.ts#L71)*

**`description`** true if the wrapped value is a positive vote

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L43)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  isNay

• **get isNay**(): *boolean*

*Defined in [type/Vote.ts:78](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/type/Vote.ts#L78)*

**`description`** true if the wrapped value is a negative vote

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:50](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L50)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L58)*

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

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L73)*

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

*Defined in [codec/U8a.ts:80](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L80)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:87](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L87)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toRawType](_codec_u8a_.u8a.md#torawtype)*

*Defined in [codec/U8a.ts:94](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L94)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:101](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L101)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:110](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/U8a.ts#L110)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*