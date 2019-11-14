require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const schemas = require('~/test/schemas')

const dataObject = require('~/test/specifications/validations/validations.json')
const jsonSchema = require('~/specifications/validations/validations.schema.json')

const ajv = new Ajv({schemas})

const validator = ajv.compile(jsonSchema)

xdescribe('~/specifications/validations/validations.schema.json', () => {
  describe('The data object', () => it('has properties', () => expect(dataObject).not.to.be.empty))

  describe('The json schema', () => it('validates', () => expect(validator(dataObject)).to.be.true))
})
