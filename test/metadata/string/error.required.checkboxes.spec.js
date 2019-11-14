require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/error.required.checkboxes.json')

describe('~/metadata/string/error.required.checkboxes.json', () => it('exists', () => expect(json).to.exist))
