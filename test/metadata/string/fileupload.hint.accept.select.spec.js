require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.accept.select.json')

describe('~/metadata/string/fileupload.hint.accept.select.json', () => it('exists', () => expect(json).to.exist))
