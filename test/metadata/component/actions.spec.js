require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/component/actions.json')

describe('~/metadata/component/actions.json', () => it('exists', () => expect(json).to.exist))
