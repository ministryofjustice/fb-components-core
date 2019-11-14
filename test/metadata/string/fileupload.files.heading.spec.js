require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.files.heading.json')

describe('~/metadata/string/fileupload.files.heading.json', () => it('exists', () => expect(json).to.exist))
