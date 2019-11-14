require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.jpeg.json')

describe('~/metadata/data/filetype.jpeg.json', () => it('exists', () => expect(dataObject).to.exist))
