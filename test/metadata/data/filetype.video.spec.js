require('module-alias/register')

const {
  expect
} = require('chai')

const json = require('~/metadata/data/filetype.video.json')

describe('~/metadata/data/filetype.video.json', () => it('exists', () => expect(json).to.exist))
