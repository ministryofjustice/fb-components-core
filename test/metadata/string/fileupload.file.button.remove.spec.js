require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.file.button.remove.json')

describe('~/metadata/string/fileupload.file.button.remove.json', () => it('exists', () => expect(json).to.exist))
