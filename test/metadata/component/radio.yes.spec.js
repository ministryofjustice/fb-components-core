require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/component/radio.yes.json')

describe('~/metadata/component/radio.yes.json', () => it('exists', () => expect(json).to.exist))
