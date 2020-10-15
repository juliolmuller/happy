import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', 'storage'),
  filename(req, file, callback) {
    const fileName = `${Date.now()}_${file.originalname}`

    callback(null, fileName)
  },
})

export default multer({ storage })
