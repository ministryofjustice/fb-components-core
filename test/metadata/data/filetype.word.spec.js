require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.word.json')

describe('~/metadata/data/filetype.word.json', () => it('exists', () => expect(dataObject).to.exist))
