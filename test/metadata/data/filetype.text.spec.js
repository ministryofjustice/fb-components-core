require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.text.json')

describe('~/metadata/data/filetype.text.json', () => it('exists', () => expect(dataObject).to.exist))
