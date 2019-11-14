require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.maxSize.json')

describe('~/metadata/string/error.maxSize.json', () => it('exists', () => expect(json).to.exist))
