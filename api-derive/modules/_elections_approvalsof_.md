> # External module: "elections/approvalsOf"

### Index

#### Functions

* [approvalFlagToBool](_elections_approvalsof_.md#approvalflagtobool)
* [approvalsOf](_elections_approvalsof_.md#approvalsof)

## Functions

###  approvalFlagToBool

▸ **approvalFlagToBool**(`flags`: `Vector<ApprovalFlag>`): *boolean[]*

*Defined in [elections/approvalsOf.ts:8](https://github.com/polkadot-js/api/blob/efb38db/packages/api-derive/src/elections/approvalsOf.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`flags` | `Vector<ApprovalFlag>` |

**Returns:** *boolean[]*

___

###  approvalsOf

▸ **approvalsOf**(`api`: `ApiInterfaceRx`): *function*

*Defined in [elections/approvalsOf.ts:19](https://github.com/polkadot-js/api/blob/efb38db/packages/api-derive/src/elections/approvalsOf.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

▸ (`who`: `AccountId`): *`Observable<Vector<ApprovalFlag>>`*

**Parameters:**

Name | Type |
------ | ------ |
`who` | `AccountId` |