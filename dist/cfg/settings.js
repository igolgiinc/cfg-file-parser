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
exports.extract_mpts_discover_cache = exports.settings = exports.settings_ = void 0;
const function_1 = require("fp-ts/lib/function");
const P = __importStar(require("parser-ts/lib/Parser"));
const utils_1 = require("../utils");
const constants_1 = require("./constants");
const setting_1 = require("./setting");
const utils_2 = require("../utils");
const S = __importStar(require("parser-ts/Stream"));
const blankLine = function_1.pipe(utils_1.spaces1ExceptNewline, P.map(x => null));
exports.settings_ = function_1.pipe(utils_1.sepAndOptionallySurroundedBy(P.many(constants_1.endOfLine), P.either(setting_1.setting, () => blankLine)), P.map((x) => {
    const y = x.filter(y => y !== null);
    return utils_2.tuplesToObj(y);
}));
const settings = (i) => {
    const str = i.buffer.join('');
    const [mpts_discover_cache, rest] = extract_mpts_discover_cache(str);
    const parse = exports.settings_(S.stream(rest.split('')));
    if (parse._tag == 'Right' && parse.right.value != undefined && parse.right.value['global_config'] !== undefined) {
        parse.right.value['global_config']['mpts_discover_cache'] = mpts_discover_cache;
    }
    return parse;
};
exports.settings = settings;
const rx = /\s*mpts_discover_cache\s*=\s*"([^"]*)"\s*;?\s*/;
function extract_mpts_discover_cache(str) {
    const lines = str.split('\n');
    const out = lines
        .map((line, i) => [rx.exec(line)?.[1], i])
        .filter(([match, i]) => utils_2.isNotEmpty(match))
        .map(([m, i]) => [m, i])?.[0];
    if (out !== undefined) {
        const _ = lines.splice(out[1], 1);
        return [out[0], lines.join('\n')];
    }
    else {
        return [undefined, str];
    }
}
exports.extract_mpts_discover_cache = extract_mpts_discover_cache;
//# sourceMappingURL=settings.js.map