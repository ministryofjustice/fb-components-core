require('module-alias/register')

const Ajv = require('ajv')

const path = require('path')
const glob = require('glob-all')

const schemas = glob
  .sync('./specifications/**/*/*.schema.json')
  .reduce((accumulator, f) => accumulator.concat(require(path.resolve(f))), [])

const ajv = new Ajv({schemas})

module.exports = (jsonSchema) => ajv.compile(jsonSchema)
