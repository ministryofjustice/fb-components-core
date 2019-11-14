require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/sizeClass.legend.single.json')

describe('~/metadata/data/sizeClass.legend.single.json', () => it('exists', () => expect(json).to.exist))
