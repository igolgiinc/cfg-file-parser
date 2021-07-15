"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testIncorrect = exports.testCorrect = exports.run = void 0;
var utils_1 = require("./utils");
Object.defineProperty(exports, "run", { enumerable: true, get: function () { return utils_1.run; } });
function testCorrect(cases, func) {
    if (cases.length > 0) {
        test.each(cases)("'%s' %s", (c, exp) => {
            const res = func(c);
            expect(res).toBeRight();
            if (res._tag == 'Right') {
                expect(res.right.value).toStrictEqual(exp);
            }
        });
    }
}
exports.testCorrect = testCorrect;
function testIncorrect(cases, func) {
    if (cases.length > 0) {
        test.each(cases)("'%s' %s", (c) => {
            expect(func(c)).toBeLeft();
        });
    }
}
exports.testIncorrect = testIncorrect;
//# sourceMappingURL=test-helpers.js.map