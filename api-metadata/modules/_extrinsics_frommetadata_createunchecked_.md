> # External module: "extrinsics/fromMetadata/createUnchecked"

### Index

#### Functions

* [createDescriptor](_extrinsics_frommetadata_createunchecked_.md#createdescriptor)

## Functions

###  createDescriptor

▸ **createDescriptor**(`section`: string, `sectionIndex`: number, `methodIndex`: number, `callMetadata`: `FunctionMetadata`): *`MethodFunction`*

*Defined in [extrinsics/fromMetadata/createUnchecked.ts:19](https://github.com/polkadot-js/api/blob/ff69c43/packages/api-metadata/src/extrinsics/fromMetadata/createUnchecked.ts#L19)*

From the metadata of a function in the module's storage, generate the function
that will return the an [[MethodFunction]].

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`section` | string | Name of the module section. |
`sectionIndex` | number | Index of the module section in the modules array. |
`methodIndex` | number | Index of the method inside the section. |
`callMetadata` | `FunctionMetadata` | Metadata of the call function.  |

**Returns:** *`MethodFunction`*