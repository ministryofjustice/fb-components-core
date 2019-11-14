require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/sizeClass.heading.json')

describe('~/metadata/data/sizeClass.heading.json', () => it('exists', () => expect(json).to.exist))
