require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.exclusiveMaximum.json')

describe('~/metadata/string/error.exclusiveMaximum.json', () => it('exists', () => expect(json).to.exist))
