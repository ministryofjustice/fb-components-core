require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/flash.file.uploaded.json')

describe('~/metadata/string/flash.file.uploaded.json', () => it('exists', () => expect(json).to.exist))
