require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.timing.json')

describe('~/metadata/string/fileupload.hint.timing.json', () => it('exists', () => expect(json).to.exist))
