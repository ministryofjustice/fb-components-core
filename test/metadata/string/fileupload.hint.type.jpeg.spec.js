require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.hint.type.jpeg.json')

describe('~/metadata/string/fileupload.hint.type.jpeg.json', () => it('exists', () => expect(json).to.exist))
