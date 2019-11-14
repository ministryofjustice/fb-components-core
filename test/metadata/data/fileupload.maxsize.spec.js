require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/fileupload.maxsize.json')

describe('~/metadata/data/fileupload.maxsize.json', () => it('exists', () => expect(json).to.exist))
