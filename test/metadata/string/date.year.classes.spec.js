require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/date.year.classes.json')

describe('~/metadata/string/date.year.classes.json', () => it('exists', () => expect(json).to.exist))
