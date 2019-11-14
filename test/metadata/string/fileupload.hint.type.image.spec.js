require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.type.image.json')

describe('~/metadata/string/fileupload.hint.type.image.json', () => it('exists', () => expect(json).to.exist))
