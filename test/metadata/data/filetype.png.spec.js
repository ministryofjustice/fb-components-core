require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.png.json')

describe('~/metadata/data/filetype.png.json', () => it('exists', () => expect(json).to.exist))
