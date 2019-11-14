require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.iwork.json')

describe('~/metadata/data/filetype.iwork.json', () => it('exists', () => expect(dataObject).to.exist))
