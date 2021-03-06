import {settings} from './settings'
import {ParsedConfigFile} from './types'
import {run, testCorrect, testIncorrect} from '../test-helpers'
import '@relmify/jest-fp-ts';
import {stream} from 'parser-ts/lib/Stream';
import {readFile} from 'fs';
import {extract_mpts_discover_cache} from './settings'

const correctCases: [string, ParsedConfigFile][] = [
    ['', {}],
    ['a = 1', {a: 1}],
    ['a = {}', {a: {}}],
    ['a: {\n}', {a: {}}],
    ['a: \n{b: 2}', {a: {b: 2}}],
    ['a = {b: 1}', {a: {b: 1}}],
    ['a = {b: 1}; c = 3', {a: {b: 1}, c: 3}],
    ['x = true \n a = {b: 1}; c = 3', {a: {b: 1}, c: 3, x: true}],
    ['x = true \n a: {b: 1;\nd: 5}; c = 3', {a: {b: 1, d: 5}, c: 3, x: true}],
]
testCorrect(correctCases,  (x: string) => run(settings, x))

test('extract_mpts_discover_cache', () => {
    expect(extract_mpts_discover_cache('')).toStrictEqual([undefined, ''])
    expect(extract_mpts_discover_cache('{a=1\n\n}')).toStrictEqual([undefined, '{a=1\n\n}'])
    expect(extract_mpts_discover_cache('{a=1\n\nmpts_discover_cache="!!"\n}')).toStrictEqual(['!!', '{a=1\n\n}'])
    expect(extract_mpts_discover_cache('{a=1\n\n  mpts_discover_cache="abc" ; \n}')).toStrictEqual(['abc', '{a=1\n\n}'])
})


test('', (done) => {
    readFile('/Users/andrei/Code/igolgi/config-manager/packages/model/src/parsers/cfg/mv_solar_flare copy.cfg', 'utf8', (err, data) => {
        const exp =
         {
             'global_config':  {
                 'input_resolution': 'HD1080',
                 'input_type': 'stream',
                 'mpts_discover_cache': 'eyJzb3VyY2UiOnsidHlwZSI6ImlwIiwiaXAiOiIyMzkuMjU0LjUuMTkzIiwicG9ydCI6MTAwMDB9LCJwcm9ncmFtcyI6W3sicG10X3BpZCI6MTYyMCwicHJvZ3JhbV9udW1iZXIiOjEyNDAsInZpZGVvX3dpZHRoIjo3MDQsInZpZGVvX2hlaWdodCI6NDgwLCJ2aWRlb19mcmFtZXJhdGUiOjI5Ljk2OTk5OSwidmlkZW9faW50ZXJsYWNlZCI6MSwidmlkZW9fdG9wX2ZpZWxkX2ZpcnN0IjoxLCJzdHJlYW1zIjpbeyJwaWQiOjE2MjAsInR5cGUiOiJQTVQiLCJjb2RlYyI6IlBNVCIsImZvcm1hdCI6IiJ9LHsicGlkIjoxNjAwLCJ0eXBlIjoiQXVkaW8iLCJjaGFubmVscyI6IjYiLCJjb2RlYyI6IkFDMyBAIDQ1Ny4xMyBrYnBzICgpIDUuMSBjaGFubmVscyIsImZvcm1hdCI6IiJ9LHsicGlkIjoxNjEwLCJ0eXBlIjoiVmlkZW8iLCJjb2RlYyI6Ik1QRUcyIiwiZm9ybWF0IjoiNzA0eDQ4MEAyOS45NyBmcHMgKDQ6MykifSx7InBpZCI6MTYzMCwidHlwZSI6IlNDVEUzNSIsImNvZGVjIjoiICIsImZvcm1hdCI6IiJ9XX0seyJwbXRfcGlkIjoyNjIwLCJwcm9ncmFtX251bWJlciI6MjI0MCwidmlkZW9fd2lkdGgiOjE5MjAsInZpZGVvX2hlaWdodCI6MTA4MCwidmlkZW9fZnJhbWVyYXRlIjoyOS45Njk5OTksInZpZGVvX2ludGVybGFjZWQiOjEsInZpZGVvX3RvcF9maWVsZF9maXJzdCI6MSwic3RyZWFtcyI6W3sicGlkIjoyNjIwLCJ0eXBlIjoiUE1UIiwiY29kZWMiOiJQTVQiLCJmb3JtYXQiOiIifSx7InBpZCI6MjYwMCwidHlwZSI6IkF1ZGlvIiwiY2hhbm5lbHMiOiI2IiwiY29kZWMiOiJBQzMgQCA0NTcuMTgga2JwcyAoKSA1LjEgY2hhbm5lbHMiLCJmb3JtYXQiOiIifSx7InBpZCI6MjYxMCwidHlwZSI6IlZpZGVvIiwiY29kZWMiOiJNUEVHMiIsImZvcm1hdCI6IjE5MjB4MTA4MEAyOS45NyBmcHMgKDE2OjkpIn0seyJwaWQiOjI2MzAsInR5cGUiOiJTQ1RFMzUiLCJjb2RlYyI6IiAiLCJmb3JtYXQiOiIifV19LHsicG10X3BpZCI6MjUyMCwicHJvZ3JhbV9udW1iZXIiOjIyNDEsInZpZGVvX3dpZHRoIjoxOTIwLCJ2aWRlb19oZWlnaHQiOjEwODAsInZpZGVvX2ZyYW1lcmF0ZSI6MjkuOTY5OTk5LCJ2aWRlb19pbnRlcmxhY2VkIjoxLCJ2aWRlb190b3BfZmllbGRfZmlyc3QiOjEsInN0cmVhbXMiOlt7InBpZCI6MjUyMCwidHlwZSI6IlBNVCIsImNvZGVjIjoiUE1UIiwiZm9ybWF0IjoiIn0seyJwaWQiOjI1MDAsInR5cGUiOiJBdWRpbyIsImNoYW5uZWxzIjoiNiIsImNvZGVjIjoiQUMzIEAgNDU3LjE1IGticHMgKCkgNS4xIGNoYW5uZWxzIiwiZm9ybWF0IjoiIn0seyJwaWQiOjI1MDEsInR5cGUiOiJBdWRpbyIsImNoYW5uZWxzIjoiMiIsImNvZGVjIjoiQUMzIEAgMjAxLjUxIGticHMgKCkgMi4wIGNoYW5uZWxzIiwiZm9ybWF0IjoiIn0seyJwaWQiOjI1MDIsInR5cGUiOiJBdWRpbyIsImNoYW5uZWxzIjoiMiIsImNvZGVjIjoiQUMzIEAgMjAxLjUxIGticHMgKCkgMi4wIGNoYW5uZWxzIiwiZm9ybWF0IjoiIn0seyJwaWQiOjI1MTAsInR5cGUiOiJWaWRlbyIsImNvZGVjIjoiTVBFRzIiLCJmb3JtYXQiOiIxOTIweDEwODBAMjkuOTcgZnBzICgxNjo5KSJ9LHsicGlkIjoyNTMwLCJ0eXBlIjoiU0NURTM1IiwiY29kZWMiOiIgIiwiZm9ybWF0IjoiIn1dfSx7InBtdF9waWQiOjI5MjAsInByb2dyYW1fbnVtYmVyIjoyMjQyLCJ2aWRlb193aWR0aCI6MTkyMCwidmlkZW9faGVpZ2h0IjoxMDgwLCJ2aWRlb19mcmFtZXJhdGUiOjI5Ljk2OTk5OSwidmlkZW9faW50ZXJsYWNlZCI6MSwidmlkZW9fdG9wX2ZpZWxkX2ZpcnN0IjoxLCJzdHJlYW1zIjpbeyJwaWQiOjI5MjAsInR5cGUiOiJQTVQiLCJjb2RlYyI6IlBNVCIsImZvcm1hdCI6IiJ9LHsicGlkIjoyOTAwLCJ0eXBlIjoiQXVkaW8iLCJjaGFubmVscyI6IjYiLCJjb2RlYyI6IkFDMyBAIDQ3Mi4xOCBrYnBzICgpIDUuMSBjaGFubmVscyIsImZvcm1hdCI6IiJ9LHsicGlkIjoyOTAxLCJ0eXBlIjoiQXVkaW8iLCJjaGFubmVscyI6IjIiLCJjb2RlYyI6IkFDMyBAIDE5NS40OSBrYnBzICgpIDIuMCBjaGFubmVscyIsImZvcm1hdCI6IiJ9LHsicGlkIjoyOTAyLCJ0eXBlIjoiQXVkaW8iLCJjaGFubmVscyI6IjIiLCJjb2RlYyI6IkFDMyBAIDE5OC40OSBrYnBzICgpIDIuMCBjaGFubmVscyIsImZvcm1hdCI6IiJ9LHsicGlkIjoyOTEwLCJ0eXBlIjoiVmlkZW8iLCJjb2RlYyI6Ik1QRUcyIiwiZm9ybWF0IjoiMTkyMHgxMDgwQDI5Ljk3IGZwcyAoMTY6OSkifSx7InBpZCI6MjkzMCwidHlwZSI6IlNDVEUzNSIsImNvZGVjIjoiICIsImZvcm1hdCI6IiJ9XX0seyJwbXRfcGlkIjoyNzIwLCJwcm9ncmFtX251bWJlciI6MjI0NCwidmlkZW9fd2lkdGgiOjE5MjAsInZpZGVvX2hlaWdodCI6MTA4MCwidmlkZW9fZnJhbWVyYXRlIjoyOS45Njk5OTksInZpZGVvX2ludGVybGFjZWQiOjEsInZpZGVvX3RvcF9maWVsZF9maXJzdCI6MSwic3RyZWFtcyI6W3sicGlkIjoyNzIwLCJ0eXBlIjoiUE1UIiwiY29kZWMiOiJQTVQiLCJmb3JtYXQiOiIifSx7InBpZCI6MjcwMCwidHlwZSI6IkF1ZGlvIiwiY2hhbm5lbHMiOiI2IiwiY29kZWMiOiJBQzMgQCA0NjAuMTUga2JwcyAoKSA1LjEgY2hhbm5lbHMiLCJmb3JtYXQiOiIifSx7InBpZCI6MjcxMCwidHlwZSI6IlZpZGVvIiwiY29kZWMiOiJNUEVHMiIsImZvcm1hdCI6IjE5MjB4MTA4MEAyOS45NyBmcHMgKDE2OjkpIn0seyJwaWQiOjI3MzAsInR5cGUiOiJTQ1RFMzUiLCJjb2RlYyI6IiAiLCJmb3JtYXQiOiIifV19LHsicG10X3BpZCI6MjEyMCwicHJvZ3JhbV9udW1iZXIiOjIyNDcsInZpZGVvX3dpZHRoIjoxOTIwLCJ2aWRlb19oZWlnaHQiOjEwODAsInZpZGVvX2ZyYW1lcmF0ZSI6MjkuOTY5OTk5LCJ2aWRlb19pbnRlcmxhY2VkIjoxLCJ2aWRlb190b3BfZmllbGRfZmlyc3QiOjEsInN0cmVhbXMiOlt7InBpZCI6MjEyMCwidHlwZSI6IlBNVCIsImNvZGVjIjoiUE1UIiwiZm9ybWF0IjoiIn0seyJwaWQiOjIxMDAsInR5cGUiOiJBdWRpbyIsImNoYW5uZWxzIjoiNiIsImNvZGVjIjoiQUMzIEAgNDc1LjIyIGticHMgKCkgNS4xIGNoYW5uZWxzIiwiZm9ybWF0IjoiIn0seyJwaWQiOjIxMDIsInR5cGUiOiJBdWRpbyIsImNoYW5uZWxzIjoiMiIsImNvZGVjIjoiQUMzIEAgMTkyLjUwIGticHMgKCkgMi4wIGNoYW5uZWxzIiwiZm9ybWF0IjoiIn0seyJwaWQiOjIxMTAsInR5cGUiOiJWaWRlbyIsImNvZGVjIjoiTVBFRzIiLCJmb3JtYXQiOiIxOTIweDEwODBAMjkuOTcgZnBzICgxNjo5KSJ9LHsicGlkIjoyMTMwLCJ0eXBlIjoiU0NURTM1IiwiY29kZWMiOiIgIiwiZm9ybWF0IjoiIn1dfSx7InBtdF9waWQiOjIyMjAsInByb2dyYW1fbnVtYmVyIjoyMjQ5LCJ2aWRlb193aWR0aCI6MTkyMCwidmlkZW9faGVpZ2h0IjoxMDgwLCJ2aWRlb19mcmFtZXJhdGUiOjI5Ljk2OTk5OSwidmlkZW9faW50ZXJsYWNlZCI6MSwidmlkZW9fdG9wX2ZpZWxkX2ZpcnN0IjoxLCJzdHJlYW1zIjpbeyJwaWQiOjIyMjAsInR5cGUiOiJQTVQiLCJjb2RlYyI6IlBNVCIsImZvcm1hdCI6IiJ9LHsicGlkIjoyMjAwLCJ0eXBlIjoiQXVkaW8iLCJjaGFubmVscyI6IjYiLCJjb2RlYyI6IkFDMyBAIDQ2MC4xNSBrYnBzICgpIDUuMSBjaGFubmVscyIsImZvcm1hdCI6IiJ9LHsicGlkIjoyMjEwLCJ0eXBlIjoiVmlkZW8iLCJjb2RlYyI6Ik1QRUcyIiwiZm9ybWF0IjoiMTkyMHgxMDgwQDI5Ljk3IGZwcyAoMTY6OSkifSx7InBpZCI6MjIzMCwidHlwZSI6IlNDVEUzNSIsImNvZGVjIjoiICIsImZvcm1hdCI6IiJ9XX0seyJwbXRfcGlkIjoyMzIwLCJwcm9ncmFtX251bWJlciI6MjI1MSwidmlkZW9fd2lkdGgiOjE5MjAsInZpZGVvX2hlaWdodCI6MTA4MCwidmlkZW9fZnJhbWVyYXRlIjoyOS45Njk5OTksInZpZGVvX2ludGVybGFjZWQiOjEsInZpZGVvX3RvcF9maWVsZF9maXJzdCI6MSwic3RyZWFtcyI6W3sicGlkIjoyMzIwLCJ0eXBlIjoiUE1UIiwiY29kZWMiOiJQTVQiLCJmb3JtYXQiOiIifSx7InBpZCI6MjMwMCwidHlwZSI6IkF1ZGlvIiwiY2hhbm5lbHMiOiI2IiwiY29kZWMiOiJBQzMgQCA0NjMuMTUga2JwcyAoKSA1LjEgY2hhbm5lbHMiLCJmb3JtYXQiOiIifSx7InBpZCI6MjMxMCwidHlwZSI6IlZpZGVvIiwiY29kZWMiOiJNUEVHMiIsImZvcm1hdCI6IjE5MjB4MTA4MEAyOS45NyBmcHMgKDE2OjkpIn0seyJwaWQiOjIzMzAsInR5cGUiOiJTQ1RFMzUiLCJjb2RlYyI6IiAiLCJmb3JtYXQiOiIifV19XX0=',
             },
             'master_variant_config':  {
                 'output_settings':  {
                     'num_audio_profiles': 1,
                     'num_output_streams': 4,
                     'num_video_profiles': 4,
                 },
                 video_profile0:  {
                     'codec': 'H264',
                     'encoder_profile': 2,
                     'framerate': 0,
                     'height': 360,
                     'mux_target': 600,
                     'rate_ctl': false,
                     'vbr_max_bitrate': 0,
                     'width': 640,
                 },
                 audio_profile0: {
                     source_stream: 0,
                     codec: 'AAC',
                     bitrate: 96000,
                     channels: 2,
                     volume: 100,
                 },
                 output_abr_stream0: {
                     enabled: true,
                     multi_ts_address: '127.0.0.1',
                     multi_ts_port: 10002,
                     img_overlay: false,
                     video_profile0: true,
                     audio_profile0: true,
                 },
             },
             'name': 'MPEG2TS Transcoder Configuration',
             'version': '2.4.9681.3',
         }
        const out = run(settings, data)
        expect(out).toBeRight()
        if(out._tag == 'Right') {
            expect(out.right.value).toStrictEqual(exp)
        }
        done()
    })
})
