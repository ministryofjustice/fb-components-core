require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.format.json')

describe('~/metadata/string/error.format.json', () => it('exists', () => expect(json).to.exist))
