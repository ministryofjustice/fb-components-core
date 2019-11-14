require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.file.type.application.vnd.ms-powerpoint.json')

describe('~/metadata/string/fileupload.file.type.application.vnd.ms-powerpoint.json', () => it('exists', () => expect(json).to.exist))
