require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/button.send.email.json')

describe('~/metadata/string/button.send.email.json', () => it('exists', () => expect(json).to.exist))
