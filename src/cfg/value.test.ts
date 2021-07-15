/* eslint no-useless-escape: "off"*/
import value from './value'
import {Value} from './types'
import {run, testCorrect, testIncorrect} from '../test-helpers'
import '@relmify/jest-fp-ts';

const correctCases: ([string, Value])[] = [
    // Strings
    ['""', ''],
    ['"1"', '1'],
    ['"/"', '/'],

    // These escape sequences should not be escaped

    ['"\a"', '\a'], // this is just "a"
    ['"\b"', '\b'], // this is just "b"

    // Escaped sequences
    ['"\\f"', '\f'], // "\f"
    ['"\\n"', '\n'], // "\n"
    ['"\\t"', '\t'], // "\n"
    ['"\\r"', '\r'], // "\r"

    // Not escaped sequences.
    ['"\\a"', 'a'],
    ['"\\b"', 'b'],
    ['"\\c"', 'c'],
    ['"\\x"', 'x'], // Note that "\x" is not supported, contrary to the spec here https://tinyurl.com/ybagvtjx.

    // booleans
    ['true', true],
    ['false', false],

    ['"a\\"b"', 'a\"b'],
    ['"a\\""', 'a\"'],
    ['"a\\b"', 'ab'],
    ['"\\a"', '\a'],
    ['"\\\\"', '\\'],
    ['"\\\\a"', '\\a'],
    ['"\\\\\\\\"', '\\\\'],
    ['"\\\\\\\\a"', '\\\\a'],
    ['"\\\\x\\\\a"', '\\x\\a'],
    ['1', 1],
    ['12.1', 12.1],
]
testCorrect(correctCases, (x: string) => run(value, x))


const incorrectCases:string[] = [
    '',
    '-',
    // Booleans
    'f',
    't',
    'tru',
    'True',
    'False',
    '"1',

    // The `doubleQuotedString` function of parser-ts treats unterminated escape squences as errors.
    '\\',
    'a\\',
    '...\\',
    '"\\\\\\"', // the right-most \ escapes the rhs double quote
]
testIncorrect(incorrectCases, (x: string) => run(value, x))
