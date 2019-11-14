require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/date.day.json')

describe('~/metadata/string/date.day.json', () => it('exists', () => expect(json).to.exist))
