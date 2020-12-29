import { Express, Request } from 'express'
import multer, { Options as MulterOptions } from 'multer'
import multerS3 from 'multer-s3'
import AWS from 'aws-sdk'
import crypto from 'crypto'
import path from 'path'

type StorageType = 'local' | 's3'
type FileNameGenerator = (
  request: Request,
  file: Express.Multer.File,
  callback: (
    err: Error | null,
    result: string
  ) => void
) => void

// eslint-disable-next-line no-magic-numbers
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 megabytes
const TEMP_STORAGE = path.join(__dirname, '..', 'storage')
const storage = process.env.STORAGE_TYPE as StorageType

const generateFileName: FileNameGenerator = (_req, file, callback) => {
  const timestamp = Date.now()
  const originalName = file.originalname
  const safeFileName = crypto.createHash('md5').update(originalName).digest('hex')
  const fileExtension = originalName.slice(originalName.lastIndexOf('.'))
  const uniqueFileName = `${timestamp}-${safeFileName}${fileExtension}`

  callback(null, uniqueFileName)
}

const localStorage = () => multer.diskStorage({
  destination: TEMP_STORAGE,
  filename: generateFileName,
})

const s3Storage = () => multerS3({
  s3: new AWS.S3(),
  bucket: process.env.AWS_S3_BUCKET_NAME as string,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: 'public-read',
  key: generateFileName,
})

const storages = {
  local: localStorage,
  s3: s3Storage,
}

const options: MulterOptions = {
  dest: TEMP_STORAGE,
  storage: storages[storage](),
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter(_req, file, callback) {
    if (file.mimetype.match(/image\/[a-z-]+/i)) {
      callback(null, true)
    } else {
      callback(new Error(`Invalid file type: "${file.mimetype}".`))
    }
  },
}

export default multer(options)
