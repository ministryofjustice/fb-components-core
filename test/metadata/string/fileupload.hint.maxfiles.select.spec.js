require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.maxfiles.select.json')

describe('~/metadata/string/fileupload.hint.maxfiles.select.json', () => it('exists', () => expect(json).to.exist))
