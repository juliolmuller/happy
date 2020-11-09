import Photo from '../models/Photo'

export interface PhotoView {
  id: number
  url: string
}

const storageURL = (fileName: string) => {
  if (process.env.STORAGE_TYPE === 's3') {
    return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`
  }

  return `${process.env.APP_ROOT}/photos/${fileName}`
}

const render = (photo: Photo): PhotoView => {
  return {
    id: photo.id,
    url: storageURL(photo.path),
  }
}

const renderMany = (photos: Photo[]): PhotoView[] => {
  return photos.map(render)
}

export default { render, renderMany }
