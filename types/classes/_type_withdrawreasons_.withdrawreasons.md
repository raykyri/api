> # Class: WithdrawReasons

**`name`** WithdrawReasons

**`description`** 
The Substrate WithdrawReasons for staking

## Hierarchy

  * [CodecSet](_codec_set_.codecset.md)

  * **WithdrawReasons**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_type_withdrawreasons_.withdrawreasons.md#constructor)

### Properties

* [__@toStringTag](_type_withdrawreasons_.withdrawreasons.md#__@tostringtag)
* [size](_type_withdrawreasons_.withdrawreasons.md#size)

### Accessors

* [encodedLength](_type_withdrawreasons_.withdrawreasons.md#encodedlength)
* [isEmpty](_type_withdrawreasons_.withdrawreasons.md#isempty)
* [isFee](_type_withdrawreasons_.withdrawreasons.md#isfee)
* [isReserve](_type_withdrawreasons_.withdrawreasons.md#isreserve)
* [isTransactionPayment](_type_withdrawreasons_.withdrawreasons.md#istransactionpayment)
* [isTransfer](_type_withdrawreasons_.withdrawreasons.md#istransfer)
* [strings](_type_withdrawreasons_.withdrawreasons.md#strings)
* [valueEncoded](_type_withdrawreasons_.withdrawreasons.md#valueencoded)

### Methods

* [__@iterator](_type_withdrawreasons_.withdrawreasons.md#__@iterator)
* [add](_type_withdrawreasons_.withdrawreasons.md#add)
* [clear](_type_withdrawreasons_.withdrawreasons.md#clear)
* [delete](_type_withdrawreasons_.withdrawreasons.md#delete)
* [entries](_type_withdrawreasons_.withdrawreasons.md#entries)
* [eq](_type_withdrawreasons_.withdrawreasons.md#eq)
* [forEach](_type_withdrawreasons_.withdrawreasons.md#foreach)
* [has](_type_withdrawreasons_.withdrawreasons.md#has)
* [keys](_type_withdrawreasons_.withdrawreasons.md#keys)
* [toHex](_type_withdrawreasons_.withdrawreasons.md#tohex)
* [toJSON](_type_withdrawreasons_.withdrawreasons.md#tojson)
* [toNumber](_type_withdrawreasons_.withdrawreasons.md#tonumber)
* [toRawType](_type_withdrawreasons_.withdrawreasons.md#torawtype)
* [toString](_type_withdrawreasons_.withdrawreasons.md#tostring)
* [toU8a](_type_withdrawreasons_.withdrawreasons.md#tou8a)
* [values](_type_withdrawreasons_.withdrawreasons.md#values)
* [decodeSet](_type_withdrawreasons_.withdrawreasons.md#static-decodeset)
* [encodeSet](_type_withdrawreasons_.withdrawreasons.md#static-encodeset)

## Constructors

###  constructor

\+ **new WithdrawReasons**(`value`: any): *[WithdrawReasons](_type_withdrawreasons_.withdrawreasons.md)*

*Overrides [CodecSet](_codec_set_.codecset.md).[constructor](_codec_set_.codecset.md#constructor)*

*Defined in [type/WithdrawReasons.ts:12](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/type/WithdrawReasons.ts#L12)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | any |  [] |

**Returns:** *[WithdrawReasons](_type_withdrawreasons_.withdrawreasons.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:64

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [CodecSet](_codec_set_.codecset.md).[encodedLength](_codec_set_.codecset.md#encodedlength)*

*Defined in [codec/Set.ts:71](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L71)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [CodecSet](_codec_set_.codecset.md).[isEmpty](_codec_set_.codecset.md#isempty)*

*Defined in [codec/Set.ts:78](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L78)*

**`description`** true is the Set contains no values

**Returns:** *boolean*

___

###  isFee

• **get isFee**(): *boolean*

*Defined in [type/WithdrawReasons.ts:46](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/type/WithdrawReasons.ts#L46)*

**`description`** /// In order to pay some other (higher-level) fees.

**Returns:** *boolean*

___

###  isReserve

• **get isReserve**(): *boolean*

*Defined in [type/WithdrawReasons.ts:25](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/type/WithdrawReasons.ts#L25)*

**`description`** In order to reserve some funds for a later return or repatriation

**Returns:** *boolean*

___

###  isTransactionPayment

• **get isTransactionPayment**(): *boolean*

*Defined in [type/WithdrawReasons.ts:32](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/type/WithdrawReasons.ts#L32)*

**`description`** In order to pay for (system) transaction costs

**Returns:** *boolean*

___

###  isTransfer

• **get isTransfer**(): *boolean*

*Defined in [type/WithdrawReasons.ts:39](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/type/WithdrawReasons.ts#L39)*

**`description`** In order to transfer ownership

**Returns:** *boolean*

___

###  strings

• **get strings**(): *string[]*

*Inherited from [CodecSet](_codec_set_.codecset.md).[strings](_codec_set_.codecset.md#strings)*

*Defined in [codec/Set.ts:85](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L85)*

**`description`** The actual set values as a string[]

**Returns:** *string[]*

___

###  valueEncoded

• **get valueEncoded**(): *number*

*Inherited from [CodecSet](_codec_set_.codecset.md).[valueEncoded](_codec_set_.codecset.md#valueencoded)*

*Defined in [codec/Set.ts:92](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L92)*

**`description`** The encoded value for the set members

**Returns:** *number*

## Methods

###  __@iterator

▸ **__@iterator**(): *`IterableIterator<string>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:163

Iterates over values in the set.

**Returns:** *`IterableIterator<string>`*

___

###  add

▸ **add**(`key`: string): *this*

*Inherited from [CodecSet](_codec_set_.codecset.md).[add](_codec_set_.codecset.md#add)*

*Overrides void*

*Defined in [codec/Set.ts:99](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L99)*

**`description`** adds a value to the Set (extended to allow for validity checking)

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: string): *boolean*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *`IterableIterator<[string, string]>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:167

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *`IterableIterator<[string, string]>`*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[eq](_codec_set_.codecset.md#eq)*

*Defined in [codec/Set.ts:112](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L112)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:62

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: string, `value2`: string, `set`: `Set<string>`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`value2` | string |
`set` | `Set<string>` |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: string): *boolean*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *`IterableIterator<string>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:171

Despite its name, returns an iterable of the values in the set,

**Returns:** *`IterableIterator<string>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toHex](_codec_set_.codecset.md#tohex)*

*Defined in [codec/Set.ts:128](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L128)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string[]*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toJSON](_codec_set_.codecset.md#tojson)*

*Defined in [codec/Set.ts:135](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L135)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string[]*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toNumber](_codec_set_.codecset.md#tonumber)*

*Defined in [codec/Set.ts:142](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L142)*

**`description`** The encoded value for the set members

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toRawType](_codec_set_.codecset.md#torawtype)*

*Defined in [codec/Set.ts:149](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L149)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toString](_codec_set_.codecset.md#tostring)*

*Defined in [codec/Set.ts:157](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L157)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toU8a](_codec_set_.codecset.md#tou8a)*

*Defined in [codec/Set.ts:166](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L166)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

###  values

▸ **values**(): *`IterableIterator<string>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:176

Returns an iterable of values in the set.

**Returns:** *`IterableIterator<string>`*

___

### `Static` decodeSet

▸ **decodeSet**(`setValues`: `SetValues`, `value`: string[] | `Set<string>` | `Uint8Array` | number): *string[]*

*Inherited from [CodecSet](_codec_set_.codecset.md).[decodeSet](_codec_set_.codecset.md#static-decodeset)*

*Defined in [codec/Set.ts:30](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`setValues` | `SetValues` | - |
`value` | string[] \| `Set<string>` \| `Uint8Array` \| number | 0 |

**Returns:** *string[]*

___

### `Static` encodeSet

▸ **encodeSet**(`setValues`: `SetValues`, `value`: string[]): *number*

*Inherited from [CodecSet](_codec_set_.codecset.md).[encodeSet](_codec_set_.codecset.md#static-encodeset)*

*Defined in [codec/Set.ts:62](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Set.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`setValues` | `SetValues` |
`value` | string[] |

**Returns:** *number*