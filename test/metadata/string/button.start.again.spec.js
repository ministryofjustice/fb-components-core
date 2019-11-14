require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/button.start.again.json')

describe('~/metadata/string/button.start.again.json', () => it('exists', () => expect(json).to.exist))
