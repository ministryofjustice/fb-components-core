require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/page/error/error.500.json')

describe('~/metadata/page/error/error.500.json', () => it('exists', () => expect(json).to.exist))
