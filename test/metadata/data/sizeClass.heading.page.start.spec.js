require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const schemas = require('~/test/schemas')

const dataObject = require('~/metadata/data/sizeClass.heading.page.start.json')
const jsonSchema = require('~/specifications/classname/classname.schema.json')

const ajv = new Ajv({schemas})

const validator = ajv.compile(jsonSchema)

describe('~/metadata/data/sizeClass.heading.page.start.json', () => {
  it('has properties', () => expect(dataObject).not.to.be.empty)

  it('validates the data object', () => expect(validator(dataObject)).to.be.true)
})
