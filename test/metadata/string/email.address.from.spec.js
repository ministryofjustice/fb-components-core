require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/email.address.from.json')

describe('~/metadata/string/email.address.from.json', () => it('exists', () => expect(json).to.exist))
