import * as C from 'parser-ts/char'
import * as P from 'parser-ts/Parser'

// const eofStr = pipe(P.eof<string>(), P.map(() => ""))

export const lBracket = C.char('{')
export const rBracket = C.char('}')
export const equals = P.either(C.char('='), () => C.char(':'))
export const endOfLine = P.either(C.char('\n'), () => C.char(';')) // don't add `eofStr`!
export const hash = C.char('#')
