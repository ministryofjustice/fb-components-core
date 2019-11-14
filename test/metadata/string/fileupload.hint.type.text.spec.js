require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.type.text.json')

describe('~/metadata/string/fileupload.hint.type.text.json', () => it('exists', () => expect(json).to.exist))
