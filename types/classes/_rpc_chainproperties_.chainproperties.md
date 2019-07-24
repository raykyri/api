> # Class: ChainProperties

**`name`** ChainProperties

**`description`** 
Wraps the properties retrieved from the chain via the `system.properties` RPC call.

## Hierarchy

  * [StructAny](_codec_structany_.structany.md)

  * **ChainProperties**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_rpc_chainproperties_.chainproperties.md#constructor)

### Accessors

* [encodedLength](_rpc_chainproperties_.chainproperties.md#encodedlength)
* [isEmpty](_rpc_chainproperties_.chainproperties.md#isempty)
* [tokenDecimals](_rpc_chainproperties_.chainproperties.md#tokendecimals)
* [tokenSymbol](_rpc_chainproperties_.chainproperties.md#tokensymbol)

### Methods

* [eq](_rpc_chainproperties_.chainproperties.md#eq)
* [toHex](_rpc_chainproperties_.chainproperties.md#tohex)
* [toJSON](_rpc_chainproperties_.chainproperties.md#tojson)
* [toRawType](_rpc_chainproperties_.chainproperties.md#torawtype)
* [toString](_rpc_chainproperties_.chainproperties.md#tostring)
* [toU8a](_rpc_chainproperties_.chainproperties.md#tou8a)

## Constructors

###  constructor

\+ **new ChainProperties**(`value?`: object | null): *[ChainProperties](_rpc_chainproperties_.chainproperties.md)*

*Inherited from [StructAny](_codec_structany_.structany.md).[constructor](_codec_structany_.structany.md#constructor)*

*Defined in [codec/StructAny.ts:19](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | object \| null |

**Returns:** *[ChainProperties](_rpc_chainproperties_.chainproperties.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [StructAny](_codec_structany_.structany.md).[encodedLength](_codec_structany_.structany.md#encodedlength)*

*Defined in [codec/StructAny.ts:46](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L46)*

**`description`** Always 0, never encodes as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [StructAny](_codec_structany_.structany.md).[isEmpty](_codec_structany_.structany.md#isempty)*

*Defined in [codec/StructAny.ts:53](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L53)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  tokenDecimals

• **get tokenDecimals**(): *number | undefined*

*Defined in [rpc/ChainProperties.ts:16](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/rpc/ChainProperties.ts#L16)*

**`description`** The token decimals, if defined (de-facto standard only)

**Returns:** *number | undefined*

___

###  tokenSymbol

• **get tokenSymbol**(): *string | undefined*

*Defined in [rpc/ChainProperties.ts:23](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/rpc/ChainProperties.ts#L23)*

**`description`** The token system, if defined (de-facto standard only)

**Returns:** *string | undefined*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [StructAny](_codec_structany_.structany.md).[eq](_codec_structany_.structany.md#eq)*

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

*Inherited from [StructAny](_codec_structany_.structany.md).[toHex](_codec_structany_.structany.md#tohex)*

*Defined in [codec/StructAny.ts:67](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L67)*

**`description`** Unimplemented, will throw

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [StructAny](_codec_structany_.structany.md).[toJSON](_codec_structany_.structany.md#tojson)*

*Defined in [codec/StructAny.ts:74](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L74)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [StructAny](_codec_structany_.structany.md).[toRawType](_codec_structany_.structany.md#torawtype)*

*Defined in [codec/StructAny.ts:85](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L85)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [StructAny](_codec_structany_.structany.md).[toString](_codec_structany_.structany.md#tostring)*

*Defined in [codec/StructAny.ts:92](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L92)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [StructAny](_codec_structany_.structany.md).[toU8a](_codec_structany_.structany.md#tou8a)*

*Defined in [codec/StructAny.ts:100](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/codec/StructAny.ts#L100)*

**`description`** Unimplemented, will throw

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined \| false \| true |

**Returns:** *`Uint8Array`*