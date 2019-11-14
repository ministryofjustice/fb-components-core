require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.type.json')

describe('~/metadata/string/error.type.json', () => it('exists', () => expect(json).to.exist))
