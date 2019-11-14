require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.fileupload.accept.json')

describe('~/metadata/string/error.fileupload.accept.json', () => it('exists', () => expect(json).to.exist))
