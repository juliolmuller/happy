/* eslint-disable camelcase */
import Photo from '../models/Photo'

export interface PhotoView {
  id: number
  url: string
}

const storageURL = (fileName: string) => {
  const appRoot = process.env.APP_ROOT || 'http://localhost'
  const port = process.env.PORT || 3030

  return `${appRoot}:${port}/photos/${fileName}`
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
