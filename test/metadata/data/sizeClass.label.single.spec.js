require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/sizeClass.label.single.json')

describe('~/metadata/data/sizeClass.label.single.json', () => it('exists', () => expect(json).to.exist))
