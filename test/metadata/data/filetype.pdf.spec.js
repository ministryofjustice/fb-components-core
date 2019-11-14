require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.pdf.json')

describe('~/metadata/data/filetype.pdf.json', () => it('exists', () => expect(json).to.exist))
