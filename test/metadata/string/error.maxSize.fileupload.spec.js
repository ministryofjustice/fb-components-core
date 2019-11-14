require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.maxSize.fileupload.json')

describe('~/metadata/string/error.maxSize.fileupload.json', () => it('exists', () => expect(json).to.exist))
