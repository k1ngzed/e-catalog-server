const mongoose = require('mongoose')

const { Schema } = mongoose

const fileSchema = new Schema({
  encoding: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('File', fileSchema)
