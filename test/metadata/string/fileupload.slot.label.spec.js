require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/fileupload.slot.label.json')

describe('~/metadata/string/fileupload.slot.label.json', () => it('exists', () => expect(json).to.exist))
