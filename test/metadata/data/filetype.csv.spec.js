require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.csv.json')

describe('~/metadata/data/filetype.csv.json', () => it('exists', () => expect(json).to.exist))
