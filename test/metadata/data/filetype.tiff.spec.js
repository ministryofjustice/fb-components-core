require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const dereference = require('~/test/dereference')

const dataObject = require('~/metadata/data/filetype.tiff.json')
const jsonSchema = require('~/specifications/data/filetype/data.filetype.schema.json')

const ajv = new Ajv()

describe('~/metadata/data/filetype.tiff.json', () => {
  it('has properties', () => expect(dataObject).not.to.be.empty)

  describe('The json schema', () => it('validates the data object', async () => {
    const validator = ajv.compile(await dereference(jsonSchema))

    return expect(validator(dataObject)).to.be.true
  }))
})
