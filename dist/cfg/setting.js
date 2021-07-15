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
exports.setting = void 0;
const S = __importStar(require("parser-ts/string"));
const function_1 = require("fp-ts/lib/function");
const P = __importStar(require("parser-ts/lib/Parser"));
const C = __importStar(require("parser-ts/lib/char"));
const Apply_1 = require("fp-ts/lib/Apply");
const constants_1 = require("./constants");
const value_1 = require("./value");
const utils_1 = require("../utils");
const settingName = C.many1(C.alphanum);
exports.setting = function_1.pipe(Apply_1.sequenceS(P.parser)({
    name: settingName,
    _1: utils_1.spacesExceptNewline,
    _2: constants_1.equals,
    _3: S.spaces,
    prop: value_1.value,
}), P.map(x => [x.name, x.prop]));
//# sourceMappingURL=setting.js.map