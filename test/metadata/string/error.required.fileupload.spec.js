require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.required.fileupload.json')

describe('~/metadata/string/error.required.fileupload.json', () => it('exists', () => expect(json).to.exist))
