require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.svg.json')

describe('~/metadata/data/filetype.svg.json', () => it('exists', () => expect(json).to.exist))
