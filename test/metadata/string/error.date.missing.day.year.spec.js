require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.date.missing.day.year.json')

describe('~/metadata/string/error.date.missing.day.year.json', () => it('exists', () => expect(json).to.exist))
