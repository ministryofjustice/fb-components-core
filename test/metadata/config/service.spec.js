require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/config/service.json')

describe('~/metadata/config/service.json', () => it('exists', () => expect(json).to.exist))
