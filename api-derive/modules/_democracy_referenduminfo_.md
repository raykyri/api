> # External module: "democracy/referendumInfo"

### Index

#### Functions

* [constructInfo](_democracy_referenduminfo_.md#constructinfo)
* [referendumInfo](_democracy_referenduminfo_.md#referenduminfo)

## Functions

###  constructInfo

▸ **constructInfo**(`index`: `BN` | number, `optionInfo?`: `Option<ReferendumInfo>`): *`Option<ReferendumInfoExtended>`*

*Defined in [democracy/referendumInfo.ts:15](https://github.com/polkadot-js/api/blob/0196829/packages/api-derive/src/democracy/referendumInfo.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | `BN` \| number |
`optionInfo?` | `Option<ReferendumInfo>` |

**Returns:** *`Option<ReferendumInfoExtended>`*

___

###  referendumInfo

▸ **referendumInfo**(`api`: `ApiInterfaceRx`): *function*

*Defined in [democracy/referendumInfo.ts:28](https://github.com/polkadot-js/api/blob/0196829/packages/api-derive/src/democracy/referendumInfo.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

▸ (`index`: `BN` | number): *`Observable<Option<ReferendumInfoExtended>>`*

**Parameters:**

Name | Type |
------ | ------ |
`index` | `BN` \| number |