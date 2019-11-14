require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/button.continue.page.summary.json')

describe('~/metadata/string/button.continue.page.summary.json', () => it('exists', () => expect(json).to.exist))
