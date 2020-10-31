import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', 'storage'),
  filename(req, file, callback) {
    const timestamp = Date.now()
    const safeFileName = escape(file.originalname)
    const uniqueFileName = `${timestamp}-${safeFileName}`

    callback(null, uniqueFileName)
  },
})

export default multer({ storage })
