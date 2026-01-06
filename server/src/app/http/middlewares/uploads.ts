import { type RequestHandler } from 'express';
import multer, { type Options as MulterOptions } from 'multer';
import crypto from 'node:crypto';
import path from 'node:path';

interface UploadOptions {
  maxFileSize?: number;
  mimetype?: RegExp;
  tempStorage?: string;
}

const DEFAULT_MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 megabytes
const DEFAULT_TEMP_STORAGE = path.resolve(process.cwd(), 'tmp');

function createMulterOptions(options: UploadOptions): MulterOptions {
  return {
    dest: DEFAULT_TEMP_STORAGE,
    storage: multer.diskStorage({
      destination: DEFAULT_TEMP_STORAGE,
      filename(_request, file, callback) {
        const timestamp = Date.now();
        const originalName = file.originalname;
        const safeFileName = crypto.createHash('md5').update(originalName).digest('hex');
        const fileExtension = originalName.slice(originalName.lastIndexOf('.'));
        const uniqueFileName = `${timestamp}-${safeFileName}${fileExtension}`;

        callback(null, uniqueFileName);
      },
    }),
    limits: {
      fileSize: options.maxFileSize ?? DEFAULT_MAX_FILE_SIZE,
    },
    fileFilter(_request, file, callback): void {
      if (!options.mimetype || options.mimetype.test(file.mimetype)) {
        callback(null, true);
      } else {
        callback(new Error(`Invalid file type: "${file.mimetype}".`));
      }
    },
  };
}

export function uploadOne(fieldName: string, options: UploadOptions = {}): RequestHandler {
  const multerOptions = createMulterOptions({ ...options });

  return multer(multerOptions).single(fieldName);
}

export function uploadMany(fieldName: string, options: UploadOptions = {}): RequestHandler {
  const multerOptions = createMulterOptions({ ...options });

  return multer(multerOptions).array(fieldName);
}
