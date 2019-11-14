require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/link.back.json')

describe('~/metadata/string/link.back.json', () => it('exists', () => expect(json).to.exist))
