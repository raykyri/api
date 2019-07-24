> # Class: PeerInfo <**S, T, V, E**>

**`name`** PeerInfo

**`description`** 
A system peer info indicator, reported back over RPC

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **PeerInfo**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_rpc_peerinfo_.peerinfo.md#constructor)

### Accessors

* [Type](_rpc_peerinfo_.peerinfo.md#type)
* [bestHash](_rpc_peerinfo_.peerinfo.md#besthash)
* [bestNumber](_rpc_peerinfo_.peerinfo.md#bestnumber)
* [encodedLength](_rpc_peerinfo_.peerinfo.md#encodedlength)
* [isEmpty](_rpc_peerinfo_.peerinfo.md#isempty)
* [peerId](_rpc_peerinfo_.peerinfo.md#peerid)
* [protocolVersion](_rpc_peerinfo_.peerinfo.md#protocolversion)
* [roles](_rpc_peerinfo_.peerinfo.md#roles)

### Methods

* [eq](_rpc_peerinfo_.peerinfo.md#eq)
* [get](_rpc_peerinfo_.peerinfo.md#get)
* [getAtIndex](_rpc_peerinfo_.peerinfo.md#getatindex)
* [toArray](_rpc_peerinfo_.peerinfo.md#toarray)
* [toHex](_rpc_peerinfo_.peerinfo.md#tohex)
* [toJSON](_rpc_peerinfo_.peerinfo.md#tojson)
* [toRawType](_rpc_peerinfo_.peerinfo.md#torawtype)
* [toString](_rpc_peerinfo_.peerinfo.md#tostring)
* [toU8a](_rpc_peerinfo_.peerinfo.md#tou8a)
* [with](_rpc_peerinfo_.peerinfo.md#static-with)

## Constructors

###  constructor

\+ **new PeerInfo**(`value?`: any): *[PeerInfo](_rpc_peerinfo_.peerinfo.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [rpc/PeerInfo.ts:16](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/PeerInfo.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[PeerInfo](_rpc_peerinfo_.peerinfo.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  bestHash

• **get bestHash**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [rpc/PeerInfo.ts:30](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/PeerInfo.ts#L30)*

**`description`** The best block hash for the peer

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  bestNumber

• **get bestNumber**(): *[BlockNumber](_type_blocknumber_.blocknumber.md)*

*Defined in [rpc/PeerInfo.ts:37](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/PeerInfo.ts#L37)*

**`description`** The best block hash for the peer

**Returns:** *[BlockNumber](_type_blocknumber_.blocknumber.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  peerId

• **get peerId**(): *[Text](_primitive_text_.text.md)*

*Defined in [rpc/PeerInfo.ts:44](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/PeerInfo.ts#L44)*

**`description`** The p2p network id for the peer

**Returns:** *[Text](_primitive_text_.text.md)*

___

###  protocolVersion

• **get protocolVersion**(): *[U32](_primitive_u32_.u32.md)*

*Defined in [rpc/PeerInfo.ts:51](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/PeerInfo.ts#L51)*

**`description`** The index of the peer in our list

**Returns:** *[U32](_primitive_u32_.u32.md)*

___

###  roles

• **get roles**(): *[Text](_primitive_text_.text.md)*

*Defined in [rpc/PeerInfo.ts:58](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/rpc/PeerInfo.ts#L58)*

**`description`** The roles of the peer on the network

**Returns:** *[Text](_primitive_text_.text.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L187)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L195)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L260)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/37022d2/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*