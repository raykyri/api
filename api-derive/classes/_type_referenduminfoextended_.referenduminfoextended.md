> # Class: ReferendumInfoExtended <**S, T, V, E**>

**`name`** ReferendumInfoExtended

**`description`** 
A [[ReferendumInfo]] with an additional `index` field

## Type parameters

▪ **S**: *`ConstructorDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* `ReferendumInfo`

  * **ReferendumInfoExtended**

## Implements

* `Codec`

## Index

### Constructors

* [constructor](_type_referenduminfoextended_.referenduminfoextended.md#constructor)

### Properties

* [__@toStringTag](_type_referenduminfoextended_.referenduminfoextended.md#__@tostringtag)
* [size](_type_referenduminfoextended_.referenduminfoextended.md#size)

### Accessors

* [Type](_type_referenduminfoextended_.referenduminfoextended.md#type)
* [delay](_type_referenduminfoextended_.referenduminfoextended.md#delay)
* [encodedLength](_type_referenduminfoextended_.referenduminfoextended.md#encodedlength)
* [end](_type_referenduminfoextended_.referenduminfoextended.md#end)
* [index](_type_referenduminfoextended_.referenduminfoextended.md#index)
* [isEmpty](_type_referenduminfoextended_.referenduminfoextended.md#isempty)
* [proposal](_type_referenduminfoextended_.referenduminfoextended.md#proposal)
* [threshold](_type_referenduminfoextended_.referenduminfoextended.md#threshold)

### Methods

* [__@iterator](_type_referenduminfoextended_.referenduminfoextended.md#__@iterator)
* [clear](_type_referenduminfoextended_.referenduminfoextended.md#clear)
* [delete](_type_referenduminfoextended_.referenduminfoextended.md#delete)
* [entries](_type_referenduminfoextended_.referenduminfoextended.md#entries)
* [eq](_type_referenduminfoextended_.referenduminfoextended.md#eq)
* [forEach](_type_referenduminfoextended_.referenduminfoextended.md#foreach)
* [get](_type_referenduminfoextended_.referenduminfoextended.md#get)
* [getAtIndex](_type_referenduminfoextended_.referenduminfoextended.md#getatindex)
* [has](_type_referenduminfoextended_.referenduminfoextended.md#has)
* [keys](_type_referenduminfoextended_.referenduminfoextended.md#keys)
* [set](_type_referenduminfoextended_.referenduminfoextended.md#set)
* [toArray](_type_referenduminfoextended_.referenduminfoextended.md#toarray)
* [toHex](_type_referenduminfoextended_.referenduminfoextended.md#tohex)
* [toJSON](_type_referenduminfoextended_.referenduminfoextended.md#tojson)
* [toRawType](_type_referenduminfoextended_.referenduminfoextended.md#torawtype)
* [toString](_type_referenduminfoextended_.referenduminfoextended.md#tostring)
* [toU8a](_type_referenduminfoextended_.referenduminfoextended.md#tou8a)
* [values](_type_referenduminfoextended_.referenduminfoextended.md#values)
* [with](_type_referenduminfoextended_.referenduminfoextended.md#static-with)

## Constructors

###  constructor

\+ **new ReferendumInfoExtended**(`value`: `ReferendumInfo` | [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md), `index?`: `BN` | number): *[ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md)*

*Overrides void*

*Defined in [type/ReferendumInfoExtended.ts:15](https://github.com/polkadot-js/api/blob/1525d64/packages/api-derive/src/type/ReferendumInfoExtended.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `ReferendumInfo` \| [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md) |
`index?` | `BN` \| number |

**Returns:** *[ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  delay

• **get delay**(): *`BlockNumber`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/type/ReferendumInfo.ts:58](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/type/ReferendumInfo.ts#L58)*

**`description`** The delay (in blocks) to wait after a successful referendum before deploying

**Returns:** *`BlockNumber`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  end

• **get end**(): *`BlockNumber`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/type/ReferendumInfo.ts:37](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/type/ReferendumInfo.ts#L37)*

**`description`** When voting on this referendum will end

**Returns:** *`BlockNumber`*

___

###  index

• **get index**(): *`ReferendumIndex`*

*Defined in [type/ReferendumInfoExtended.ts:28](https://github.com/polkadot-js/api/blob/1525d64/packages/api-derive/src/type/ReferendumInfoExtended.ts#L28)*

**`description`** Convenience getter, returns the referendumIndex

**Returns:** *`ReferendumIndex`*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  proposal

• **get proposal**(): *`Proposal`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/type/ReferendumInfo.ts:44](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/type/ReferendumInfo.ts#L44)*

**`description`** The proposal being voted on

**Returns:** *`Proposal`*

___

###  threshold

• **get threshold**(): *`VoteThreshold`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/type/ReferendumInfo.ts:51](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/type/ReferendumInfo.ts#L51)*

**`description`** The thresholding mechanism to determine whether it passed

**Returns:** *`VoteThreshold`*

## Methods

###  __@iterator

▸ **__@iterator**(): *`IterableIterator<[keyof S, Codec]>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113

Returns an iterable of entries in the map.

**Returns:** *`IterableIterator<[keyof S, Codec]>`*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *`IterableIterator<[keyof S, Codec]>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *`IterableIterator<[keyof S, Codec]>`*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L187)*

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

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: `Codec`, `key`: keyof S, `map`: `Map<keyof S, Codec>`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `Codec` |
`key` | keyof S |
`map` | `Map<keyof S, Codec>` |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *`Codec` | undefined*

*Inherited from void*

*Overrides void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L195)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *`Codec` | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *`Codec`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *`Codec`*

___

###  has

▸ **has**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *`IterableIterator<keyof S>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123

Returns an iterable of keys in the map

**Returns:** *`IterableIterator<keyof S>`*

___

###  set

▸ **set**(`key`: keyof S, `value`: `Codec`): *this*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | `Codec` |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *`Codec`[]*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Codec`[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *`AnyJsonObject`*

*Overrides void*

*Defined in [type/ReferendumInfoExtended.ts:35](https://github.com/polkadot-js/api/blob/1525d64/packages/api-derive/src/type/ReferendumInfoExtended.ts#L35)*

**`description`** Creates the JSON representation

**Returns:** *`AnyJsonObject`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L260)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

###  values

▸ **values**(): *`IterableIterator<Codec>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128

Returns an iterable of values in the map

**Returns:** *`IterableIterator<Codec>`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *`Constructor<Struct<S>>`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/1525d64/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *`ConstructorDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *`Constructor<Struct<S>>`*