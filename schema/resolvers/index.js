// Query
const UploadsQuery = require('./uploads/Query')

// Mutation
const UploadsMutation = require('./uploads/Mutation')

module.exports = {
  Query: {
    ...UploadsQuery,
  },
  Mutation: {
    ...UploadsMutation,
  },
}
