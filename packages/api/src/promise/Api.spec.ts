// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Mock from '@polkadot/rpc-provider/mock/index';
import { createType } from '@polkadot/types';

import { ApiPromise } from '..';
import { ApiOptions } from '../types';

describe('Metadata queries', (): void => {
  let mock: Mock;

  beforeEach((): void => {
    jest.setTimeout(3000000);
    mock = new Mock();
  });

  it('Create API instance with metadata map and makes the runtime, rpc, state & extrinsics available', async (): Promise<void> => {
    const rpcData = await mock.send('state_getMetadata', []);
    const genesisHash = createType('Hash', await mock.send('chain_getBlockHash', [])).toHex();
    const specVersion = 0;
    const metadata: any = {};
    const key = `${genesisHash}-${specVersion}`;
    metadata[key] = rpcData;
    const api = await ApiPromise.create({ provider: mock, metadata } as unknown as ApiOptions);

    expect(api.genesisHash).toBeDefined();
    expect(api.runtimeMetadata).toBeDefined();
    expect(api.runtimeVersion).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.query).toBeDefined();
    expect(api.tx).toBeDefined();
    expect(api.derive).toBeDefined();
  });

  it('Create API instance without metadata and makes the runtime, rpc, state & extrinsics available', async (): Promise<void> => {
    const metadata = {};
    const api = await ApiPromise.create({
      provider: mock, metadata
    });

    expect(api.genesisHash).toBeDefined();
    expect(api.runtimeMetadata).toBeDefined();
    expect(api.runtimeVersion).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.query).toBeDefined();
    expect(api.tx).toBeDefined();
    expect(api.derive).toBeDefined();
  });
});
