import * as S from 'parser-ts/string'
import {pipe} from 'fp-ts/lib/function'
import * as P from 'parser-ts/lib/Parser'
import * as C from 'parser-ts/char'
import {escape} from '../escape'
import {doubleQuotedString} from '../utils'
import group from './group'
import {Value} from './types'

export const stringValue = pipe(doubleQuotedString, P.map(s => escape(s) as Value))
export const numberValue: P.Parser<string, Value> = P.either(S.float, () => S.int)
export const booleanValue: P.Parser<string, Value> = pipe(P.either(S.string('true'), () => S.string('false')), P.map(x => x === 'true'))

// export const value: P.Parser<string, Value> = several(
//     stringValue,
//     numberValue,
//     booleanValue,
//     group,
// )
import {lBracket, rBracket} from './constants'

export const value: P.Parser<string, Value> =
P.either(stringValue,
    () => P.either(numberValue,
        () => P.either(booleanValue,
            () => (s) => {
                if(s.buffer.join('') == 'a = {}') {
                    P.between(lBracket, rBracket)(S.spaces)(s)
                    group(s)
                }
                return group(s)
            })))

// export const value: P.Parser<string, Value> =
// P.either(
//     P.either(P.either(stringValue,
//         () => numberValue),
//     () => booleanValue),
//     () => group)

export default value


