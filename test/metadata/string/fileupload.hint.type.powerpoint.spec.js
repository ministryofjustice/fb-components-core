require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const schemas = require('~/test/schemas')

const dataObject = require('~/metadata/string/fileupload.hint.type.powerpoint.json')
const jsonSchema = require('~/specifications/string/string.schema.json')

const ajv = new Ajv({schemas})

const validator = ajv.compile(jsonSchema)

describe('~/metadata/string/fileupload.hint.type.powerpoint.json', () => {
  it('has properties', () => expect(dataObject).not.to.be.empty)

  it('validates', () => expect(validator(dataObject)).to.be.true)
})
