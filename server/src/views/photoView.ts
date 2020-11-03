import Photo from '../models/Photo'

export interface PhotoView {
  id: number
  url: string
}

const storageURL = (fileName: string) => {
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
