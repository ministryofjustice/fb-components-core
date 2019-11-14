require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.minLength.json')

describe('~/metadata/string/error.minLength.json', () => it('exists', () => expect(json).to.exist))
