import {setting} from './setting'
import {left, right} from 'fp-ts/Either'
import {run, testCorrect, testIncorrect} from '../test-helpers'
import '@relmify/jest-fp-ts';
import {Value} from './types'

const correctCases: ([string, [string, Value]])[] = [
    ['name = "MPEG2TS Transcoder Configuration"', ['name', 'MPEG2TS Transcoder Configuration']],
    ['name = ""', ['name', '']],
    ['name = "-1"', ['name', '-1']],
    ['name = -1', ['name', -1]],
    ['name = true', ['name', true]],

    ['name = "MPEG2TS Transcoder Configuration"', ['name', 'MPEG2TS Transcoder Configuration']],
    ['name  : true', ['name', true]],
    ['name  : true', ['name', true]],
    ['name  :\n true', ['name', true]],
]
testCorrect(correctCases, (x: string) => run(setting, x))

const incorrectCases:string[] = [
    '',
    'name = "A',
    '-',
    '=',
    '"1',
    'name  "MPEG2TS Transcoder Configuration";', // no =
    ' = "MPEG2TS Transcoder Configuration";', // no name
    '= "MPEG2TS Transcoder Configuration";', // no name
    'name = ;', // no value
    'name = adsf;', // value not in double quotes
    'name = "adsf;', // value not fully quoted
    'name = adsf";', // value not fully quoted
    'nam\\e = adsf";', // forbidden characters in name
    'name = tru;', // cut off `true`
    ' name = NaN;', // NaN
    'name :: false;',
]
testIncorrect(incorrectCases, (x: string) => run(setting, x))
