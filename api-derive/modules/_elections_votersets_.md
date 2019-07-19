> # External module: "elections/voterSets"

## Index

### Functions

* [voterSets](_elections_votersets_.md#votersets)

## Functions

###  voterSets

▸ **voterSets**(`api`: `ApiInterfaceRx`): *function*

*Defined in [elections/voterSets.ts:23](https://github.com/polkadot-js/api/blob/d5fb040/packages/api-derive/src/elections/voterSets.ts#L23)*

**`name`** voterSets

**`example`** 
<BR>

```javascript
api.derive.elections.voterSets((voters) => {
  console.log(`ALICE is a voter in the voter set with index ${voters[ALICE].toString()}.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

An mapping of all current voter accounts to their voter set index.

▸ (): *`Observable<Record<string, SetIndex>>`*