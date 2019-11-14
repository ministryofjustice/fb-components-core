require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.json')

describe('~/metadata/string/fileupload.hint.json', () => it('exists', () => expect(json).to.exist))
