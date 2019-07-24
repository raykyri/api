> # External module: "elections/voters"

## Index

### Functions

* [voters](_elections_voters_.md#voters)

## Functions

###  voters

▸ **voters**(`api`: `ApiInterfaceRx`): *function*

*Defined in [elections/voters.ts:26](https://github.com/polkadot-js/api/blob/657d241/packages/api-derive/src/elections/voters.ts#L26)*

**`name`** voters

**`example`** 
<BR>

```javascript
api.derive.elections.voters((voters) => {
  console.log(`There are ${voters.length} current voters.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

An array of all current voters from all sets.

▸ (): *`Observable<Vector<AccountId>>`*