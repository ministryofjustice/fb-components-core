require('module-alias/register')

const $RefParser = require('json-schema-ref-parser')

module.exports = async (jsonSchema) => $RefParser.dereference(jsonSchema, {
  resolve: {
    schema: {
      order: 1,
      canRead: /^http:\/\/gov.uk\/schema\/v1\.0\.0/i,
      async read (file, done) {
      	return require(file.url.replace(/^http:\/\/gov.uk\/schema\/v1\.0\.0/, '~/specifications'))
      }
    }
  }
})
