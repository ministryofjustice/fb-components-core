require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.bmp.json')

describe('~/metadata/data/filetype.bmp.json', () => it('exists', () => expect(json).to.exist))
