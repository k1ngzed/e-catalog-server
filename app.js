const { ApolloServer } = require('apollo-server')

require('./config')

const schema = require('./schema')

const server = new ApolloServer({
  uploads: {
    maxFileSize: 10000000, // 10 MB
    maxFiles: 20,
  },
  schema,
})

server.listen(process.env.PORT, (error) => {
  console.info(
    `Serving http://localhost:${process.env.PORT} for ${process.env.NODE_ENV}.`
  )
})
