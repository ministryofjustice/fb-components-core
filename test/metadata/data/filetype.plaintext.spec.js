require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.plaintext.json')

describe('~/metadata/data/filetype.plaintext.json', () => it('exists', () => expect(json).to.exist))
