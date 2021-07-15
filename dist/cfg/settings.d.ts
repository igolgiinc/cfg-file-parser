import * as P from 'parser-ts/lib/Parser';
import { ParsedConfigFile } from './types';
import '../../types/core-js';
export declare const settings_: P.Parser<string, ParsedConfigFile>;
export declare const settings: P.Parser<string, ParsedConfigFile>;
export declare function extract_mpts_discover_cache(str: string): [mpts_discover_cache: string | undefined, rest_of_cfg: string];
