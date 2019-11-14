require('module-alias/register')

const {
  expect
} = require('chai')

const dataObject = require('~/metadata/data/filetype.video.json')

describe('~/metadata/data/filetype.video.json', () => it('exists', () => expect(dataObject).to.exist))
