require('module-alias/register')

const chai = require('chai')
const asPromised = require('chai-as-promised')

const compile = require('~/test/validate')
const dereference = require('~/test/dereference')

const dataObjectForOn = require('~/test/specifications/config/module/config.module.on.json')
const dataObjectForOff = require('~/test/specifications/config/module/config.module.off.json')

const jsonSchema = require('~/specifications/config/module/config.module.schema.json')

const {
  expect
} = chai

chai.use(asPromised)

const validator = compile(jsonSchema)

describe('~/specifications/config/module/config.module.schema.json', () => {
  describe('The data object for `on`', () => it('has properties', () => expect(dataObjectForOn).not.to.be.empty))
  describe('The data object for `off`', () => it('has properties', () => expect(dataObjectForOff).not.to.be.empty))

  describe('The json schema', () => {
    describe('Dereferencing', () => it('dereferences the json schema', () => expect(dereference(jsonSchema)).not.to.be.rejected))

    describe('Validating', () => {
      it('validates the data object for `on`', () => expect(validator(dataObjectForOn)).to.be.true)

      it('validates the data object for `off`', () => expect(validator(dataObjectForOff)).to.be.true)
    })
  })
})
