require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/sizeClass.heading.page.start.json')

describe('~/metadata/data/sizeClass.heading.page.start.json', () => it('exists', () => expect(json).to.exist))
