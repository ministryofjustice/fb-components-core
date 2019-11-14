require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/component/radio.unsure.json')

describe('~/metadata/component/radio.unsure.json', () => it('exists', () => expect(json).to.exist))
