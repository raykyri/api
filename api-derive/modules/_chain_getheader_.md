> # External module: "chain/getHeader"

## Index

### Functions

* [getHeader](_chain_getheader_.md#getheader)

## Functions

###  getHeader

▸ **getHeader**(`api`: `ApiInterfaceRx`): *function*

*Defined in [chain/getHeader.ts:28](https://github.com/polkadot-js/api/blob/37022d2/packages/api-derive/src/chain/getHeader.ts#L28)*

**`name`** bestNumberFinalized

**`description`** Get a specific block header and extend it with the author

**`example`** 
<BR>

```javascript
const { author, blockNumber } = await api.derive.chain.getHeader('0x123...456');

console.log(`block #${blockNumber} was authored by ${author}`);
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

An array containing the block header and the block author

▸ (`hash`: `Uint8Array` | string): *`Observable<HeaderExtended | undefined>`*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | `Uint8Array` \| string | A block hash as U8 array or string. |