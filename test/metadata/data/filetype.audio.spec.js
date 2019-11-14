require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.audio.json')

describe('~/metadata/data/filetype.audio.json', () => it('exists', () => expect(json).to.exist))
