require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/button.send.sms.json')

describe('~/metadata/string/button.send.sms.json', () => it('exists', () => expect(json).to.exist))
