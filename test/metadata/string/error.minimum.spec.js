require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.minimum.json')

describe('~/metadata/string/error.minimum.json', () => it('exists', () => expect(json).to.exist))
