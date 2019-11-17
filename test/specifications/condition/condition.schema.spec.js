require('module-alias/register')

const chai = require('chai')
const asPromised = require('chai-as-promised')

const compile = require('~/test/validate')
const dereference = require('~/test/dereference')

const dataObjectForAll = require('~/test/specifications/condition/condition.all.json')
const dataObjectForAny = require('~/test/specifications/condition/condition.any.json')
const dataObjectForBoolean = require('~/test/specifications/condition/condition.boolean.json')
const dataObjectForDefined = require('~/test/specifications/condition/condition.defined.json')
const dataObjectForNumber = require('~/test/specifications/condition/condition.number.json')
const dataObjectForText = require('~/test/specifications/condition/condition.text.json')

const jsonSchema = require('~/specifications/condition/condition.schema.json')

const {
  expect
} = chai

chai.use(asPromised)

const validator = compile(jsonSchema)

describe('~/specifications/condition/condition.schema.json', () => {
  describe('The data object', () => {
    it('has properties for `all`', () => expect(dataObjectForAll).not.to.be.empty)

    it('has properties for `any`', () => expect(dataObjectForAny).not.to.be.empty)

    it('has properties for `boolean`', () => expect(dataObjectForBoolean).not.to.be.empty)

    it('has properties for `defined`', () => expect(dataObjectForDefined).not.to.be.empty)

    it('has properties for `number`', () => expect(dataObjectForNumber).not.to.be.empty)

    it('has properties for `text`', () => expect(dataObjectForText).not.to.be.empty)
  })

  describe('The json schema', () => {
    describe('Dereferencing', () => it('throws a `ReferenceError`', () => expect(dereference(jsonSchema)).to.be.rejectedWith(ReferenceError, 'Circular $ref pointer found')))

    describe('Validating', async () => {
      it('validates the data object for `all`', () => expect(validator(dataObjectForAll)).to.be.true)

      it('validates the data object for `any`', () => expect(validator(dataObjectForAny)).to.be.true)

      it('validates the data object for `boolean`', () => expect(validator(dataObjectForBoolean)).to.be.true)

      it('validates the data object for `defined`', () => expect(validator(dataObjectForDefined)).to.be.true)

      it('validates the data object for `number`', () => expect(validator(dataObjectForNumber)).to.be.true)

      it('validates the data object for `text`', () => expect(validator(dataObjectForText)).to.be.true)
    })
  })
})
