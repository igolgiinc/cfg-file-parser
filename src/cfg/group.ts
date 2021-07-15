import * as p from 'parser-ts'
import * as S from 'parser-ts/string'
import * as C from 'parser-ts/char'
import {pipe} from 'fp-ts/lib/function'
import * as P from 'parser-ts/lib/Parser'
import {lBracket, rBracket} from './constants'
import {Group, SettingName, Value} from './types'
import {stream} from 'parser-ts/lib/Stream'
import {settings_} from './settings'

const group: p.parser.Parser<string, Group> = P.between(lBracket, rBracket)((s) => {
    // WARNING: passing `settings` directly into the curried call to `between` crashes!
    // This shouldn't happen...
    return settings_(s)
})

export default group


// const q: P.Parser<string, string> = P.between(C.char("{"), C.char("}"))(P.either(C.char("a"), () => q))

// q(stream("{{a}}".split(""))) //?