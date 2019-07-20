> # External module: "Metadata/util/testUtil"

## Index

### Functions

* [decodeLatestSubstrate](_metadata_util_testutil_.md#decodelatestsubstrate)
* [defaultValues](_metadata_util_testutil_.md#defaultvalues)
* [toV6](_metadata_util_testutil_.md#tov6)

## Functions

###  decodeLatestSubstrate

▸ **decodeLatestSubstrate**<**Modules**>(`version`: number, `rpcData`: string, `latestSubstrate`: object): *void*

*Defined in [Metadata/util/testUtil.ts:25](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/Metadata/util/testUtil.ts#L25)*

Given the static `rpcData` and the `latestSubstrate` JSON file, Metadata
should decode `rpcData` and output `latestSubstrate`.

**Type parameters:**

▪ **Modules**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |
`rpcData` | string |
`latestSubstrate` | object |

**Returns:** *void*

___

###  defaultValues

▸ **defaultValues**(`rpcData`: string): *void*

*Defined in [Metadata/util/testUtil.ts:63](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/Metadata/util/testUtil.ts#L63)*

Given a Metadata, no type should throw when given its fallback value.

**Parameters:**

Name | Type |
------ | ------ |
`rpcData` | string |

**Returns:** *void*

___

###  toV6

▸ **toV6**<**Modules**>(`version`: number, `rpcData`: string): *void*

*Defined in [Metadata/util/testUtil.ts:47](https://github.com/polkadot-js/api/blob/5e0f62c/packages/types/src/Metadata/util/testUtil.ts#L47)*

Given a `version`, MetadataV6 and MetadataV{version} should output the same
unique types.

**Type parameters:**

▪ **Modules**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |
`rpcData` | string |

**Returns:** *void*