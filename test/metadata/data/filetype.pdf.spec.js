require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.pdf.json')

describe('~/metadata/data/filetype.pdf.json', () => it('exists', () => expect(dataObject).to.exist))
