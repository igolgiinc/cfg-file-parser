import group from './group'
import {Group} from './types'
import {run, testCorrect, testIncorrect} from '../test-helpers'
import '@relmify/jest-fp-ts';
import {stream} from 'parser-ts/lib/Stream';

const correctCases: [string, Group][] = [
    // Strings
    ['{}', {}],
    ['{name1 = "A"}', {'name1': 'A'}],
    ['{name1 = "A";}', {'name1': 'A'}],
    ['{name1 = "A"\n}', {'name1': 'A'}],
    ['{name1 = "A"; name2: "B";}', {'name1': 'A', 'name2': 'B'}],
    ['{name1 = "A" \n name2: "B" \n}', {'name1': 'A', 'name2': 'B'}],
    ['{name1 = "A"\n name2: "B" \n}', {'name1': 'A', 'name2': 'B'}],
    ['{name1="A"\nname2:"B"}', {'name1': 'A', 'name2': 'B'}],
    ['{;name1="A"\nname2:"B";}', {'name1': 'A', 'name2': 'B'}],
    ['{name1="A" ; name2:"B";;}', {'name1': 'A', 'name2': 'B'}],

    ['{name1=1\n}', {'name1': 1}],
    ['{a = {}}', {a: {}}],
]
testCorrect(correctCases, (x: string) => run(group, x))


const incorrectCases: string[] = [
    '{name="A',
    '{name=',
    '{name="1}',

    '{name="1";n}',
    '{name="1"',
    'name="1";n}',
    'name"1";n}',
    'name = "A"',
]

testIncorrect(incorrectCases, (x: string) => run(group, x))

test('', () => {
    expect(group(stream('a = {}'.split(''), 4))).toSubsetEqualRight({})
})


