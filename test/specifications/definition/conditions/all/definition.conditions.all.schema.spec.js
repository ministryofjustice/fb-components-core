require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const dereference = require('~/test/dereference')

const dataObject = require('~/test/specifications/definition/conditions/all/definition.conditions.all.json')
const jsonSchema = require('~/specifications/definition/conditions/all/definition.conditions.all.schema.json')

const ajv = new Ajv()

/**
 *  Ajv can validate the circular schemas (which ref parser ignores) as long as the `$ref` pointers
 *  exactly match the `$id` of the schema
 */
xdescribe('~/specifications/definition/conditions/all/definition.conditions.all.schema.json', () => {
  describe('The data object', () => it('has properties', () => expect(dataObject).not.to.be.empty))

  describe('The json schema', () => it('validates the data object', async () => {
    const validator = ajv.compile(await dereference(jsonSchema))

    return expect(validator(dataObject)).to.be.true
  }))
})
