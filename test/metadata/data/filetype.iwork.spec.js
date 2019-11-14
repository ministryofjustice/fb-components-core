require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.iwork.json')

describe('~/metadata/data/filetype.iwork.json', () => it('exists', () => expect(json).to.exist))
