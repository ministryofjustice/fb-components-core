require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.rtf.json')

describe('~/metadata/data/filetype.rtf.json', () => it('exists', () => expect(dataObject).to.exist))
