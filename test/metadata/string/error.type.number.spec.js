require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.type.number.json')

describe('~/metadata/string/error.type.number.json', () => it('exists', () => expect(json).to.exist))
