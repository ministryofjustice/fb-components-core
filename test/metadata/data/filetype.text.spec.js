require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.text.json')

describe('~/metadata/data/filetype.text.json', () => it('exists', () => expect(json).to.exist))
