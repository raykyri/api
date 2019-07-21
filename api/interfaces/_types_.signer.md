> # Interface: Signer

## Hierarchy

* **Signer**

## Index

### Properties

* [update](_types_.signer.md#optional-update)

### Methods

* [sign](_types_.signer.md#sign)

## Properties

### `Optional` update

• **update**? : *undefined | function*

*Defined in [types.ts:240](https://github.com/polkadot-js/api/blob/3d7a460/packages/api/src/types.ts#L240)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`

## Methods

###  sign

▸ **sign**(`extrinsic`: `IExtrinsic`, `address`: string, `options`: [SignerOptions](_types_.signeroptions.md)): *`Promise<number>`*

*Defined in [types.ts:235](https://github.com/polkadot-js/api/blob/3d7a460/packages/api/src/types.ts#L235)*

**`description`** Signs an extrinsic, returning an id (>0) that can be used to retrieve updates

**Parameters:**

Name | Type |
------ | ------ |
`extrinsic` | `IExtrinsic` |
`address` | string |
`options` | [SignerOptions](_types_.signeroptions.md) |

**Returns:** *`Promise<number>`*