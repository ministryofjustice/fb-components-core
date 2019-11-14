require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.bmp.json')

describe('~/metadata/data/filetype.bmp.json', () => it('exists', () => expect(dataObject).to.exist))
