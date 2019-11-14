require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/config/config.header.json')

describe('~/metadata/config/config.header.json', () => it('exists', () => expect(json).to.exist))
