import {string as str, spaces, spaces1, notSpaces1, int} from 'parser-ts/string'
import * as S from 'parser-ts/string'
import {pipe} from 'fp-ts/lib/function'
import * as P from 'parser-ts/lib/Parser'
import * as C from 'parser-ts/lib/char'
import {sequenceS} from 'fp-ts/lib/Apply';
import {equals} from './constants'
import {value} from './value'
import {Value} from './types'
import {spacesExceptNewline} from '../utils'

const settingName = C.many1(C.alphanum) // don't use "name"

export const setting: P.Parser<string, [string, Value]> =
  pipe(sequenceS(P.parser)({
      name: settingName,
      _1: spacesExceptNewline,
      _2: equals,
      _3: S.spaces, // we allow newlines because they appear in the wild.
      prop: value,
  }),
  P.map(x => [x.name, x.prop]),
  )

