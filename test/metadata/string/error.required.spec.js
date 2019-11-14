require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.required.json')

describe('~/metadata/string/error.required.json', () => it('exists', () => expect(json).to.exist))
