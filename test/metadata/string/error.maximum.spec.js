require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.maximum.json')

describe('~/metadata/string/error.maximum.json', () => it('exists', () => expect(json).to.exist))
