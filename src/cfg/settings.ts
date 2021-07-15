import {pipe} from 'fp-ts/lib/function'
import * as P from 'parser-ts/lib/Parser'
import {ParsedConfigFile, SettingName, Value} from './types'
import {sepAndOptionallySurroundedBy, spaces1ExceptNewline} from '../utils'
import {endOfLine} from './constants'
import {setting} from './setting'
import {tuplesToObj, isNotEmpty} from '../utils'
import {ParseResult} from 'parser-ts/ParseResult'
import * as S from 'parser-ts/Stream'

const blankLine: P.Parser<string, null> = pipe(spaces1ExceptNewline, P.map(x => null))

export const settings_ =
    pipe(
        sepAndOptionallySurroundedBy(P.many(endOfLine), P.either(setting, () => blankLine)),
        P.map((x) => {
            const y = x.filter(y => y !== null) as [SettingName, Value][]
            return tuplesToObj(y)
        }),
    ) as P.Parser<string, ParsedConfigFile>

// Note: this hack needs to be removed in order for `mpts_discover_cache` to no longer be inserted out of order into the config.
export const settings: P.Parser<string, ParsedConfigFile> = (i: S.Stream<string>): ParseResult<string, ParsedConfigFile> => {
    const str = i.buffer.join('')
    const [mpts_discover_cache, rest] = extract_mpts_discover_cache(str)
    const parse = settings_(S.stream(rest.split('')))
    if(parse._tag == 'Right' && parse.right.value != undefined && parse.right.value['global_config'] !== undefined) {
        // @ts-ignore
        parse.right.value['global_config']['mpts_discover_cache'] = mpts_discover_cache
    }
    return parse
}

const rx = /\s*mpts_discover_cache\s*=\s*"([^"]*)"\s*;?\s*/
export function extract_mpts_discover_cache(str: string): [mpts_discover_cache: string | undefined, rest_of_cfg: string] {
    const lines = str.split('\n')

    const out: undefined | [string, number] = lines
        .map((line, i) => [rx.exec(line)?.[1], i] as const)
        .filter(([match, i]) => isNotEmpty(match))
        .map(([m, i]) => [m, i] as [string, number])
        ?.[0]

    if(out !== undefined) {
        const _ = lines.splice(out[1], 1)
        return [out[0], lines.join('\n')]
    } else {
        return [undefined, str]
    }
}
