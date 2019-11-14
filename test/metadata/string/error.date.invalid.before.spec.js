require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.date.invalid.before.json')

describe('~/metadata/string/error.date.invalid.before.json', () => it('exists', () => expect(json).to.exist))
