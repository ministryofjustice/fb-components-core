require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const dereference = require('~/test/dereference')

const dataObjectForDefined = require('~/test/specifications/condition/expression/condition.expression.defined.json')
const dataObjectForText = require('~/test/specifications/condition/expression/condition.expression.text.json')
const dataObjectForNumber = require('~/test/specifications/condition/expression/condition.expression.number.json')
const dataObjectForBoolean = require('~/test/specifications/condition/expression/condition.expression.boolean.json')
const jsonSchema = require('~/specifications/condition/expression/condition.expression.schema.json')

const ajv = new Ajv()

describe('~/specifications/condition/expression/condition.expression.schema.json', () => {
  describe('The data object for `defined`', () => it('has properties', () => expect(dataObjectForDefined).not.to.be.empty))

  describe('The data object for `text`', () => it('has properties', () => expect(dataObjectForText).not.to.be.empty))

  describe('The data object for `number`', () => it('has properties', () => expect(dataObjectForNumber).not.to.be.empty))

  describe('The data object for `boolean`', () => it('has properties', () => expect(dataObjectForBoolean).not.to.be.empty))

  describe('The json schema', async () => {
    const validator = ajv.compile(await dereference(jsonSchema))

    it('validates the data object for `defined`', () => expect(validator(dataObjectForDefined)).to.be.true)

    it('validates the data object for `text`', () => expect(validator(dataObjectForText)).to.be.true)

    it('validates the data object for `number`', () => expect(validator(dataObjectForNumber)).to.be.true)

    it('validates the data object for `boolean`', () => expect(validator(dataObjectForBoolean)).to.be.true)
  })
})
