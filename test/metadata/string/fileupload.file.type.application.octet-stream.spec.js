require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.file.type.application.octet-stream.json')

describe('~/metadata/string/fileupload.file.type.application.octet-stream.json', () => it('exists', () => expect(json).to.exist))
