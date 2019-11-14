require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.type.powerpoint.json')

describe('~/metadata/string/fileupload.hint.type.powerpoint.json', () => it('exists', () => expect(json).to.exist))
