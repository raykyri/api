> # Class: U32

**`name`** U32

**`description`** 
A 32-bit unsigned integer

## Hierarchy

  * [UInt](_codec_uint_.uint.md)

  * **U32**

  * [AccountIndex](_primitive_accountindex_.accountindex.md)

  * [MagicNumber](_metadata_magicnumber_.magicnumber.md)

  * [EventIndex](_primitive_event_.eventindex.md)

  * [ApplyExtrinsic](_primitive_eventrecord_.applyextrinsic.md)

  * [USize](_primitive_usize_.usize.md)

  * [Weight](_primitive_weight_.weight.md)

  * [ConsensusEngineId](_rpc_digest_.consensusengineid.md)

  * [ApprovalFlag](_type_approvalflag_.approvalflag.md)

  * [EraIndex](_type_eraindex_.eraindex.md)

  * [MemberCount](_type_membercount_.membercount.md)

  * [Permill](_type_permill_.permill.md)

  * [Perbill](_type_perbill_.perbill.md)

  * [PropIndex](_type_propindex_.propindex.md)

  * [ProposalIndex](_type_proposalindex_.proposalindex.md)

  * [ReferendumIndex](_type_referendumindex_.referendumindex.md)

  * [SessionIndex](_type_sessionindex_.sessionindex.md)

  * [SetIndex](_type_setindex_.setindex.md)

  * [VoteIndex](_type_voteindex_.voteindex.md)

  * [AuctionIndex](../interfaces/_srml_parachains_types_.auctionindex.md)

  * [ParaId](../interfaces/_srml_parachains_types_.paraid.md)

  * [SubId](../interfaces/_srml_parachains_types_.subid.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_u32_.u32.md#constructor)

### Methods

* [toHex](_primitive_u32_.u32.md#tohex)
* [toRawType](_primitive_u32_.u32.md#torawtype)
* [toU8a](_primitive_u32_.u32.md#tou8a)

## Constructors

###  constructor

\+ **new U32**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[U32](_primitive_u32_.u32.md)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[U32](_primitive_u32_.u32.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/codec/UInt.ts#L36)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [codec/UInt.ts:48](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/codec/UInt.ts#L48)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:57](https://github.com/polkadot-js/api/blob/50a2314/packages/types/src/codec/UInt.ts#L57)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*