require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/date.month.classes.json')

describe('~/metadata/string/date.month.classes.json', () => it('exists', () => expect(json).to.exist))
