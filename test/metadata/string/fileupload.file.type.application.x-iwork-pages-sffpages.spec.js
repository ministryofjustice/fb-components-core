require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.file.type.application.x-iwork-pages-sffpages.json')

describe('~/metadata/string/fileupload.file.type.application.x-iwork-pages-sffpages.json', () => it('exists', () => expect(json).to.exist))
