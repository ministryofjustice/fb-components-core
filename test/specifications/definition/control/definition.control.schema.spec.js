require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const dereference = require('~/test/dereference')

const dataObject = require('~/test/specifications/definition/control/definition.control.json')
const jsonSchema = require('~/specifications/definition/control/definition.control.schema.json')

const ajv = new Ajv()

describe('~/specifications/definition/control/definition.control.schema.json', () => {
  describe('The data object', () => it('has properties', () => expect(dataObject).not.to.be.empty))

  describe('The json schema', () => it('validates the data object', async () => {
    const validator = ajv.compile(await dereference(jsonSchema))

    return expect(validator(dataObject)).to.be.true
  }))
})
