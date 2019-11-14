require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.date.missing.day.json')

describe('~/metadata/string/error.date.missing.day.json', () => it('exists', () => expect(json).to.exist))
