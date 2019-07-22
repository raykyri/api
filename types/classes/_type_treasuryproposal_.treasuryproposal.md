> # Class: TreasuryProposal <**S, T, V, E**>

**`name`** TreasuryProposal

**`description`** 
A Proposal made for Treasury

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **TreasuryProposal**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_type_treasuryproposal_.treasuryproposal.md#constructor)

### Accessors

* [Type](_type_treasuryproposal_.treasuryproposal.md#type)
* [beneficiary](_type_treasuryproposal_.treasuryproposal.md#beneficiary)
* [bond](_type_treasuryproposal_.treasuryproposal.md#bond)
* [encodedLength](_type_treasuryproposal_.treasuryproposal.md#encodedlength)
* [isEmpty](_type_treasuryproposal_.treasuryproposal.md#isempty)
* [proposer](_type_treasuryproposal_.treasuryproposal.md#proposer)
* [value](_type_treasuryproposal_.treasuryproposal.md#value)

### Methods

* [eq](_type_treasuryproposal_.treasuryproposal.md#eq)
* [get](_type_treasuryproposal_.treasuryproposal.md#get)
* [getAtIndex](_type_treasuryproposal_.treasuryproposal.md#getatindex)
* [toArray](_type_treasuryproposal_.treasuryproposal.md#toarray)
* [toHex](_type_treasuryproposal_.treasuryproposal.md#tohex)
* [toJSON](_type_treasuryproposal_.treasuryproposal.md#tojson)
* [toRawType](_type_treasuryproposal_.treasuryproposal.md#torawtype)
* [toString](_type_treasuryproposal_.treasuryproposal.md#tostring)
* [toU8a](_type_treasuryproposal_.treasuryproposal.md#tou8a)
* [with](_type_treasuryproposal_.treasuryproposal.md#static-with)

## Constructors

###  constructor

\+ **new TreasuryProposal**(`value`: any): *[TreasuryProposal](_type_treasuryproposal_.treasuryproposal.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/TreasuryProposal.ts:14](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/type/TreasuryProposal.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *[TreasuryProposal](_type_treasuryproposal_.treasuryproposal.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  beneficiary

• **get beneficiary**(): *[AccountId](_primitive_accountid_.accountid.md)*

*Defined in [type/TreasuryProposal.ts:27](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/type/TreasuryProposal.ts#L27)*

**`description`** The beneficiary

**Returns:** *[AccountId](_primitive_accountid_.accountid.md)*

___

###  bond

• **get bond**(): *[Balance](_primitive_balance_.balance.md)*

*Defined in [type/TreasuryProposal.ts:34](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/type/TreasuryProposal.ts#L34)*

**`description`** The bond

**Returns:** *[Balance](_primitive_balance_.balance.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  proposer

• **get proposer**(): *[AccountId](_primitive_accountid_.accountid.md)*

*Defined in [type/TreasuryProposal.ts:41](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/type/TreasuryProposal.ts#L41)*

**`description`** The proposer

**Returns:** *[AccountId](_primitive_accountid_.accountid.md)*

___

###  value

• **get value**(): *[Balance](_primitive_balance_.balance.md)*

*Defined in [type/TreasuryProposal.ts:48](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/type/TreasuryProposal.ts#L48)*

**`description`** The bond

**Returns:** *[Balance](_primitive_balance_.balance.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L202)*

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

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L260)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*