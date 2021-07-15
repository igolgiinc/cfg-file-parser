"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape_1 = require("./escape");
require("@relmify/jest-fp-ts");
const cases = [
    ['a', 'a'],
    ['\\\\', '\\'],
    ['\\f', '\f'],
    ['\\n', '\n'],
    ['\\t', '\t'],
    ['\\r', '\r'],
    ['\\"', '"'],
    ['\\a', 'a'],
    ['\\b', 'b'],
    ['\\c', 'c'],
    ['\\x', 'x'],
    ['\t', '\t'],
    ['\r', '\r'],
    ['\n', '\n'],
    ['\f', '\f'],
    ['\\', ''],
    ['xx\\', 'xx'],
    ['\\\\\f', '\\\f'],
    ['\\\\\f', '\\\f'],
    ['\\\\\\\\', '\\\\'],
];
describe('Correct `value`s', () => test.each(cases)("'%s' %s", (c, exp) => {
    const t = escape_1.escape(c);
    expect(t).toBe(exp);
}));
//# sourceMappingURL=escape.test.js.map