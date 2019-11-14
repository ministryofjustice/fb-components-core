require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.image.json')

describe('~/metadata/data/filetype.image.json', () => it('exists', () => expect(json).to.exist))
