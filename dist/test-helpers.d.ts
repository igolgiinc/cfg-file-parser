import { ParseResult } from 'parser-ts/ParseResult';
export { run } from './utils';
export declare function testCorrect<I, O>(cases: [I, O][], func: (_: I) => ParseResult<any, O>): void;
export declare function testIncorrect<I, O>(cases: I[], func: (_: I) => ParseResult<any, O>): void;
