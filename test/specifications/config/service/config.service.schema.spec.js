require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const dereference = require('~/test/dereference')

const dataObjectForAlpha = require('~/test/specifications/config/service/config.service.alpha.json')
const dataObjectForBeta = require('~/test/specifications/config/service/config.service.beta.json')
const dataObjectForNone = require('~/test/specifications/config/service/config.service.none.json')

const jsonSchema = require('~/specifications/config/service/config.service.schema.json')

const ajv = new Ajv()

describe('~/specifications/config/service/config.service.schema.json', () => {
  describe('The data object', () => {
    it('has properties for `alpha`', () => expect(dataObjectForAlpha).not.to.be.empty)

    it('has properties for `beta`', () => expect(dataObjectForBeta).not.to.be.empty)

    it('has properties for `none`', () => expect(dataObjectForNone).not.to.be.empty)
  })

  describe('The json schema', () => {
    it('validates the data object for `alpha`', async () => {
      const validator = ajv.compile(await dereference(jsonSchema))

      return expect(validator(dataObjectForAlpha)).to.be.true
    })

    it('validates the data object for `beta`', async () => {
      const validator = ajv.compile(await dereference(jsonSchema))

      return expect(validator(dataObjectForBeta)).to.be.true
    })

    it('validates the data object for `none`', async () => {
      const validator = ajv.compile(await dereference(jsonSchema))

      return expect(validator(dataObjectForNone)).to.be.true
    })
  })
})
