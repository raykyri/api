> # Class: Address

**`name`** Address

**`description`** 
A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
Since we are dealing with underlying publicKeys (or shorter encoded addresses),
we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec

## Hierarchy

* [Base](_codec_base_.base.md)‹*[AccountId](_primitive_accountid_.accountid.md) | [AccountIndex](_primitive_accountindex_.accountindex.md)*›

  * **Address**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_primitive_address_.address.md#constructor)

#### Accessors

* [encodedLength](_primitive_address_.address.md#encodedlength)
* [isEmpty](_primitive_address_.address.md#isempty)
* [rawLength](_primitive_address_.address.md#rawlength)

#### Methods

* [eq](_primitive_address_.address.md#eq)
* [toHex](_primitive_address_.address.md#tohex)
* [toJSON](_primitive_address_.address.md#tojson)
* [toRawType](_primitive_address_.address.md#torawtype)
* [toString](_primitive_address_.address.md#tostring)
* [toU8a](_primitive_address_.address.md#tou8a)
* [decodeAddress](_primitive_address_.address.md#static-decodeaddress)

## Constructors

###  constructor

\+ **new Address**(`value`: `AnyAddress`): *[Address](_primitive_address_.address.md)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [primitive/Address.ts:27](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/primitive/Address.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | `AnyAddress` |  new Uint8Array() |

**Returns:** *[Address](_primitive_address_.address.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [primitive/Address.ts:69](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/primitive/Address.ts#L69)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [primitive/Address.ts:83](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/primitive/Address.ts#L83)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  rawLength

• **get rawLength**(): *number*

*Defined in [primitive/Address.ts:90](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/primitive/Address.ts#L90)*

**`description`** The length of the raw value, either AccountIndex or AccountId

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Address.ts:99](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/primitive/Address.ts#L99)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [primitive/Address.ts:106](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/primitive/Address.ts#L106)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Address.ts:113](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/primitive/Address.ts#L113)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Address.ts:127](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/primitive/Address.ts#L127)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Address.ts:120](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/primitive/Address.ts#L120)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Address.ts:135](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/primitive/Address.ts#L135)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeAddress

▸ **decodeAddress**(`value`: `AnyAddress`): *[AccountId](_primitive_accountid_.accountid.md) | [AccountIndex](_primitive_accountindex_.accountindex.md)*

*Defined in [primitive/Address.ts:34](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/primitive/Address.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `AnyAddress` |

**Returns:** *[AccountId](_primitive_accountid_.accountid.md) | [AccountIndex](_primitive_accountindex_.accountindex.md)*