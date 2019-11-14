require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/repeatableDelete.json')

describe('~/metadata/string/repeatableDelete.json', () => it('exists', () => expect(json).to.exist))
