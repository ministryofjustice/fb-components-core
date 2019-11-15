require('module-alias/register')

const dereference = require('~/test/dereference')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const dataObject = require('~/test/specifications/config/navigation/config.navigation.json')
const jsonSchema = require('~/specifications/config/navigation/config.navigation.schema.json')

const ajv = new Ajv()

describe('~/specifications/config/navigation/config.navigation.schema.json', () => {
  describe('The data object', () => it('has properties', () => expect(dataObject).not.to.be.empty))

  describe('The json schema', () => it('validates the data object', async () => {
    const validator = ajv.compile(await dereference(jsonSchema))

    return expect(validator(dataObject)).to.be.true
  }))
})
