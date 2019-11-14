require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.date.invalid.after.json')

describe('~/metadata/string/error.date.invalid.after.json', () => it('exists', () => expect(json).to.exist))
