import * as P from 'parser-ts/lib/Parser';
import { Value } from './types';
export declare const stringValue: P.Parser<string, Value>;
export declare const numberValue: P.Parser<string, Value>;
export declare const booleanValue: P.Parser<string, Value>;
export declare const value: P.Parser<string, Value>;
export default value;
