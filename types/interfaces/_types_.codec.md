> # Interface: Codec

**`name`** Codec

**`description`** 
The base Codec interface. All types implement the interface provided here. Additionally
implementors can add their own specific interfaces and helpres with getters and functions.
The Codec Base is however required for operating as an encoding/decoding layer

## Hierarchy

* **Codec**

  * [IMethod](_types_.imethod.md)

  * [IExtrinsicSignature](_types_.iextrinsicsignature.md)

  * [IExtrinsicEra](_types_.iextrinsicera.md)

  * [IExtrinsicImpl](_types_.iextrinsicimpl.md)

  * [MetadataInterface](_metadata_types_.metadatainterface.md)

  * [NextAuthority](_srml_grandpa_types_.nextauthority.md)

  * [AvailabilityVote](_srml_parachains_types_.availabilityvote.md)

  * [BalanceUpload](_srml_parachains_types_.balanceupload.md)

  * [EgressQueueRoot](_srml_parachains_types_.egressqueueroot.md)

  * [ValidityVote](_srml_parachains_types_.validityvote.md)

  * [WinningDataEntry](_srml_parachains_types_.winningdataentry.md)

## Implemented by

* [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md)
* [AccountId](../classes/_primitive_accountid_.accountid.md)
* [AccountIdOf](../classes/_primitive_accountid_.accountidof.md)
* [AccountIndex](../classes/_primitive_accountindex_.accountindex.md)
* [AccountInfo](../classes/_primitive_accountinfo_.accountinfo.md)
* [Address](../classes/_primitive_address_.address.md)
* [AliveContractInfo](_srml_contracts_types_.alivecontractinfo.md)
* [Amount](../classes/_type_amount_.amount.md)
* [ApiId](../classes/_rpc_runtimeversion_.apiid.md)
* [ApplyExtrinsic](../classes/_primitive_eventrecord_.applyextrinsic.md)
* [ApprovalFlag](../classes/_type_approvalflag_.approvalflag.md)
* [AssetOf](../classes/_type_assetof_.assetof.md)
* [AttestedCandidate](_srml_parachains_types_.attestedcandidate.md)
* [AuctionIndex](_srml_parachains_types_.auctionindex.md)
* [AuthoritiesChange](../classes/_rpc_digest_.authoritieschange.md)
* [AuthorityId](../classes/_type_authorityid_.authorityid.md)
* [AuthorityWeight](_srml_grandpa_types_.authorityweight.md)
* [BabeWeight](_srml_babe_types_.babeweight.md)
* [Balance](../classes/_primitive_balance_.balance.md)
* [BalanceCompact](../classes/_primitive_balancecompact_.balancecompact.md)
* [BalanceLock](../classes/_type_balancelock_.balancelock.md)
* [BalanceOf](../classes/_primitive_balance_.balanceof.md)
* [Base](../classes/_codec_base_.base.md)
* [BftAtReport](../classes/_type_misbehaviorreport_.bftatreport.md)
* [BftAuthoritySignature](../classes/_type_bft_.bftauthoritysignature.md)
* [BftDoubleCommit](../classes/_type_misbehaviorreport_.bftdoublecommit.md)
* [BftDoublePrepare](../classes/_type_misbehaviorreport_.bftdoubleprepare.md)
* [BftDoublePropose](../classes/_type_misbehaviorreport_.bftdoublepropose.md)
* [BftHashSignature](../classes/_type_bft_.bfthashsignature.md)
* [BftProposeOutOfTurn](../classes/_type_misbehaviorreport_.bftproposeoutofturn.md)
* [Bidder](_srml_parachains_types_.bidder.md)
* [Block](../classes/_rpc_block_.block.md)
* [BlockNumber](../classes/_type_blocknumber_.blocknumber.md)
* [Bool](../classes/_primitive_bool_.bool.md)
* [Broadcast](../classes/_rpc_extrinsicstatus_.broadcast.md)
* [Bytes](../classes/_primitive_bytes_.bytes.md)
* [CallMetadata](../classes/_metadata_v0_modules_.callmetadata.md)
* [CandidateReceipt](_srml_parachains_types_.candidatereceipt.md)
* [ChainProperties](../classes/_rpc_chainproperties_.chainproperties.md)
* [ChangesTrieRoot](../classes/_rpc_digest_.changestrieroot.md)
* [CodeHash](_srml_contracts_types_.codehash.md)
* [CodecSet](../classes/_codec_set_.codecset.md)
* [CollatorSignature](_srml_parachains_types_.collatorsignature.md)
* [Compact](../classes/_codec_compact_.compact.md)
* [Consensus](../classes/_rpc_digest_.consensus.md)
* [ConsensusEngineId](../classes/_rpc_digest_.consensusengineid.md)
* [ContractInfo](_srml_contracts_types_.contractinfo.md)
* [ContractStorageKey](_srml_contracts_types_.contractstoragekey.md)
* [Conviction](../classes/_type_conviction_.conviction.md)
* [Data](../classes/_primitive_data_.data.md)
* [Digest](../classes/_rpc_digest_.digest.md)
* [DigestItem](../classes/_rpc_digest_.digestitem.md)
* [DigestOf](../classes/_rpc_digest_.digestof.md)
* [DoubleMapType](../classes/_metadata_v3_storage_.doublemaptype.md)
* [DoubleMapType](../classes/_metadata_v4_storage_.doublemaptype.md)
* [DoubleMapType](../classes/_metadata_v5_storage_.doublemaptype.md)
* [Dropped](../classes/_rpc_extrinsicstatus_.dropped.md)
* [Ed25519Signature](../classes/_primitive_signature_.ed25519signature.md)
* [Enum](../classes/_codec_enumtype_.enum.md)
* [EraIndex](../classes/_type_eraindex_.eraindex.md)
* [Event](../classes/_primitive_event_.event.md)
* [EventData](../classes/_primitive_event_.eventdata.md)
* [EventId](../classes/_primitive_event_.eventid.md)
* [EventIndex](../classes/_primitive_event_.eventindex.md)
* [EventMetadata](../classes/_metadata_v0_events_.eventmetadata.md)
* [EventRecord](../classes/_primitive_eventrecord_.eventrecord.md)
* [EventRecord0to76](../classes/_primitive_eventrecord_.eventrecord0to76.md)
* [Exposure](../classes/_type_exposure_.exposure.md)
* [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)
* [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)
* [ExtrinsicExtraV2](../classes/_primitive_extrinsic_v2_extrinsicextra_.extrinsicextrav2.md)
* [ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)
* [ExtrinsicSignatureV2](../classes/_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)
* [ExtrinsicStatus](../classes/_rpc_extrinsicstatus_.extrinsicstatus.md)
* [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)
* [ExtrinsicV2](../classes/_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)
* [Extrinsics](../classes/_type_extrinsics_.extrinsics.md)
* [Finalization](../classes/_primitive_eventrecord_.finalization.md)
* [Finalized](../classes/_rpc_extrinsicstatus_.finalized.md)
* [FunctionArgumentMetadata](../classes/_metadata_v1_calls_.functionargumentmetadata.md)
* [FunctionArgumentMetadata](../classes/_metadata_v0_modules_.functionargumentmetadata.md)
* [FunctionMetadata](../classes/_metadata_v0_modules_.functionmetadata.md)
* [FunctionMetadata](../classes/_metadata_v1_calls_.functionmetadata.md)
* [Future](../classes/_rpc_extrinsicstatus_.future.md)
* [Gas](_srml_contracts_types_.gas.md)
* [H160](../classes/_primitive_h160_.h160.md)
* [H256](../classes/_primitive_h256_.h256.md)
* [H512](../classes/_primitive_h512_.h512.md)
* [Hash](../classes/_primitive_hash_.hash.md)
* [HeadData](_srml_parachains_types_.headdata.md)
* [Header](../classes/_rpc_header_.header.md)
* [Health](../classes/_rpc_health_.health.md)
* [Heartbeat](_srml_imonline_types_.heartbeat.md)
* [I128](../classes/_primitive_i128_.i128.md)
* [I16](../classes/_primitive_i16_.i16.md)
* [I256](../classes/_primitive_i256_.i256.md)
* [I32](../classes/_primitive_i32_.i32.md)
* [I64](../classes/_primitive_i64_.i64.md)
* [I64Fixed](../classes/_primitive_i64fixed_.i64fixed.md)
* [I8](../classes/_primitive_i8_.i8.md)
* [IHash](_types_.ihash.md)
* [ImmortalEra](../classes/_primitive_extrinsic_extrinsicera_.immortalera.md)
* [InclusionHeight](../classes/_type_uncleentryitem_.inclusionheight.md)
* [IncomingParachain](_srml_parachains_types_.incomingparachain.md)
* [IncomingParachainDeploy](_srml_parachains_types_.incomingparachaindeploy.md)
* [IncomingParachainFixed](_srml_parachains_types_.incomingparachainfixed.md)
* [IndividualExposure](../classes/_type_individualexposure_.individualexposure.md)
* [InherentOfflineReport](../classes/_type_inherentofflinereport_.inherentofflinereport.md)
* [Int](../classes/_codec_int_.int.md)
* [Invalid](../classes/_rpc_extrinsicstatus_.invalid.md)
* [Justification](../classes/_type_justification_.justification.md)
* [Key](../classes/_type_key_.key.md)
* [KeyValue](../classes/_type_keyvalue_.keyvalue.md)
* [KeyValueOption](../classes/_type_keyvalue_.keyvalueoption.md)
* [Keys](_srml_session_types_.keys.md)
* [LeasePeriod](_srml_parachains_types_.leaseperiod.md)
* [LeasePeriodOf](_srml_parachains_types_.leaseperiodof.md)
* [Linkage](../classes/_codec_linkage_.linkage.md)
* [LinkageResult](../classes/_codec_linkage_.linkageresult.md)
* [LockIdentifier](../classes/_type_lockidentifier_.lockidentifier.md)
* [LockPeriods](../classes/_type_lockperiods_.lockperiods.md)
* [MagicNumber](../classes/_metadata_magicnumber_.magicnumber.md)
* [MapType](../classes/_metadata_v0_storage_.maptype.md)
* [MapType](../classes/_metadata_v2_storage_.maptype.md)
* [MapType](../classes/_metadata_v4_storage_.maptype.md)
* [MemberCount](../classes/_type_membercount_.membercount.md)
* [Metadata](../classes/_metadata_metadata_.metadata.md)
* [MetadataV0](../classes/_metadata_v0_metadata_.metadatav0.md)
* [MetadataV1](../classes/_metadata_v1_metadata_.metadatav1.md)
* [MetadataV2](../classes/_metadata_v2_metadata_.metadatav2.md)
* [MetadataV3](../classes/_metadata_v3_metadata_.metadatav3.md)
* [MetadataV4](../classes/_metadata_v4_metadata_.metadatav4.md)
* [MetadataV5](../classes/_metadata_v5_metadata_.metadatav5.md)
* [MetadataV6](../classes/_metadata_v6_metadata_.metadatav6.md)
* [MetadataVersioned](../classes/_metadata_metadataversioned_.metadataversioned.md)
* [Method](../classes/_primitive_method_.method.md)
* [MethodIndex](../classes/_primitive_method_.methodindex.md)
* [MisbehaviorKind](../classes/_type_misbehaviorreport_.misbehaviorkind.md)
* [MisbehaviorReport](../classes/_type_misbehaviorreport_.misbehaviorreport.md)
* [ModuleConstantMetadata](../classes/_metadata_v6_constants_.moduleconstantmetadata.md)
* [ModuleMetadata](../classes/_metadata_v3_metadata_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v1_metadata_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v2_metadata_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v4_metadata_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v5_metadata_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v0_modules_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v6_metadata_.modulemetadata.md)
* [Moment](../classes/_primitive_moment_.moment.md)
* [MomentOf](../classes/_primitive_moment_.momentof.md)
* [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md)
* [NetworkState](../classes/_rpc_networkstate_.networkstate.md)
* [NewAccountOutcome](../classes/_type_newaccountoutcome_.newaccountoutcome.md)
* [NewBidder](_srml_parachains_types_.newbidder.md)
* [Nonce](../classes/_type_nonce_.nonce.md)
* [NonceCompact](../classes/_type_noncecompact_.noncecompact.md)
* [Null](../classes/_primitive_null_.null.md)
* [OpaqueKey](../classes/_type_opaquekey_.opaquekey.md)
* [OpaqueMultiaddr](_srml_imonline_types_.opaquemultiaddr.md)
* [OpaqueNetworkState](_srml_imonline_types_.opaquenetworkstate.md)
* [OpaquePeerId](_srml_imonline_types_.opaquepeerid.md)
* [Option](../classes/_codec_option_.option.md)
* [Origin](../classes/_primitive_origin_.origin.md)
* [Other](../classes/_rpc_digest_.other.md)
* [OuterDispatchCall](../classes/_metadata_v0_calls_.outerdispatchcall.md)
* [OuterDispatchMetadata](../classes/_metadata_v0_calls_.outerdispatchmetadata.md)
* [OuterEventEventMetadata](../classes/_metadata_v0_events_.outereventeventmetadata.md)
* [OuterEventMetadata](../classes/_metadata_v0_events_.outereventmetadata.md)
* [ParaId](_srml_parachains_types_.paraid.md)
* [ParaIdOf](_srml_parachains_types_.paraidof.md)
* [ParachainDispatchOrigin](_srml_parachains_types_.parachaindispatchorigin.md)
* [PeerInfo](../classes/_rpc_peerinfo_.peerinfo.md)
* [PendingExtrinsics](../classes/_rpc_pendingextrinsics_.pendingextrinsics.md)
* [PendingPause](_srml_grandpa_types_.pendingpause.md)
* [PendingResume](_srml_grandpa_types_.pendingresume.md)
* [Perbill](../classes/_type_perbill_.perbill.md)
* [Permill](../classes/_type_permill_.permill.md)
* [Phantom](../classes/_primitive_null_.phantom.md)
* [Phase](../classes/_primitive_eventrecord_.phase.md)
* [PlainType](../classes/_metadata_v0_storage_.plaintype.md)
* [PreRuntime](../classes/_rpc_digest_.preruntime.md)
* [PrefabWasmModule](_srml_contracts_types_.prefabwasmmodule.md)
* [PrefabWasmModuleReserved](_srml_contracts_types_.prefabwasmmodulereserved.md)
* [PropIndex](../classes/_type_propindex_.propindex.md)
* [Proposal](../classes/_type_proposal_.proposal.md)
* [ProposalIndex](../classes/_type_proposalindex_.proposalindex.md)
* [Ready](../classes/_rpc_extrinsicstatus_.ready.md)
* [ReferendumIndex](../classes/_type_referendumindex_.referendumindex.md)
* [ReferendumInfo](../classes/_type_referenduminfo_.referenduminfo.md)
* [RewardDestination](../classes/_type_rewarddestination_.rewarddestination.md)
* [RhdJustification](../classes/_type_justification_.rhdjustification.md)
* [RuntimeModuleMetadata](../classes/_metadata_v0_modules_.runtimemodulemetadata.md)
* [RuntimeVersion](../classes/_rpc_runtimeversion_.runtimeversion.md)
* [RuntimeVersionApi](../classes/_rpc_runtimeversion_.runtimeversionapi.md)
* [Schedule](_srml_contracts_types_.schedule.md)
* [Seal](../classes/_rpc_digest_.seal.md)
* [SealV0](../classes/_rpc_digest_.sealv0.md)
* [SeedOf](../classes/_type_seedof_.seedof.md)
* [SessionIndex](_srml_session_types_.sessionindex.md)
* [SessionKey](../classes/_type_sessionkey_.sessionkey.md)
* [SessionKey](_srml_session_types_.sessionkey.md)
* [SessionKeys](../classes/_type_sessionkeys_.sessionkeys.md)
* [SessionKeys](_srml_session_types_.sessionkeys.md)
* [SetIndex](_srml_elections_types_.setindex.md)
* [Signature](../classes/_primitive_signature_.signature.md)
* [SignaturePayload](../classes/_primitive_extrinsic_signaturepayload_.signaturepayload.md)
* [SignaturePayloadV1](../classes/_primitive_extrinsic_v1_signaturepayload_.signaturepayloadv1.md)
* [SignaturePayloadV2](../classes/_primitive_extrinsic_v2_signaturepayload_.signaturepayloadv2.md)
* [SignedBlock](../classes/_rpc_signedblock_.signedblock.md)
* [SlotRange](_srml_parachains_types_.slotrange.md)
* [Sr25519Signature](../classes/_primitive_signature_.sr25519signature.md)
* [StakingLedger](../classes/_type_stakingledger_.stakingledger.md)
* [StorageChangeSet](../classes/_rpc_storagechangeset_.storagechangeset.md)
* [StorageData](../classes/_primitive_storagedata_.storagedata.md)
* [StorageFunctionMetadata](../classes/_metadata_v5_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v3_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v0_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v4_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v2_storage_.storagefunctionmetadata.md)
* [StorageFunctionModifier](../classes/_metadata_v0_storage_.storagefunctionmodifier.md)
* [StorageFunctionType](../classes/_metadata_v0_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v5_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v3_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v4_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v2_storage_.storagefunctiontype.md)
* [StorageHasher](../classes/_primitive_storagehasher_.storagehasher.md)
* [StorageKey](../classes/_primitive_storagekey_.storagekey.md)
* [StorageMetadata](../classes/_metadata_v0_storage_.storagemetadata.md)
* [StoredPendingChange](_srml_grandpa_types_.storedpendingchange.md)
* [StoredState](_srml_grandpa_types_.storedstate.md)
* [Struct](../classes/_codec_struct_.struct.md)
* [StructAny](../classes/_codec_structany_.structany.md)
* [SubId](_srml_parachains_types_.subid.md)
* [Text](../classes/_primitive_text_.text.md)
* [TombstoneContractInfo](_srml_contracts_types_.tombstonecontractinfo.md)
* [TreasuryProposal](../classes/_type_treasuryproposal_.treasuryproposal.md)
* [TrieId](_srml_contracts_types_.trieid.md)
* [Tuple](../classes/_codec_tuple_.tuple.md)
* [Type](../classes/_primitive_type_.type.md)
* [U128](../classes/_primitive_u128_.u128.md)
* [U16](../classes/_primitive_u16_.u16.md)
* [U256](../classes/_primitive_u256_.u256.md)
* [U32](../classes/_primitive_u32_.u32.md)
* [U64](../classes/_primitive_u64_.u64.md)
* [U8](../classes/_primitive_u8_.u8.md)
* [U8a](../classes/_codec_u8a_.u8a.md)
* [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)
* [UInt](../classes/_codec_uint_.uint.md)
* [USize](../classes/_primitive_usize_.usize.md)
* [Uncle](../classes/_type_uncleentryitem_.uncle.md)
* [UncleEntryItem](../classes/_type_uncleentryitem_.uncleentryitem.md)
* [Unconstructable](../classes/_primitive_unconstructable_.unconstructable.md)
* [UnlockChunk](../classes/_type_unlockchunk_.unlockchunk.md)
* [UpwardMessage](_srml_parachains_types_.upwardmessage.md)
* [Usurped](../classes/_rpc_extrinsicstatus_.usurped.md)
* [ValidatorId](../classes/_type_validatorid_.validatorid.md)
* [ValidatorPrefs](../classes/_type_validatorprefs_.validatorprefs.md)
* [ValidityAttestation](_srml_parachains_types_.validityattestation.md)
* [Vector](../classes/_codec_vector_.vector.md)
* [VectorAny](../classes/_codec_vectorany_.vectorany.md)
* [VectorFixed](../classes/_codec_vectorfixed_.vectorfixed.md)
* [VestingSchedule](../classes/_type_vestingschedule_.vestingschedule.md)
* [Vote](../classes/_type_vote_.vote.md)
* [VoteIndex](../classes/_type_voteindex_.voteindex.md)
* [VoteThreshold](../classes/_type_votethreshold_.votethreshold.md)
* [VoterInfo](../classes/_type_voterinfo_.voterinfo.md)
* [Votes](../classes/_type_votes_.votes.md)
* [Weight](../classes/_primitive_weight_.weight.md)
* [WeightMultiplier](../classes/_primitive_weightmultiplier_.weightmultiplier.md)
* [WinningData](_srml_parachains_types_.winningdata.md)
* [WithdrawReasons](../classes/_type_withdrawreasons_.withdrawreasons.md)

## Index

### Properties

* [encodedLength](_types_.codec.md#encodedlength)
* [isEmpty](_types_.codec.md#isempty)

### Methods

* [eq](_types_.codec.md#eq)
* [toHex](_types_.codec.md#tohex)
* [toJSON](_types_.codec.md#tojson)
* [toRawType](_types_.codec.md#torawtype)
* [toString](_types_.codec.md#tostring)
* [toU8a](_types_.codec.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Defined in [types.ts:57](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L57)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  isEmpty

• **isEmpty**: *boolean*

*Defined in [types.ts:62](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L62)*

**`description`** Checks if the value is an empty value

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Defined in [types.ts:67](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L67)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Defined in [types.ts:72](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L72)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L77)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L82)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L87)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Defined in [types.ts:93](https://github.com/polkadot-js/api/blob/657d241/packages/types/src/types.ts#L93)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*