require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/button.save.json')

describe('~/metadata/string/button.save.json', () => it('exists', () => expect(json).to.exist))
