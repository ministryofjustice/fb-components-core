require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.required.radios.json')

describe('~/metadata/string/error.required.radios.json', () => it('exists', () => expect(json).to.exist))
