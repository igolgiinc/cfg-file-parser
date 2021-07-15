import {run, testCorrect, testIncorrect} from './test-helpers'
import {doubleQuotedString, spaceExceptNewline, spacesExceptNewline, spaces1ExceptNewline} from './utils'
import '@relmify/jest-fp-ts';
import {stream} from 'parser-ts/lib/Stream';

const doubleQuotedStringCorrectCases: [string, string][] = [
    ['""', ''],
    ['"aa"', 'aa'],
    ['"\\\\"', '\\\\'],
    ['"\\""', '\\"'],
    ['"a\\""', 'a\\"'],
    ['"a\\""   ', 'a\\"'],
]
testCorrect(doubleQuotedStringCorrectCases,  (x: string) => run(doubleQuotedString, x))

const spaceExceptNewlineCorrectCases: [string, string][] = [
    [' ', ' '],
    ['\t', '\t'],
]
testCorrect(spaceExceptNewlineCorrectCases,  (x: string) => run(spaceExceptNewline, x))

const spaceExceptNewlineIncorrectCases: string[] = [
    '\n',
]
testIncorrect(spaceExceptNewlineIncorrectCases,  (x: string) => run(spaceExceptNewline, x))


const spacesExceptNewlineCorrectCases: [string, string][] = [
    [' ', ' '],
    ['  ', '  '],
    ['\t', '\t'],
    ['  \t \n', '  \t '],
    ['\n', ''],
    ['3', ''],
]
testCorrect(spacesExceptNewlineCorrectCases,  (x: string) => run(spacesExceptNewline, x))

const spaces1ExceptNewlineCorrectCases: [string, string][] = [
    [' ', ' '],
    ['  ', '  '],
    ['\t', '\t'],
    ['  \t \n', '  \t '],
]
testCorrect(spaces1ExceptNewlineCorrectCases,  (x: string) => run(spaces1ExceptNewline, x))

const spaces1ExceptNewlineIncorrectCases: string[] = [
    '',
    '\n',
    '3',
    '\n\n!',
]
testIncorrect(spaces1ExceptNewlineIncorrectCases,  (x: string) => run(spaces1ExceptNewline, x))

