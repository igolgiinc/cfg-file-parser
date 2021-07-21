"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = exports.run = exports.parser = void 0;
var file_1 = require("./cfg/file");
Object.defineProperty(exports, "parser", { enumerable: true, get: function () { return file_1.parser; } });
var utils_1 = require("./utils");
Object.defineProperty(exports, "run", { enumerable: true, get: function () { return utils_1.run; } });
var serializer_1 = require("./serializer");
Object.defineProperty(exports, "serialize", { enumerable: true, get: function () { return serializer_1.serialize; } });
__exportStar(require("./cfg/types"), exports);
//# sourceMappingURL=index.js.map