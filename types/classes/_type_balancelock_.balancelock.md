> # Class: BalanceLock <**S, T, V, E**>

**`name`** BalanceLock

**`description`** 
The Substrate BalanceLock for staking

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **BalanceLock**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_type_balancelock_.balancelock.md#constructor)

### Accessors

* [Type](_type_balancelock_.balancelock.md#type)
* [amount](_type_balancelock_.balancelock.md#amount)
* [encodedLength](_type_balancelock_.balancelock.md#encodedlength)
* [id](_type_balancelock_.balancelock.md#id)
* [isEmpty](_type_balancelock_.balancelock.md#isempty)
* [reasons](_type_balancelock_.balancelock.md#reasons)
* [until](_type_balancelock_.balancelock.md#until)

### Methods

* [eq](_type_balancelock_.balancelock.md#eq)
* [get](_type_balancelock_.balancelock.md#get)
* [getAtIndex](_type_balancelock_.balancelock.md#getatindex)
* [toArray](_type_balancelock_.balancelock.md#toarray)
* [toHex](_type_balancelock_.balancelock.md#tohex)
* [toJSON](_type_balancelock_.balancelock.md#tojson)
* [toRawType](_type_balancelock_.balancelock.md#torawtype)
* [toString](_type_balancelock_.balancelock.md#tostring)
* [toU8a](_type_balancelock_.balancelock.md#tou8a)
* [with](_type_balancelock_.balancelock.md#static-with)

## Constructors

###  constructor

\+ **new BalanceLock**(`value?`: any): *[BalanceLock](_type_balancelock_.balancelock.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/BalanceLock.ts:16](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/type/BalanceLock.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[BalanceLock](_type_balancelock_.balancelock.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  amount

• **get amount**(): *[Balance](_primitive_balance_.balance.md)*

*Defined in [type/BalanceLock.ts:29](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/type/BalanceLock.ts#L29)*

**`description`** The amount

**Returns:** *[Balance](_primitive_balance_.balance.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  id

• **get id**(): *[LockIdentifier](_type_lockidentifier_.lockidentifier.md)*

*Defined in [type/BalanceLock.ts:36](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/type/BalanceLock.ts#L36)*

**`description`** The lock id

**Returns:** *[LockIdentifier](_type_lockidentifier_.lockidentifier.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  reasons

• **get reasons**(): *[WithdrawReasons](_type_withdrawreasons_.withdrawreasons.md)*

*Defined in [type/BalanceLock.ts:43](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/type/BalanceLock.ts#L43)*

**`description`** The reasons

**Returns:** *[WithdrawReasons](_type_withdrawreasons_.withdrawreasons.md)*

___

###  until

• **get until**(): *[BlockNumber](_type_blocknumber_.blocknumber.md)*

*Defined in [type/BalanceLock.ts:50](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/type/BalanceLock.ts#L50)*

**`description`** Until when this is available

**Returns:** *[BlockNumber](_type_blocknumber_.blocknumber.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L202)*

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

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L260)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/f9a3f3e/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*