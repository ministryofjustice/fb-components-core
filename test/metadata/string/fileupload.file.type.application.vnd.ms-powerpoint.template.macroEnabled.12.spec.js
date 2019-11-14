require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.file.type.application.vnd.ms-powerpoint.template.macroEnabled.12.json')

describe('~/metadata/string/fileupload.file.type.application.vnd.ms-powerpoint.template.macroEnabled.12.json', () => it('exists', () => expect(json).to.exist))
