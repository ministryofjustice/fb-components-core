require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/cookies.message.json')

describe('~/metadata/string/cookies.message.json', () => it('exists', () => expect(json).to.exist))
