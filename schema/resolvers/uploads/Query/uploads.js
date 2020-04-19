const File = require('../../../../models/file')

module.exports = {
  uploads: async (parent, args) => {
    const files = await File.find()
    if (!files) throw new Error('Not found')

    return files
  },
}
