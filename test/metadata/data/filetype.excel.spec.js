require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.excel.json')

describe('~/metadata/data/filetype.excel.json', () => it('exists', () => expect(json).to.exist))
