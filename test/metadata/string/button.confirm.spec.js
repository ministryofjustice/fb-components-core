require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/button.confirm.json')

describe('~/metadata/string/button.confirm.json', () => it('exists', () => expect(json).to.exist))
