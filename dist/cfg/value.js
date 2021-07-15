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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.value = exports.booleanValue = exports.numberValue = exports.stringValue = void 0;
const S = __importStar(require("parser-ts/string"));
const function_1 = require("fp-ts/lib/function");
const P = __importStar(require("parser-ts/lib/Parser"));
const escape_1 = require("../escape");
const utils_1 = require("../utils");
const group_1 = __importDefault(require("./group"));
exports.stringValue = function_1.pipe(utils_1.doubleQuotedString, P.map(s => escape_1.escape(s)));
exports.numberValue = P.either(S.float, () => S.int);
exports.booleanValue = function_1.pipe(P.either(S.string('true'), () => S.string('false')), P.map(x => x === 'true'));
const constants_1 = require("./constants");
exports.value = P.either(exports.stringValue, () => P.either(exports.numberValue, () => P.either(exports.booleanValue, () => (s) => {
    if (s.buffer.join('') == 'a = {}') {
        P.between(constants_1.lBracket, constants_1.rBracket)(S.spaces)(s);
        group_1.default(s);
    }
    return group_1.default(s);
})));
exports.default = exports.value;
//# sourceMappingURL=value.js.map