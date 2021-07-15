"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const group_1 = __importDefault(require("./group"));
const test_helpers_1 = require("../test-helpers");
require("@relmify/jest-fp-ts");
const Stream_1 = require("parser-ts/lib/Stream");
const correctCases = [
    ['{}', {}],
    ['{name1 = "A"}', { 'name1': 'A' }],
    ['{name1 = "A";}', { 'name1': 'A' }],
    ['{name1 = "A"\n}', { 'name1': 'A' }],
    ['{name1 = "A"; name2: "B";}', { 'name1': 'A', 'name2': 'B' }],
    ['{name1 = "A" \n name2: "B" \n}', { 'name1': 'A', 'name2': 'B' }],
    ['{name1 = "A"\n name2: "B" \n}', { 'name1': 'A', 'name2': 'B' }],
    ['{name1="A"\nname2:"B"}', { 'name1': 'A', 'name2': 'B' }],
    ['{;name1="A"\nname2:"B";}', { 'name1': 'A', 'name2': 'B' }],
    ['{name1="A" ; name2:"B";;}', { 'name1': 'A', 'name2': 'B' }],
    ['{name1=1\n}', { 'name1': 1 }],
    ['{a = {}}', { a: {} }],
];
test_helpers_1.testCorrect(correctCases, (x) => test_helpers_1.run(group_1.default, x));
const incorrectCases = [
    '{name="A',
    '{name=',
    '{name="1}',
    '{name="1";n}',
    '{name="1"',
    'name="1";n}',
    'name"1";n}',
    'name = "A"',
];
test_helpers_1.testIncorrect(incorrectCases, (x) => test_helpers_1.run(group_1.default, x));
test('', () => {
    expect(group_1.default(Stream_1.stream('a = {}'.split(''), 4))).toSubsetEqualRight({});
});
//# sourceMappingURL=group.test.js.map