require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.tiff.json')

describe('~/metadata/data/filetype.tiff.json', () => it('exists', () => expect(dataObject).to.exist))
