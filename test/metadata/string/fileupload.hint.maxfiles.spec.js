require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.maxfiles.json')

describe('~/metadata/string/fileupload.hint.maxfiles.json', () => it('exists', () => expect(json).to.exist))
