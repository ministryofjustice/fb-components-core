require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const schemas = require('~/test/schemas')

const dataObject = require('~/metadata/string/error.date.missing.day.json')
const jsonSchema = require('~/specifications/string/error/string.error.schema.json')

const ajv = new Ajv({schemas})

const validator = ajv.compile(jsonSchema)

describe('~/metadata/string/error.date.missing.day.json', () => {
  it('has properties', () => expect(dataObject).not.to.be.empty)

  it('validates', () => expect(validator(dataObject)).to.be.true)
})
