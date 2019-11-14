require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.image.json')

describe('~/metadata/data/filetype.image.json', () => it('exists', () => expect(dataObject).to.exist))
