require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.powerpoint.json')

describe('~/metadata/data/filetype.powerpoint.json', () => it('exists', () => expect(json).to.exist))
