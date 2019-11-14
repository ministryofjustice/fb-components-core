require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.tiff.json')

describe('~/metadata/data/filetype.tiff.json', () => it('exists', () => expect(json).to.exist))
