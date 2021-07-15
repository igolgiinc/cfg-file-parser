import {Char} from 'parser-ts/char'
import {ParseResult} from 'parser-ts/ParseResult'
import {stream} from 'parser-ts/Stream'
import {Parser} from 'parser-ts/Parser'

export {run} from './utils'

export function testCorrect<I, O>(cases: [I, O][], func: (_: I) => ParseResult<any, O>): void {
    if(cases.length > 0) {
        test.each(cases)("'%s' %s", (c, exp) => {
            const res = func(c)
            expect(res).toBeRight()
            if(res._tag == 'Right') {
                expect(res.right.value).toStrictEqual(exp)
            }
        })
    }
}

export function testIncorrect<I, O>(cases: I[], func: (_: I) => ParseResult<any, O>): void {
    if(cases.length > 0) {
        test.each(cases)("'%s' %s", (c) => {
            expect(func(c)).toBeLeft()
        })
    }
}