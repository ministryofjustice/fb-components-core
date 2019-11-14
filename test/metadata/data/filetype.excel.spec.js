require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.excel.json')

describe('~/metadata/data/filetype.excel.json', () => it('exists', () => expect(dataObject).to.exist))
