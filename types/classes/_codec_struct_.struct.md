> # Class: Struct <**S, T, V, E**>

**`name`** Struct

**`description`** 
A Struct defines an Object with key-value pairs - where the values are Codec values. It removes
a lot of repetition from the actual coding, define a structure type, pass it the key/Codec
values in the constructor and it manages the decoding. It is important that the constructor
values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
it needs to decoded in the specific defined order.

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* `Map<keyof S, Codec>`

  * **Struct**

  * [FunctionArgumentMetadata](_metadata_v1_calls_.functionargumentmetadata.md)

  * [FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)

  * [Linkage](_codec_linkage_.linkage.md)

  * [Method](_primitive_method_.method.md)

  * [OuterDispatchCall](_metadata_v0_calls_.outerdispatchcall.md)

  * [OuterDispatchMetadata](_metadata_v0_calls_.outerdispatchmetadata.md)

  * [EventMetadata](_metadata_v0_events_.eventmetadata.md)

  * [OuterEventMetadata](_metadata_v0_events_.outereventmetadata.md)

  * [MapType](_metadata_v0_storage_.maptype.md)

  * [StorageFunctionMetadata](_metadata_v0_storage_.storagefunctionmetadata.md)

  * [StorageMetadata](_metadata_v0_storage_.storagemetadata.md)

  * [FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)

  * [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)

  * [CallMetadata](_metadata_v0_modules_.callmetadata.md)

  * [ModuleMetadata](_metadata_v0_modules_.modulemetadata.md)

  * [RuntimeModuleMetadata](_metadata_v0_modules_.runtimemodulemetadata.md)

  * [MetadataV0](_metadata_v0_metadata_.metadatav0.md)

  * [ModuleMetadata](_metadata_v1_metadata_.modulemetadata.md)

  * [MetadataV1](_metadata_v1_metadata_.metadatav1.md)

  * [MapType](_metadata_v2_storage_.maptype.md)

  * [StorageFunctionMetadata](_metadata_v2_storage_.storagefunctionmetadata.md)

  * [ModuleMetadata](_metadata_v2_metadata_.modulemetadata.md)

  * [MetadataV2](_metadata_v2_metadata_.metadatav2.md)

  * [DoubleMapType](_metadata_v3_storage_.doublemaptype.md)

  * [StorageFunctionMetadata](_metadata_v3_storage_.storagefunctionmetadata.md)

  * [ModuleMetadata](_metadata_v3_metadata_.modulemetadata.md)

  * [MetadataV3](_metadata_v3_metadata_.metadatav3.md)

  * [MapType](_metadata_v4_storage_.maptype.md)

  * [DoubleMapType](_metadata_v4_storage_.doublemaptype.md)

  * [StorageFunctionMetadata](_metadata_v4_storage_.storagefunctionmetadata.md)

  * [ModuleMetadata](_metadata_v4_metadata_.modulemetadata.md)

  * [MetadataV4](_metadata_v4_metadata_.metadatav4.md)

  * [DoubleMapType](_metadata_v5_storage_.doublemaptype.md)

  * [StorageFunctionMetadata](_metadata_v5_storage_.storagefunctionmetadata.md)

  * [ModuleMetadata](_metadata_v5_metadata_.modulemetadata.md)

  * [MetadataV5](_metadata_v5_metadata_.metadatav5.md)

  * [ModuleConstantMetadata](_metadata_v6_constants_.moduleconstantmetadata.md)

  * [ModuleMetadata](_metadata_v6_metadata_.modulemetadata.md)

  * [MetadataV6](_metadata_v6_metadata_.metadatav6.md)

  * [AccountInfo](_primitive_accountinfo_.accountinfo.md)

  * [Event](_primitive_event_.event.md)

  * [EventRecord0to76](_primitive_eventrecord_.eventrecord0to76.md)

  * [EventRecord](_primitive_eventrecord_.eventrecord.md)

  * [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)

  * [RuntimeVersion](_rpc_runtimeversion_.runtimeversion.md)

  * [SignaturePayload](_type_signaturepayload_.signaturepayload.md)

  * [SignaturePayloadRaw](_type_signaturepayload_.signaturepayloadraw.md)

  * [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

  * [ExtrinsicV1](_type_extrinsicv1_.extrinsicv1.md)

  * [Digest](_rpc_digest_.digest.md)

  * [Header](_rpc_header_.header.md)

  * [Block](_rpc_block_.block.md)

  * [Health](_rpc_health_.health.md)

  * [PeerInfo](_rpc_peerinfo_.peerinfo.md)

  * [RhdJustification](_type_justification_.rhdjustification.md)

  * [SignedBlock](_rpc_signedblock_.signedblock.md)

  * [StorageChangeSet](_rpc_storagechangeset_.storagechangeset.md)

  * [BalanceLock](_type_balancelock_.balancelock.md)

  * [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md)

  * [IndividualExposure](_type_individualexposure_.individualexposure.md)

  * [Exposure](_type_exposure_.exposure.md)

  * [SessionKeys](_type_sessionkeys_.sessionkeys.md)

  * [BftAtReport](_type_misbehaviorreport_.bftatreport.md)

  * [BftProposeOutOfTurn](_type_misbehaviorreport_.bftproposeoutofturn.md)

  * [MisbehaviorReport](_type_misbehaviorreport_.misbehaviorreport.md)

  * [PrefabWasmModule](_type_prefabwasmmodule_.prefabwasmmodule.md)

  * [ReferendumInfo](_type_referenduminfo_.referenduminfo.md)

  * [Schedule](_type_schedule_.schedule.md)

  * [UnlockChunk](_type_unlockchunk_.unlockchunk.md)

  * [StakingLedger](_type_stakingledger_.stakingledger.md)

  * [StoredPendingChange](_type_storedpendingchange_.storedpendingchange.md)

  * [TreasuryProposal](_type_treasuryproposal_.treasuryproposal.md)

  * [ValidatorPrefs](_type_validatorprefs_.validatorprefs.md)

  * [VestingSchedule](_type_vestingschedule_.vestingschedule.md)

  * [Votes](_type_votes_.votes.md)

  * [VoterInfo](_type_voterinfo_.voterinfo.md)

  * [AttestedCandidate](../interfaces/_srml_parachains_types_.attestedcandidate.md)

  * [CandidateReceipt](../interfaces/_srml_parachains_types_.candidatereceipt.md)

  * [IncomingParachainDeploy](../interfaces/_srml_parachains_types_.incomingparachaindeploy.md)

  * [IncomingParachainFixed](../interfaces/_srml_parachains_types_.incomingparachainfixed.md)

  * [NewBidder](../interfaces/_srml_parachains_types_.newbidder.md)

  * [UpwardMessage](../interfaces/_srml_parachains_types_.upwardmessage.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_codec_struct_.struct.md#constructor)

#### Properties

* [Map](_codec_struct_.struct.md#static-map)

#### Accessors

* [Type](_codec_struct_.struct.md#type)
* [encodedLength](_codec_struct_.struct.md#encodedlength)
* [isEmpty](_codec_struct_.struct.md#isempty)

#### Methods

* [eq](_codec_struct_.struct.md#eq)
* [get](_codec_struct_.struct.md#get)
* [getAtIndex](_codec_struct_.struct.md#getatindex)
* [toArray](_codec_struct_.struct.md#toarray)
* [toHex](_codec_struct_.struct.md#tohex)
* [toJSON](_codec_struct_.struct.md#tojson)
* [toRawType](_codec_struct_.struct.md#torawtype)
* [toString](_codec_struct_.struct.md#tostring)
* [toU8a](_codec_struct_.struct.md#tou8a)
* [with](_codec_struct_.struct.md#static-with)

## Constructors

###  constructor

\+ **new Struct**(`Types`: `S`, `value`: `V` | `Map<any, any>` | any[], `jsonMap`: `Map<keyof S, string>`): *[Struct](_codec_struct_.struct.md)*

*Defined in [codec/Struct.ts:31](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Types` | `S` | - |
`value` | `V` \| `Map<any, any>` \| any[] |  {} as unknown as V |
`jsonMap` | `Map<keyof S, string>` |  new Map() |

**Returns:** *[Struct](_codec_struct_.struct.md)*

## Properties

### `Static` Map

▪ **Map**: *`MapConstructor`*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  Type

• **get Type**(): *`E`*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L187)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Overrides void*

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L195)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L260)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/0196829/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*