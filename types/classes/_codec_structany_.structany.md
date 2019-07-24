> # Class: StructAny

**`name`** Json

**`description`** 
Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map with. While it
implements a Codec, it is limited in that it can only be used with input objects via RPC,
i.e. no hex decoding. Unlike a struct, this waps a JSON object with unknown keys

## Hierarchy

* `Map<string, any>`

  * **StructAny**

  * [ChainProperties](_rpc_chainproperties_.chainproperties.md)

  * [NetworkState](_rpc_networkstate_.networkstate.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_structany_.structany.md#constructor)

### Properties

* [Map](_codec_structany_.structany.md#static-map)

### Accessors

* [encodedLength](_codec_structany_.structany.md#encodedlength)
* [isEmpty](_codec_structany_.structany.md#isempty)

### Methods

* [eq](_codec_structany_.structany.md#eq)
* [toHex](_codec_structany_.structany.md#tohex)
* [toJSON](_codec_structany_.structany.md#tojson)
* [toRawType](_codec_structany_.structany.md#torawtype)
* [toString](_codec_structany_.structany.md#tostring)
* [toU8a](_codec_structany_.structany.md#tou8a)

## Constructors

###  constructor

\+ **new StructAny**(`value?`: object | null): *[StructAny](_codec_structany_.structany.md)*

*Defined in [codec/StructAny.ts:19](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | object \| null |

**Returns:** *[StructAny](_codec_structany_.structany.md)*

## Properties

### `Static` Map

▪ **Map**: *`MapConstructor`*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [codec/StructAny.ts:46](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L46)*

**`description`** Always 0, never encodes as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [codec/StructAny.ts:53](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L53)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/StructAny.ts:60](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L60)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [codec/StructAny.ts:67](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L67)*

**`description`** Unimplemented, will throw

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/StructAny.ts:74](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L74)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/StructAny.ts:85](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L85)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/StructAny.ts:92](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L92)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/StructAny.ts:100](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L100)*

**`description`** Unimplemented, will throw

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined \| false \| true |

**Returns:** *`Uint8Array`*