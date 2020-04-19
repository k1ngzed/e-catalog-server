const File = require('../../../../models/file')

module.exports = {
  singleUpload: async (parent, args) => {
    return args.file.then(async (file) => {
      const createFile = new File()
      const id = createFile._id

      createFile.filename = `${id}-${file.filename}`
      createFile.mimetype = file.mimetype
      createFile.encoding = file.encoding

      const result = await createFile.save()
      return result
    })
  },
}
