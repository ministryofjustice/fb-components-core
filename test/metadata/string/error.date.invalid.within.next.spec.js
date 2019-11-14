require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.date.invalid.within.next.json')

describe('~/metadata/string/error.date.invalid.within.next.json', () => it('exists', () => expect(json).to.exist))
