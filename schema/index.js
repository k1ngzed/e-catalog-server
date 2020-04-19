const { makeExecutableSchema } = require('apollo-server')

const resolvers = require('./resolvers')
// Schema
const file = require('./typeDefs/file')

const schema = makeExecutableSchema({
  typeDefs: [file],
  resolvers,
})

module.exports = schema
