require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.file.button.add.json')

describe('~/metadata/string/fileupload.file.button.add.json', () => it('exists', () => expect(json).to.exist))
