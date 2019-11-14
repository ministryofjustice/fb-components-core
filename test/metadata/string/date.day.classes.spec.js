require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/string/date.day.classes.json')

describe('~/metadata/string/date.day.classes.json', () => it('exists', () => expect(json).to.exist))
