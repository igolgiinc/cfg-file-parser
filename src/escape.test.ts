import {escape} from './escape'
import '@relmify/jest-fp-ts';

// '\\': '\\',
// f: "\f",
// n: "\n",
// r: "\r",
// t: "\t"
const cases: ([string, string])[] = [
    ['a', 'a'],

    // Escaped sequences
    ['\\\\', '\\'], // "\"
    ['\\f', '\f'], // "\f"
    ['\\n', '\n'], // "\n"
    ['\\t', '\t'], // "\n"
    ['\\r', '\r'], // "\r"
    ['\\"', '"'], // '"'

    // Not escaped sequences.
    ['\\a', 'a'],
    ['\\b', 'b'],
    ['\\c', 'c'],
    ['\\x', 'x'], // Note that "\x" is not supported, contrary to the spec here https://tinyurl.com/ybagvtjx.

    // Actual control character bytes:
    ['\t', '\t'],
    ['\r', '\r'],
    ['\n', '\n'],
    ['\f', '\f'],

    // Unterminated escape sequences
    // The spec doesn't specify how these are to be handled.
    // Assumed to be ignored.
    ['\\', ''],
    ['xx\\', 'xx'],

    ['\\\\\f', '\\\f'],
    ['\\\\\f', '\\\f'],
    ['\\\\\\\\', '\\\\'],
]

describe('Correct `value`s', () =>
    test.each(cases)("'%s' %s", (c, exp) => {
        const t = escape(c)
        expect(t).toBe(exp)
    }),
)
