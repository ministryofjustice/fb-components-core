require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.gif.json')

describe('~/metadata/data/filetype.gif.json', () => it('exists', () => expect(dataObject).to.exist))
