import fs from 'fs-extra';
import path from 'node:path';

export function getStorageURL(path: string): string {
  if (process.env.STORAGE_TYPE === 's3') {
    return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${path}`;
  }

  return `${process.env.APP_ROOT}/static/${path}`;
}

export async function sendToStorage(tempPath: string, partialPath: string): Promise<void> {
  if (process.env.STORAGE_TYPE === 's3') {
    // TODO: Implement S3 upload
  }

  const localStoragePath = path.resolve(process.cwd(), 'storage', partialPath);

  await fs.move(tempPath, localStoragePath, { overwrite: true });
}
