// See: https://hyperrealm.github.io/libconfig/libconfig_manual.html#Comments
export type Scalar = string|number|boolean
export type Value = Scalar|Group
export type SettingName = string
export type Group = {[key in SettingName]: Value}
export type List = [Scalar|Group|List]
export type Array_ = Scalar[]
export type ParsedConfigFile = {[key: string]: Value}
