import * as P from 'parser-ts/lib/Parser';
import * as C from 'parser-ts/char';
import { ParseResult } from 'parser-ts/ParseResult';
export declare function run<A>(p: P.Parser<C.Char, A>, s: string): ParseResult<C.Char, A>;
export declare const doubleQuotedString: P.Parser<string, string>;
export declare const spaceExceptNewline: P.Parser<C.Char, C.Char>;
export declare const spacesExceptNewline: P.Parser<C.Char, string>;
export declare const spaces1ExceptNewline: P.Parser<C.Char, string>;
export declare const sepAndSurroundedBy: <I, A, B>(sep: P.Parser<I, A>, p: P.Parser<I, B>) => P.Parser<I, B[]>;
export declare const sepAndOptionallySurroundedBy: <I, A, B>(sep: P.Parser<I, A>, p: P.Parser<I, B>) => P.Parser<I, B[]>;
export declare function tuplesToObj<A extends string | number, B>(tuples: [A, B][]): {
    [key in A]: B;
};
export declare function isNotEmpty<TValue>(value: TValue | undefined | null): value is TValue;
