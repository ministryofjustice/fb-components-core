require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/repeatableAdd.json')

describe('~/metadata/string/repeatableAdd.json', () => it('exists', () => expect(json).to.exist))
