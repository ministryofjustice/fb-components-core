require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.rtf.json')

describe('~/metadata/data/filetype.rtf.json', () => it('exists', () => expect(json).to.exist))
