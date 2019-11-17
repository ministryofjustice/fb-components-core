require('module-alias/register')

const chai = require('chai')
const asPromised = require('chai-as-promised')

const compile = require('~/test/validate')
const dereference = require('~/test/dereference')

const dataObject = require('~/test/specifications/definition/button/definition.button.json')
const jsonSchema = require('~/specifications/definition/button/definition.button.schema.json')

const {
  expect
} = chai

chai.use(asPromised)

const validator = compile(jsonSchema)

describe('~/specifications/definition/button/definition.button.schema.json', () => {
  describe('The data object', () => it('has properties', () => expect(dataObject).not.to.be.empty))

  describe('The json schema', () => {
    describe('Dereferencing', () => it('throws a `ReferenceError`', () => expect(dereference(jsonSchema)).to.be.rejectedWith(ReferenceError, /Circular \$ref pointer.*\/condition\/condition\.schema\.json/)))

    describe('Validating', () => it('validates the data object', () => expect(validator(dataObject)).to.be.true))
  })
})
