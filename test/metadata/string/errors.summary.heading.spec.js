require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/errors.summary.heading.json')

describe('~/metadata/string/errors.summary.heading.json', () => it('exists', () => expect(json).to.exist))
