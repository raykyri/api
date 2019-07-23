> # Class: HeaderExtended <**S, T, V, E**>

**`name`** HeaderExtended

**`description`** 
A [[Block]] header with an additional `author` field that indicates the block author

## Type parameters

▪ **S**: *`ConstructorDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* `Header`

  * **HeaderExtended**

## Implements

* `Codec`

## Index

### Constructors

* [constructor](_type_headerextended_.headerextended.md#constructor)

### Properties

* [__@toStringTag](_type_headerextended_.headerextended.md#__@tostringtag)
* [size](_type_headerextended_.headerextended.md#size)

### Accessors

* [Type](_type_headerextended_.headerextended.md#type)
* [author](_type_headerextended_.headerextended.md#author)
* [blockNumber](_type_headerextended_.headerextended.md#blocknumber)
* [digest](_type_headerextended_.headerextended.md#digest)
* [encodedLength](_type_headerextended_.headerextended.md#encodedlength)
* [extrinsicsRoot](_type_headerextended_.headerextended.md#extrinsicsroot)
* [hash](_type_headerextended_.headerextended.md#hash)
* [isEmpty](_type_headerextended_.headerextended.md#isempty)
* [number](_type_headerextended_.headerextended.md#number)
* [parentHash](_type_headerextended_.headerextended.md#parenthash)
* [stateRoot](_type_headerextended_.headerextended.md#stateroot)

### Methods

* [__@iterator](_type_headerextended_.headerextended.md#__@iterator)
* [clear](_type_headerextended_.headerextended.md#clear)
* [delete](_type_headerextended_.headerextended.md#delete)
* [entries](_type_headerextended_.headerextended.md#entries)
* [eq](_type_headerextended_.headerextended.md#eq)
* [forEach](_type_headerextended_.headerextended.md#foreach)
* [get](_type_headerextended_.headerextended.md#get)
* [getAtIndex](_type_headerextended_.headerextended.md#getatindex)
* [has](_type_headerextended_.headerextended.md#has)
* [keys](_type_headerextended_.headerextended.md#keys)
* [set](_type_headerextended_.headerextended.md#set)
* [toArray](_type_headerextended_.headerextended.md#toarray)
* [toHex](_type_headerextended_.headerextended.md#tohex)
* [toJSON](_type_headerextended_.headerextended.md#tojson)
* [toRawType](_type_headerextended_.headerextended.md#torawtype)
* [toString](_type_headerextended_.headerextended.md#tostring)
* [toU8a](_type_headerextended_.headerextended.md#tou8a)
* [values](_type_headerextended_.headerextended.md#values)
* [with](_type_headerextended_.headerextended.md#static-with)

## Constructors

###  constructor

\+ **new HeaderExtended**(`header`: `Header` | null, `sessionValidators`: `AccountId`[]): *[HeaderExtended](_type_headerextended_.headerextended.md)*

*Overrides void*

*Defined in [type/HeaderExtended.ts:14](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/api-derive/src/type/HeaderExtended.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`header` | `Header` \| null |  null |
`sessionValidators` | `AccountId`[] |  [] |

**Returns:** *[HeaderExtended](_type_headerextended_.headerextended.md)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  author

• **get author**(): *`AccountId` | undefined*

*Defined in [type/HeaderExtended.ts:62](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/api-derive/src/type/HeaderExtended.ts#L62)*

**`description`** Convenience method, returns the author for the block

**Returns:** *`AccountId` | undefined*

___

###  blockNumber

• **get blockNumber**(): *`BlockNumber`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:42](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/rpc/Header.ts#L42)*

**`description`** The wrapped [[BlockNumber]]

**Returns:** *`BlockNumber`*

___

###  digest

• **get digest**(): *`Digest`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:49](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/rpc/Header.ts#L49)*

**`description`** The wrapped [[Digest]]

**Returns:** *`Digest`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  extrinsicsRoot

• **get extrinsicsRoot**(): *`Hash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:56](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/rpc/Header.ts#L56)*

**`description`** The wrapped extrisics root as a [[Hash]]

**Returns:** *`Hash`*

___

###  hash

• **get hash**(): *`Hash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:63](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/rpc/Header.ts#L63)*

**`description`** Convenience method, encodes the header and calculates the [[Hash]]

**Returns:** *`Hash`*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  number

• **get number**(): *`BlockNumber`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:72](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/rpc/Header.ts#L72)*

**`description`** Alias for `blockNumber` (this is displayed in JSON)

**Returns:** *`BlockNumber`*

___

###  parentHash

• **get parentHash**(): *`Hash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:79](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/rpc/Header.ts#L79)*

**`description`** The wrapped parent as a [[Hash]]

**Returns:** *`Hash`*

___

###  stateRoot

• **get stateRoot**(): *`Hash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:86](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/rpc/Header.ts#L86)*

**`description`** The wrapped state root as a [[Hash]]

**Returns:** *`Hash`*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L202)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Codec`[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *`AnyJsonObject`*

*Overrides void*

*Defined in [type/HeaderExtended.ts:69](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/api-derive/src/type/HeaderExtended.ts#L69)*

**`description`** Creates the JSON representation

**Returns:** *`AnyJsonObject`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L260)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/ebc2fbe/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *`ConstructorDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *`Constructor<Struct<S>>`*