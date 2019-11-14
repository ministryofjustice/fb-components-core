require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/sizeClass.legend.multiple.json')

describe('~/metadata/data/sizeClass.legend.multiple.json', () => it('exists', () => expect(json).to.exist))
