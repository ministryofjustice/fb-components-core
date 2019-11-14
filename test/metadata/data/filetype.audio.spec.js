require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.audio.json')

describe('~/metadata/data/filetype.audio.json', () => it('exists', () => expect(dataObject).to.exist))
