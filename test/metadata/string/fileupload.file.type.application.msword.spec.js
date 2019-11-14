require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.file.type.application.msword.json')

describe('~/metadata/string/fileupload.file.type.application.msword.json', () => it('exists', () => expect(json).to.exist))
