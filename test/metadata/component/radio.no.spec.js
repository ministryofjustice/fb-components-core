require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/component/radio.no.json')

describe('~/metadata/component/radio.no.json', () => it('exists', () => expect(json).to.exist))
