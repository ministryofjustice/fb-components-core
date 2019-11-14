require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/component/radios.yes-no-unsure.json')

describe('~/metadata/component/radios.yes-no-unsure.json', () => it('exists', () => expect(json).to.exist))
