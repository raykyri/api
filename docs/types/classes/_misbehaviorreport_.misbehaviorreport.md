

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ MisbehaviorReport**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MisbehaviorReport**(value?: *`MisbehaviorReportValue`*): [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [MisbehaviorReport.ts:72](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/MisbehaviorReport.ts#L72)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `MisbehaviorReportValue` |

**Returns:** [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

___

# Properties

<a id="_types"></a>

## `<Protected>` _Types

**● _Types**: *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[_Types](_codec_struct_.struct.md#_types)*

*Defined in [codec/Struct.ts:28](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L28)*

___
<a id="_jsonmap"></a>

## `<Protected>` _jsonMap

**● _jsonMap**: *`Map`<`keyof S`, `string`>*

*Inherited from [Struct](_codec_struct_.struct.md).[_jsonMap](_codec_struct_.struct.md#_jsonmap)*

*Defined in [codec/Struct.ts:27](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L27)*

___
<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:77](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L77)*

**Returns:** `E`

___
<a id="misbehavior"></a>

##  misbehavior

getmisbehavior(): [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

*Defined in [MisbehaviorReport.ts:82](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/MisbehaviorReport.ts#L82)*

**Returns:** [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

___
<a id="parenthash"></a>

##  parentHash

getparentHash(): [Hash](_hash_.hash.md)

*Defined in [MisbehaviorReport.ts:86](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/MisbehaviorReport.ts#L86)*

**Returns:** [Hash](_hash_.hash.md)

___
<a id="parentnumber"></a>

##  parentNumber

getparentNumber(): [BlockNumber](_blocknumber_.blocknumber.md)

*Defined in [MisbehaviorReport.ts:90](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/MisbehaviorReport.ts#L90)*

**Returns:** [BlockNumber](_blocknumber_.blocknumber.md)

___
<a id="target"></a>

##  target

gettarget(): [AuthorityId](_authorityid_.authorityid.md)

*Defined in [MisbehaviorReport.ts:94](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/MisbehaviorReport.ts#L94)*

**Returns:** [AuthorityId](_authorityid_.authorityid.md)

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[byteLength](_codec_struct_.struct.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Struct.ts:81](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L81)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Inherited from [Struct](_codec_struct_.struct.md).[fromJSON](_codec_struct_.struct.md#fromjson)*

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Struct.ts:87](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L87)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Inherited from [Struct](_codec_struct_.struct.md).[fromU8a](_codec_struct_.struct.md#fromu8a)*

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/Struct.ts:107](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L107)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L117)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Base](_codec_base_.base.md)

___
<a id="keys"></a>

##  keys

▸ **keys**(): `Array`<`string`>

*Inherited from [Struct](_codec_struct_.struct.md).[keys](_codec_struct_.struct.md#keys)*

*Defined in [codec/Struct.ts:132](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L132)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:121](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L121)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:144](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L144)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:136](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L136)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `Array`<[Base](_codec_base_.base.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[values](_codec_struct_.struct.md#values)*

*Defined in [codec/Struct.ts:153](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L153)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decode"></a>

## `<Static>` decode

▸ **decode**<`S`,`V`,`T`>(Types: *`S`*, value: * `V` &#124; `Array`<`any`>*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decode](_codec_struct_.struct.md#decode)*

*Defined in [codec/Struct.ts:46](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L46)*

**Type parameters:**

#### S 
#### V 
#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |
| value |  `V` &#124; `Array`<`any`>|

**Returns:** `T`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `object`

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:67](https://github.com/polkadot-js/api/blob/32f491e/packages/types/src/codec/Struct.ts#L67)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `object`

___
