"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const value_1 = __importDefault(require("./value"));
const test_helpers_1 = require("../test-helpers");
require("@relmify/jest-fp-ts");
const correctCases = [
    ['""', ''],
    ['"1"', '1'],
    ['"/"', '/'],
    ['"\a"', '\a'],
    ['"\b"', '\b'],
    ['"\\f"', '\f'],
    ['"\\n"', '\n'],
    ['"\\t"', '\t'],
    ['"\\r"', '\r'],
    ['"\\a"', 'a'],
    ['"\\b"', 'b'],
    ['"\\c"', 'c'],
    ['"\\x"', 'x'],
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
];
test_helpers_1.testCorrect(correctCases, (x) => test_helpers_1.run(value_1.default, x));
const incorrectCases = [
    '',
    '-',
    'f',
    't',
    'tru',
    'True',
    'False',
    '"1',
    '\\',
    'a\\',
    '...\\',
    '"\\\\\\"',
];
test_helpers_1.testIncorrect(incorrectCases, (x) => test_helpers_1.run(value_1.default, x));
//# sourceMappingURL=value.test.js.map