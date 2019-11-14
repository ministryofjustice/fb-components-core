require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.fileupload.invalid.virus.json')

describe('~/metadata/string/error.fileupload.invalid.virus.json', () => it('exists', () => expect(json).to.exist))
