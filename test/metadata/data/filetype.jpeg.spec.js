require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.jpeg.json')

describe('~/metadata/data/filetype.jpeg.json', () => it('exists', () => expect(json).to.exist))
