require('module-alias/register')

const chai = require('chai')
const asPromised = require('chai-as-promised')

const compile = require('~/test/validate')
const dereference = require('~/test/dereference')

const dataObjectForAlpha = require('~/test/specifications/config/service/config.service.alpha.json')
const dataObjectForBeta = require('~/test/specifications/config/service/config.service.beta.json')
const dataObjectForNone = require('~/test/specifications/config/service/config.service.none.json')

const jsonSchema = require('~/specifications/config/service/config.service.schema.json')

const {
  expect
} = chai

chai.use(asPromised)

const validator = compile(jsonSchema)

describe('~/specifications/config/service/config.service.schema.json', () => {
  describe('The data object', () => {
    it('has properties for `alpha`', () => expect(dataObjectForAlpha).not.to.be.empty)

    it('has properties for `beta`', () => expect(dataObjectForBeta).not.to.be.empty)

    it('has properties for `none`', () => expect(dataObjectForNone).not.to.be.empty)
  })

  describe('The json schema', () => {
    describe('Dereferencing', () => it('dereferences the json schema', () => expect(dereference(jsonSchema)).not.to.be.rejected))

    describe('Validating', () => {
      it('validates the data object for `alpha`', () => expect(validator(dataObjectForAlpha)).to.be.true)

      it('validates the data object for `beta`', () => expect(validator(dataObjectForBeta)).to.be.true)

      it('validates the data object for `none`', () => expect(validator(dataObjectForNone)).to.be.true)
    })
  })
})
