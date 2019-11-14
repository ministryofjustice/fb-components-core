require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.date.missing.year.json')

describe('~/metadata/string/error.date.missing.year.json', () => it('exists', () => expect(json).to.exist))
