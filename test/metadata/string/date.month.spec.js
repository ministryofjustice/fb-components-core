require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/date.month.json')

describe('~/metadata/string/date.month.json', () => it('exists', () => expect(json).to.exist))
