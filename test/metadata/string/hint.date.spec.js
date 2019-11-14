require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/hint.date.json')

describe('~/metadata/string/hint.date.json', () => it('exists', () => expect(json).to.exist))
