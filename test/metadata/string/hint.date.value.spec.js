require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/hint.date.value.json')

describe('~/metadata/string/hint.date.value.json', () => it('exists', () => expect(json).to.exist))
