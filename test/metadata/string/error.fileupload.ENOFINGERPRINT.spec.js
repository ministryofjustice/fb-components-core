require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.fileupload.ENOFINGERPRINT.json')

describe('~/metadata/string/error.fileupload.ENOFINGERPRINT.json', () => it('exists', () => expect(json).to.exist))
