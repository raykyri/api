// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash, Index } from '../../../interfaces/runtime';
import { AnyNumber, AnyU8a, ExtrinsicPayloadValue, IExtrinsicEra, IKeyringPair, IMethod } from '../../../types';

import { ClassOf } from '../../../codec/createType';
import Compact from '../../../codec/Compact';
import Struct from '../../../codec/Struct';
import U8a from '../../../codec/U8a';
import ExtrinsicEra from '../ExtrinsicEra';
import { sign } from '../util';

export interface ExtrinsicPayloadValueV1 {
  blockHash: AnyU8a;
  era: AnyU8a | IExtrinsicEra;
  method: AnyU8a | IMethod;
  nonce: AnyNumber;
}

/**
 * @name ExtrinsicPayloadV1
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 *
 *   1-8 bytes: The Transaction Compact<Index/Nonce> as provided in the transaction itself.
 *   2+ bytes: The Function Descriptor as provided in the transaction itself.
 *   1/2 bytes: The Transaction Era as provided in the transaction itself.
 *   32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.
 */
export default class ExtrinsicPayloadV1 extends Struct {
  public constructor (value?: ExtrinsicPayloadValue | ExtrinsicPayloadValueV1 | Uint8Array | string) {
    super({
      nonce: ClassOf('Compact<Index>'),
      method: U8a,
      era: ExtrinsicEra,
      blockHash: ClassOf('Hash')
    }, value);
  }

  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): Hash {
    return this.get('blockHash') as Hash;
  }

  /**
   * @description The [[U8a]] contained in the payload
   */
  public get method (): U8a {
    return this.get('method') as U8a;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[Index]]
   */
  public get nonce (): Compact<Index> {
    return this.get('nonce') as Compact<Index>;
  }

  /**
   * @description Sign the payload with the keypair
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public sign (signerPair: IKeyringPair): Uint8Array {
    return sign(signerPair, this.toU8a());
  }
}
