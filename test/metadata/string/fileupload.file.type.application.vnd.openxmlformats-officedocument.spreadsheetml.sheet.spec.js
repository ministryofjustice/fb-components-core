require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.file.type.application.vnd.openxmlformats-officedocument.spreadsheetml.sheet.json')

describe('~/metadata/string/fileupload.file.type.application.vnd.openxmlformats-officedocument.spreadsheetml.sheet.json', () => it('exists', () => expect(json).to.exist))
