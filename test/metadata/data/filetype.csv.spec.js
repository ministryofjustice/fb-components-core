require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.csv.json')

describe('~/metadata/data/filetype.csv.json', () => it('exists', () => expect(dataObject).to.exist))
