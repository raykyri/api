> # Interface: SignerPayload

## Hierarchy

* **SignerPayload**

## Index

### Properties

* [address](_types_.signerpayload.md#address)
* [blockHash](_types_.signerpayload.md#blockhash)
* [blockNumber](_types_.signerpayload.md#blocknumber)
* [era](_types_.signerpayload.md#era)
* [genesisHash](_types_.signerpayload.md#genesishash)
* [method](_types_.signerpayload.md#method)
* [nonce](_types_.signerpayload.md#nonce)
* [tip](_types_.signerpayload.md#tip)
* [version](_types_.signerpayload.md#version)

## Properties

###  address

• **address**: *string*

*Defined in [types.ts:236](https://github.com/polkadot-js/api/blob/79e5f7c/packages/api/src/types.ts#L236)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [types.ts:241](https://github.com/polkadot-js/api/blob/79e5f7c/packages/api/src/types.ts#L241)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [types.ts:246](https://github.com/polkadot-js/api/blob/79e5f7c/packages/api/src/types.ts#L246)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [types.ts:251](https://github.com/polkadot-js/api/blob/79e5f7c/packages/api/src/types.ts#L251)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [types.ts:256](https://github.com/polkadot-js/api/blob/79e5f7c/packages/api/src/types.ts#L256)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [types.ts:261](https://github.com/polkadot-js/api/blob/79e5f7c/packages/api/src/types.ts#L261)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [types.ts:266](https://github.com/polkadot-js/api/blob/79e5f7c/packages/api/src/types.ts#L266)*

**`description`** The nonce for this transaction, in hex

___

###  tip

• **tip**: *string*

*Defined in [types.ts:271](https://github.com/polkadot-js/api/blob/79e5f7c/packages/api/src/types.ts#L271)*

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Defined in [types.ts:276](https://github.com/polkadot-js/api/blob/79e5f7c/packages/api/src/types.ts#L276)*

**`description`** The version of the extrinsic we are dealing with