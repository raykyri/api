// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';
import U16 from '../../primitive/U16';

export class OuterDispatchCall extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      prefix: Text,
      index: U16
    }, value);
  }

  /**
   * @description The [[U16]] index for the call
   */
  public get index (): U16 {
    return this.get('index') as U16;
  }

  /**
   * @description The name for the call
   */
  public get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The call prefix (or section)
   */
  public get prefix (): Text {
    return this.get('prefix') as Text;
  }
}

export class OuterDispatchMetadata extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      calls: Vec.with(OuterDispatchCall)
    }, value);
  }

  /**
   * @description The [[OuterDispathCall]] wrapped
   */
  public get calls (): Vec<OuterDispatchCall> {
    return this.get('calls') as Vec<OuterDispatchCall>;
  }

  /**
   * @description The name for the dispatch
   */
  public get name (): Text {
    return this.get('name') as Text;
  }
}
