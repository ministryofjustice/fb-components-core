require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/button.continue.page.start.classes.json')

describe('~/metadata/string/button.continue.page.start.classes.json', () => it('exists', () => expect(json).to.exist))
