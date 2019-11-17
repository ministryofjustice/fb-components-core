require('module-alias/register')

const chai = require('chai')
const asPromised = require('chai-as-promised')

const compile = require('~/test/validate')
const dereference = require('~/test/dereference')

const dataObjectForEnumValue = require('~/test/specifications/definition/condition/valuetype/definition.condition.valuetype.value.json')
const dataObjectForEnumInput = require('~/test/specifications/definition/condition/valuetype/definition.condition.valuetype.input.json')
const dataObjectForEnumFeature = require('~/test/specifications/definition/condition/valuetype/definition.condition.valuetype.feature.json')
const jsonSchema = require('~/specifications/definition/condition/valuetype/definition.condition.valuetype.schema.json')

const {
  expect
} = chai

chai.use(asPromised)

const validator = compile(jsonSchema)

describe('~/specifications/definition/condition/valuetype/definition.condition.valuetype.schema.json', () => {
  describe('The data object for `value`', () => it('has properties', () => expect(dataObjectForEnumValue).not.to.be.empty))

  describe('The data object for `input`', () => it('has properties', () => expect(dataObjectForEnumInput).not.to.be.empty))

  describe('The data object for `feature`', () => it('has properties', () => expect(dataObjectForEnumFeature).not.to.be.empty))

  describe('The json schema', () => {
    describe('Dereferencing', () => it('dereferences the json schema', () => expect(dereference(jsonSchema)).not.to.be.rejected))

    describe('Validating', () => {
      it('validates the data object for `value`', () => expect(validator(dataObjectForEnumValue)).to.be.true)

      it('validates the data object for `input`', () => expect(validator(dataObjectForEnumInput)).to.be.true)

      it('validates the data object for `feature`', () => expect(validator(dataObjectForEnumFeature)).to.be.true)
    })
  })
})
