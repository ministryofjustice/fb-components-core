require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const dereference = require('~/test/dereference')

const dataObjectForAll = require('~/test/specifications/condition/condition.all.json')
const dataObjectForAny = require('~/test/specifications/condition/condition.any.json')
const dataObjectForExactly = require('~/test/specifications/condition/condition.exactly.json')
const dataObjectForBoolean = require('~/test/specifications/condition/boolean/condition.boolean.json')
const dataObjectForDefined = require('~/test/specifications/condition/defined/condition.defined.json')
const dataObjectForNumber = require('~/test/specifications/condition/number/condition.number.json')
const dataObjectForText = require('~/test/specifications/condition/text/condition.text.json')

const jsonSchema = require('~/specifications/condition/condition.schema.json')

const ajv = new Ajv()

describe('~/specifications/condition/condition.schema.json', () => {
  describe('The data object', () => {
    it('has properties for `all`', () => expect(dataObjectForAll).not.to.be.empty)

    it('has properties for `any`', () => expect(dataObjectForAny).not.to.be.empty)

    it('has properties for `exactly`', () => expect(dataObjectForExactly).not.to.be.empty)

    it('has properties for `boolean`', () => expect(dataObjectForBoolean).not.to.be.empty)

    it('has properties for `defined`', () => expect(dataObjectForDefined).not.to.be.empty)

    it('has properties for `number`', () => expect(dataObjectForNumber).not.to.be.empty)

    it('has properties for `text`', () => expect(dataObjectForText).not.to.be.empty)
  })

  describe('The json schema', async () => {
    const validator = ajv.compile(await dereference(jsonSchema))

    it('validates the data object for `all`', () => expect(validator(dataObjectForAll)).to.be.true)

    it('validates the data object for `any`', () => expect(validator(dataObjectForAny)).to.be.true)

    it('validates the data object for `exactly`', () => expect(validator(dataObjectForExactly)).to.be.true)

    it('validates the data object for `boolean`', () => expect(validator(dataObjectForBoolean)).to.be.true)

    it('validates the data object for `defined`', () => expect(validator(dataObjectForDefined)).to.be.true)

    it('validates the data object for `number`', () => expect(validator(dataObjectForNumber)).to.be.true)

    it('validates the data object for `text`', () => expect(validator(dataObjectForText)).to.be.true)
  })
})
