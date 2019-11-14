require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/page/error/error.404.json')

describe('~/metadata/page/error/error.404.json', () => it('exists', () => expect(json).to.exist))
