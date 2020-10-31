import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', 'storage'),
  filename(req, file, callback) {
    const timestamp = Date.now()
    const originalName = file.originalname
    const safeFileName = crypto.createHash('md5').update(originalName).digest('hex')
    const fileExtension = originalName.slice(originalName.lastIndexOf('.'))
    const uniqueFileName = `${timestamp}-${safeFileName}${fileExtension}`

    callback(null, uniqueFileName)
  },
})

export default multer({ storage })
