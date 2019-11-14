require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.required.email.json')

describe('~/metadata/string/error.required.email.json', () => it('exists', () => expect(json).to.exist))
