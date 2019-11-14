require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.file.description.json')

describe('~/metadata/string/fileupload.file.description.json', () => it('exists', () => expect(json).to.exist))
