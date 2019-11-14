require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.maxsize.select.json')

describe('~/metadata/string/fileupload.hint.maxsize.select.json', () => it('exists', () => expect(json).to.exist))
