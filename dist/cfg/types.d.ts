export declare type Scalar = string | number | boolean;
export declare type Value = Scalar | Group;
export declare type SettingName = string;
export declare type Group = {
    [key in SettingName]: Value;
};
export declare type List = [Scalar | Group | List];
export declare type Array_ = Scalar[];
export declare type ParsedConfigFile = {
    [key: string]: Value;
};
