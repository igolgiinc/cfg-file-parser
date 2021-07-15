"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escape = void 0;
const escapeMap = {
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t',
};
function escape(str) {
    const out = [];
    let escaped = false;
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (!escaped && c === '\\') {
            escaped = true;
        }
        else if (escaped) {
            const match = escapeMap[c];
            if (match !== undefined) {
                out.push(match);
            }
            else {
                out.push(c);
            }
            escaped = false;
        }
        else {
            out.push(c);
        }
    }
    return out.join('');
}
exports.escape = escape;
//# sourceMappingURL=escape.js.map