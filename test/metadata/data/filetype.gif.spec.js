require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.gif.json')

describe('~/metadata/data/filetype.gif.json', () => it('exists', () => expect(json).to.exist))
