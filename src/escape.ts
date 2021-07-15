const escapeMap: Record<string, string> = {
    // '\\': '\\',
    // '\"': '\"',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t',
}
export function escape(str: string): string {
    const out: string[] = []
    let escaped = false
    for (let i = 0; i < str.length; i++) {
        const c = str[i]
        if(!escaped && c === '\\') {
            escaped = true
        } else if (escaped) {
            const match = escapeMap[c]
            if(match !== undefined) {
                out.push(match)
            } else {
                out.push(c)
            }
            escaped = false
        } else {
            out.push(c)
        }
    }
    return out.join('')
}