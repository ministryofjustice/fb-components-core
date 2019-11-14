require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/button.continue.reset.json')

describe('~/metadata/string/button.continue.reset.json', () => it('exists', () => expect(json).to.exist))
