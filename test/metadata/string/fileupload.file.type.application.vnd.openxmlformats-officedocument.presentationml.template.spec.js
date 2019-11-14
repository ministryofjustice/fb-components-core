require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.file.type.application.vnd.openxmlformats-officedocument.presentationml.template.json')

describe('~/metadata/string/fileupload.file.type.application.vnd.openxmlformats-officedocument.presentationml.template.json', () => it('exists', () => expect(json).to.exist))
