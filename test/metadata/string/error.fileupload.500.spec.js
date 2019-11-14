require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.fileupload.500.json')

describe('~/metadata/string/error.fileupload.500.json', () => it('exists', () => expect(json).to.exist))
