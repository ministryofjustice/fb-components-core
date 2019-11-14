require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/button.continue.page.start.json')

describe('~/metadata/string/button.continue.page.start.json', () => it('exists', () => expect(json).to.exist))
