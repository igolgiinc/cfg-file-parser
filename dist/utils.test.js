"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helpers_1 = require("./test-helpers");
const utils_1 = require("./utils");
require("@relmify/jest-fp-ts");
const doubleQuotedStringCorrectCases = [
    ['""', ''],
    ['"aa"', 'aa'],
    ['"\\\\"', '\\\\'],
    ['"\\""', '\\"'],
    ['"a\\""', 'a\\"'],
    ['"a\\""   ', 'a\\"'],
];
test_helpers_1.testCorrect(doubleQuotedStringCorrectCases, (x) => test_helpers_1.run(utils_1.doubleQuotedString, x));
const spaceExceptNewlineCorrectCases = [
    [' ', ' '],
    ['\t', '\t'],
];
test_helpers_1.testCorrect(spaceExceptNewlineCorrectCases, (x) => test_helpers_1.run(utils_1.spaceExceptNewline, x));
const spaceExceptNewlineIncorrectCases = [
    '\n',
];
test_helpers_1.testIncorrect(spaceExceptNewlineIncorrectCases, (x) => test_helpers_1.run(utils_1.spaceExceptNewline, x));
const spacesExceptNewlineCorrectCases = [
    [' ', ' '],
    ['  ', '  '],
    ['\t', '\t'],
    ['  \t \n', '  \t '],
    ['\n', ''],
    ['3', ''],
];
test_helpers_1.testCorrect(spacesExceptNewlineCorrectCases, (x) => test_helpers_1.run(utils_1.spacesExceptNewline, x));
const spaces1ExceptNewlineCorrectCases = [
    [' ', ' '],
    ['  ', '  '],
    ['\t', '\t'],
    ['  \t \n', '  \t '],
];
test_helpers_1.testCorrect(spaces1ExceptNewlineCorrectCases, (x) => test_helpers_1.run(utils_1.spaces1ExceptNewline, x));
const spaces1ExceptNewlineIncorrectCases = [
    '',
    '\n',
    '3',
    '\n\n!',
];
test_helpers_1.testIncorrect(spaces1ExceptNewlineIncorrectCases, (x) => test_helpers_1.run(utils_1.spaces1ExceptNewline, x));
//# sourceMappingURL=utils.test.js.map