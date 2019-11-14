require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.pattern.json')

describe('~/metadata/string/error.pattern.json', () => it('exists', () => expect(json).to.exist))
