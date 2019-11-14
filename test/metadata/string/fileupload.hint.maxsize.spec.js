require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.maxsize.json')

describe('~/metadata/string/fileupload.hint.maxsize.json', () => it('exists', () => expect(json).to.exist))
