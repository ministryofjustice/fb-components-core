require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.svg.json')

describe('~/metadata/data/filetype.svg.json', () => it('exists', () => expect(dataObject).to.exist))
