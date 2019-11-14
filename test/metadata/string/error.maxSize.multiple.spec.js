require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.maxSize.multiple.json')

describe('~/metadata/string/error.maxSize.multiple.json', () => it('exists', () => expect(json).to.exist))
