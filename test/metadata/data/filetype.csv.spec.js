require('module-alias/register')

const {
  expect
} = require('chai')

const compile = require('~/test/validate')

const dataObject = require('~/metadata/data/filetype.csv.json')
const jsonSchema = require('~/specifications/filetype/filetype.schema.json')

const validator = compile(jsonSchema)

describe('~/metadata/data/filetype.csv.json', () => {
  it('has properties', () => expect(dataObject).not.to.be.empty)

  it('validates the data object', () => expect(validator(dataObject)).to.be.true)
})
