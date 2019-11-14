require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const schemas = require('~/test/schemas')

const dataObject = require('~/test/specifications/definition/page/definition.page.json')
const jsonSchema = require('~/specifications/definition/page/definition.page.schema.json')

const ajv = new Ajv({schemas})

const validator = ajv.compile(jsonSchema)

describe('~/specifications/definition/page/definition.page.schema.json', () => {
  describe('The data object', () => it('has properties', () => expect(dataObject).not.to.be.empty))

  describe('The json schema', () => it('validates', () => expect(validator(dataObject)).to.be.true))
})
