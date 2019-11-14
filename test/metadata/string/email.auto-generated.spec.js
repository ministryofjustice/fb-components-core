require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/email.auto-generated.json')

describe('~/metadata/string/email.auto-generated.json', () => it('exists', () => expect(json).to.exist))
