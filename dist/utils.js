"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotEmpty = exports.tuplesToObj = exports.sepAndOptionallySurroundedBy = exports.sepAndSurroundedBy = exports.spaces1ExceptNewline = exports.spacesExceptNewline = exports.spaceExceptNewline = exports.doubleQuotedString = exports.run = void 0;
const P = __importStar(require("parser-ts/lib/Parser"));
const S = __importStar(require("parser-ts/string"));
const C = __importStar(require("parser-ts/char"));
const Stream_1 = require("parser-ts/lib/Stream");
const function_1 = require("fp-ts/function");
function run(p, s) {
    return p(Stream_1.stream(s.split('')));
}
exports.run = run;
exports.doubleQuotedString = P.surroundedBy(C.char('"'))(S.many(P.either(P.either(S.string('\\\\'), () => S.string('\\"')), () => C.notChar('"'))));
exports.spaceExceptNewline = P.expected(function_1.pipe(C.space, P.filter(c => c !== '\n')), 'space except newline');
exports.spacesExceptNewline = C.many(exports.spaceExceptNewline);
exports.spaces1ExceptNewline = C.many1(exports.spaceExceptNewline);
const sepAndSurroundedBy = (sep, p) => P.surroundedBy(sep)(P.sepBy(sep, p));
exports.sepAndSurroundedBy = sepAndSurroundedBy;
const sepAndOptionallySurroundedBy = (sep, p) => exports.sepAndSurroundedBy(P.optional(sep), p);
exports.sepAndOptionallySurroundedBy = sepAndOptionallySurroundedBy;
function tuplesToObj(tuples) {
    const out = {};
    for (const [a, b] of tuples) {
        out[a] = b;
    }
    return out;
}
exports.tuplesToObj = tuplesToObj;
function isNotEmpty(value) {
    return value !== undefined && value !== null;
}
exports.isNotEmpty = isNotEmpty;
//# sourceMappingURL=utils.js.map