// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a } from '../types';

import U8aFixed from '../codec/U8aFixed';

/**
 * @name H128
 * @description
 * Hash containing 128 bits (32 bytes), catering for replacing blake2_256 with 128 bytes
 * https://github.com/paritytech/substrate/pull/2268/files
 */
export default class H128 extends U8aFixed {
  constructor (value?: AnyU8a) {
    super(value, 128);
  }
}
