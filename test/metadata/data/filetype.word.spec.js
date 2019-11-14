require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.word.json')

describe('~/metadata/data/filetype.word.json', () => it('exists', () => expect(json).to.exist))
