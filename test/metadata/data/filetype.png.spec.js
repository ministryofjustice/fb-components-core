require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.png.json')

describe('~/metadata/data/filetype.png.json', () => it('exists', () => expect(dataObject).to.exist))
