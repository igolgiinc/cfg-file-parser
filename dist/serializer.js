"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = void 0;
function serialize(c, includeBrackets = false, indent = 0) {
    const out = [];
    const indentKeys = ' '.repeat(4 * indent);
    const indentBrackets = ' '.repeat(4 * Math.max(0, indent - 1));
    if (typeof c === 'object') {
        if (includeBrackets)
            out.push(`\n${indentBrackets}{`);
        for (const key of Object.keys(c)) {
            const value = c[key];
            const separator = typeof value === 'object' ? ':' : ' = ';
            out.push(`${indentKeys}${key}${separator}${serialize(value, true, indent + 1)};`);
        }
        if (includeBrackets)
            out.push(`${indentBrackets}}`);
    }
    else {
        out.push(JSON.stringify(c));
    }
    return out.join('\n');
}
exports.serialize = serialize;
//# sourceMappingURL=serializer.js.map