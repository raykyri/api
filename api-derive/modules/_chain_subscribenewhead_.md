> # External module: "chain/subscribeNewHead"

## Index

### Type aliases

* [HeaderAndValidators](_chain_subscribenewhead_.md#headerandvalidators)

### Functions

* [subscribeNewHead](_chain_subscribenewhead_.md#subscribenewhead)

## Type aliases

###  HeaderAndValidators

Ƭ **HeaderAndValidators**: *[`Header`, `AccountId`[]]*

*Defined in [chain/subscribeNewHead.ts:13](https://github.com/polkadot-js/api/blob/37af934/packages/api-derive/src/chain/subscribeNewHead.ts#L13)*

## Functions

###  subscribeNewHead

▸ **subscribeNewHead**(`api`: `ApiInterfaceRx`): *function*

*Defined in [chain/subscribeNewHead.ts:28](https://github.com/polkadot-js/api/blob/37af934/packages/api-derive/src/chain/subscribeNewHead.ts#L28)*

**`name`** subscribeNewHead

**`description`** An observable of the current block header and it's author

**`example`** 
<BR>

```javascript
api.derive.chain.subscribeNewHead(({ author, blockNumber }) => {
  console.log(`block #${blockNumber} was authored by ${author}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

An array containing the block header and the block author

▸ (): *`Observable<HeaderExtended>`*