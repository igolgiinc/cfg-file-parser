"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setting_1 = require("./setting");
const test_helpers_1 = require("../test-helpers");
require("@relmify/jest-fp-ts");
const correctCases = [
    ['name = "MPEG2TS Transcoder Configuration"', ['name', 'MPEG2TS Transcoder Configuration']],
    ['name = ""', ['name', '']],
    ['name = "-1"', ['name', '-1']],
    ['name = -1', ['name', -1]],
    ['name = true', ['name', true]],
    ['name = "MPEG2TS Transcoder Configuration"', ['name', 'MPEG2TS Transcoder Configuration']],
    ['name  : true', ['name', true]],
    ['name  : true', ['name', true]],
    ['name  :\n true', ['name', true]],
];
test_helpers_1.testCorrect(correctCases, (x) => test_helpers_1.run(setting_1.setting, x));
const incorrectCases = [
    '',
    'name = "A',
    '-',
    '=',
    '"1',
    'name  "MPEG2TS Transcoder Configuration";',
    ' = "MPEG2TS Transcoder Configuration";',
    '= "MPEG2TS Transcoder Configuration";',
    'name = ;',
    'name = adsf;',
    'name = "adsf;',
    'name = adsf";',
    'nam\\e = adsf";',
    'name = tru;',
    ' name = NaN;',
    'name :: false;',
];
test_helpers_1.testIncorrect(incorrectCases, (x) => test_helpers_1.run(setting_1.setting, x));
//# sourceMappingURL=setting.test.js.map