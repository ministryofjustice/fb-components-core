require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/question.optional.json')

describe('~/metadata/string/question.optional.json', () => it('exists', () => expect(json).to.exist))
