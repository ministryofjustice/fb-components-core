require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.fileupload.invalid.too-large.multiple.json')

describe('~/metadata/string/error.fileupload.invalid.too-large.multiple.json', () => it('exists', () => expect(json).to.exist))
