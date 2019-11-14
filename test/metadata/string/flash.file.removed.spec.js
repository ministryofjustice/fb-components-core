require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/flash.file.removed.json')

describe('~/metadata/string/flash.file.removed.json', () => it('exists', () => expect(json).to.exist))
