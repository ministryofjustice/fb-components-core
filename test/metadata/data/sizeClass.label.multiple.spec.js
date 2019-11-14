require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/sizeClass.label.multiple.json')

describe('~/metadata/data/sizeClass.label.multiple.json', () => it('exists', () => expect(json).to.exist))
