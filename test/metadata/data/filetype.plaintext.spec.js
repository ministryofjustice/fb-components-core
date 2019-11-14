require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.plaintext.json')

describe('~/metadata/data/filetype.plaintext.json', () => it('exists', () => expect(dataObject).to.exist))
