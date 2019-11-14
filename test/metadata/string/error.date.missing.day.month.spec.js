require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.date.missing.day.month.json')

describe('~/metadata/string/error.date.missing.day.month.json', () => it('exists', () => expect(json).to.exist))
