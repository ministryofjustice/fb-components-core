require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/button.continue.json')

describe('~/metadata/string/button.continue.json', () => it('exists', () => expect(json).to.exist))
