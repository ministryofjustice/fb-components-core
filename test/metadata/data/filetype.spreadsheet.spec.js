require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.spreadsheet.json')

describe('~/metadata/data/filetype.spreadsheet.json', () => it('exists', () => expect(dataObject).to.exist))
