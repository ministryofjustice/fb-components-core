require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.accept.json')

describe('~/metadata/string/fileupload.hint.accept.json', () => it('exists', () => expect(json).to.exist))
