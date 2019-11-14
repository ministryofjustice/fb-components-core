require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/component/radios.yes-no.json')

describe('~/metadata/component/radios.yes-no.json', () => it('exists', () => expect(json).to.exist))
