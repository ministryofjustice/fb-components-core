require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.spreadsheet.json')

describe('~/metadata/data/filetype.spreadsheet.json', () => it('exists', () => expect(json).to.exist))
