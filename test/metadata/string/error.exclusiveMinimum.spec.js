require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.exclusiveMinimum.json')

describe('~/metadata/string/error.exclusiveMinimum.json', () => it('exists', () => expect(json).to.exist))
