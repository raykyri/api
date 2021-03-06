// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataInterface } from '../types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';
import { flattenUniq, validateTypes } from '../util';

import { FunctionMetadata } from './Calls';
import { EventMetadata } from './Events';
import { StorageFunctionMetadata } from './Storage';

/**
 * @name ModuleMetadata
 * @description
 * The definition of a module in the system
 */
export class ModuleMetadata extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      prefix: Text,
      storage: Option.with(Vec.with(StorageFunctionMetadata)),
      calls: Option.with(Vec.with(FunctionMetadata)),
      events: Option.with(Vec.with(EventMetadata))
    }, value);
  }

  /**
   * @description the module calls
   */
  public get calls (): Option<Vec<FunctionMetadata>> {
    return this.get('calls') as Option<Vec<FunctionMetadata>>;
  }

  /**
   * @description the module events
   */
  public get events (): Option<Vec<EventMetadata>> {
    return this.get('events') as Option<Vec<EventMetadata>>;
  }

  /**
   * @description the module name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description the module prefix
   */
  public get prefix (): Text {
    return this.get('prefix') as Text;
  }

  /**
   * @description the associated module storage
   */
  public get storage (): Option<Vec<StorageFunctionMetadata>> {
    return this.get('storage') as Option<Vec<StorageFunctionMetadata>>;
  }
}

/**
 * @name MetadataV4
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV4 extends Struct implements MetadataInterface<ModuleMetadata> {
  public constructor (value?: any) {
    super({
      modules: Vec.with(ModuleMetadata)
    }, value);
  }

  /**
   * @description The associated modules for this structure
   */
  public get modules (): Vec<ModuleMetadata> {
    return this.get('modules') as Vec<ModuleMetadata>;
  }

  private get callNames (): string[][][] {
    return this.modules.map((mod): string[][] =>
      mod.calls.isNone
        ? []
        : mod.calls.unwrap().map((fn): string[] =>
          fn.args.map((arg): string => arg.type.toString())
        )
    );
  }

  private get eventNames (): string[][][] {
    return this.modules.map((mod): string[][] =>
      mod.events.isNone
        ? []
        : mod.events.unwrap().map((event): string[] =>
          event.args.map((arg): string => arg.toString())
        )
    );
  }

  private get storageNames (): string[][][] {
    return this.modules.map((mod): string[][] =>
      mod.storage.isNone
        ? []
        : mod.storage.unwrap().map((fn): string[] => {
          if (fn.type.isMap) {
            return [fn.type.asMap.key.toString(), fn.type.asMap.value.toString()];
          } else if (fn.type.isDoubleMap) {
            return [fn.type.asDoubleMap.key1.toString(), fn.type.asDoubleMap.key2.toString(), fn.type.asDoubleMap.value.toString()];
          } else {
            return [fn.type.asType.toString()];
          }
        })
    );
  }

  /**
   * @description Helper to retrieve a list of all type that are found, sorted and de-deuplicated
   */
  public getUniqTypes (throwError: boolean): string[] {
    const types = flattenUniq([this.callNames, this.eventNames, this.storageNames]);

    validateTypes(types, throwError);

    return types;
  }
}
