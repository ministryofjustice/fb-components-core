require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.powerpoint.json')

describe('~/metadata/data/filetype.powerpoint.json', () => it('exists', () => expect(dataObject).to.exist))
