import * as P from 'parser-ts/lib/Parser'
import * as S from 'parser-ts/string'
import * as C from 'parser-ts/char'
import {stream} from 'parser-ts/lib/Stream'
import {pipe} from 'fp-ts/function'
import {ParseResult} from 'parser-ts/ParseResult'

// export function several<I, A>(p1: P.Parser<I, A>, p2: P.Parser<I, A>, ...rest: P.Parser<I, A>[]): P.Parser<I, A> {
//     return [p1, p2, ...rest].reduce((acc, cur) => P.either(acc, () => cur))
// }


export function run<A>(p: P.Parser<C.Char, A>, s: string): ParseResult<C.Char, A> {
    return p(stream(s.split('')))
}

export const doubleQuotedString: P.Parser<string, string> = P.surroundedBy(C.char('"'))(
    S.many(
        P.either(
            P.either(
                S.string('\\\\'), // difference between this version and the `parser-ts` supplied version.
                () => S.string('\\"')),
            () => C.notChar('"')),
    ),
)

// P.seq(C.space, (s) => s == "\n" ? P.fail() : P.succeed(s))
export const spaceExceptNewline: P.Parser<C.Char, C.Char> =
P.expected(
    pipe(
        C.space,
        P.filter(c => c !== '\n'),
    ),
    'space except newline',
)

export const spacesExceptNewline: P.Parser<C.Char, string> = C.many(spaceExceptNewline)
export const spaces1ExceptNewline: P.Parser<C.Char, string> = C.many1(spaceExceptNewline)

export const sepAndSurroundedBy: <I, A, B>(sep: P.Parser<I, A>, p: P.Parser<I, B>) => P.Parser<I, B[]> =
    (sep, p) => P.surroundedBy(sep)(P.sepBy(sep, p))
export const sepAndOptionallySurroundedBy: <I, A, B>(sep: P.Parser<I, A>, p: P.Parser<I, B>) => P.Parser<I, B[]> =
    (sep, p) => sepAndSurroundedBy(P.optional(sep), p)

export function tuplesToObj<A extends string | number, B>(tuples: [A, B][]): {[key in A]: B} {
    // @ts-ignore
    const out: {[key in A]: B} = {}

    for(const [a, b] of tuples) {
        out[a] = b
    }
    return out
}

export function isNotEmpty<TValue>(value: TValue | undefined | null): value is TValue {
    return value !== undefined && value !== null;
}