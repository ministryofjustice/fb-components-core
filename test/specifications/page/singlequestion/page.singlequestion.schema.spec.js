require('module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const dereference = require('~/test/dereference')

const dataObject = require('~/test/specifications/page/singlequestion/page.singlequestion.json')
const jsonSchema = require('~/specifications/page/singlequestion/page.singlequestion.schema.json')

const ajv = new Ajv()

describe('~/specifications/page/singlequestion/page.singlequestion.schema.json', () => {
  describe('The data object', () => it('has properties', () => expect(dataObject).not.to.be.empty))

  describe('The json schema', () => it('validates the data object', async () => {
    const validator = ajv.compile(await dereference(jsonSchema))

    return expect(validator(dataObject)).to.be.true
  }))
})
