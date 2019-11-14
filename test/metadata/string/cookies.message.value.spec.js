require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/cookies.message.value.json')

describe('~/metadata/string/cookies.message.value.json', () => it('exists', () => expect(json).to.exist))
