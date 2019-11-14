require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.date.missing.month.json')

describe('~/metadata/string/error.date.missing.month.json', () => it('exists', () => expect(json).to.exist))
