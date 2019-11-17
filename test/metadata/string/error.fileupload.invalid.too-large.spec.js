require('module-alias/register')

const {
  expect
} = require('chai')

const compile = require('~/test/validate')

const dataObject = require('~/metadata/string/error.fileupload.invalid.too-large.json')
const jsonSchema = require('~/specifications/string/error/string.error.schema.json')

const validator = compile(jsonSchema)

describe('~/metadata/string/error.fileupload.invalid.too-large.json', () => {
  it('has properties', () => expect(dataObject).not.to.be.empty)

  it('validates the data object', () => expect(validator(dataObject)).to.be.true)
})
