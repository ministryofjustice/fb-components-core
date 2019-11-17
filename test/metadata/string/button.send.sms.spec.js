require('module-alias/register')

const {
  expect
} = require('chai')

const compile = require('~/test/validate')

const dataObject = require('~/metadata/string/button.send.sms.json')
const jsonSchema = require('~/specifications/string/string.schema.json')

const validator = compile(jsonSchema)

describe('~/metadata/string/button.send.sms.json', () => {
  it('has properties', () => expect(dataObject).not.to.be.empty)

  it('validates the data object', () => expect(validator(dataObject)).to.be.true)
})
