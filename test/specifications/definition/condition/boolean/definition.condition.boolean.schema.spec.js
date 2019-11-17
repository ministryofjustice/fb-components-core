require('module-alias/register')

const chai = require('chai')
const asPromised = require('chai-as-promised')

const compile = require('~/test/validate')
const dereference = require('~/test/dereference')

const dataObject = require('~/test/specifications/definition/condition/boolean/definition.condition.boolean.json')
const jsonSchema = require('~/specifications/definition/condition/boolean/definition.condition.boolean.schema.json')

const {
  expect
} = chai

chai.use(asPromised)

const validator = compile(jsonSchema)

describe('~/specifications/definition/condition/boolean/definition.condition.boolean.schema.json', () => {
  describe('The data object', () => it('has properties', () => expect(dataObject).not.to.be.empty))

  describe('The json schema', () => {
    describe('Dereferencing', () => it('dereferences the json schema', () => expect(dereference(jsonSchema)).not.to.be.rejected))

    describe('Validating', () => it('validates the data object', () => expect(validator(dataObject)).to.be.true))
  })
})
