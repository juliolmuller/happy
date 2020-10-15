/* eslint-disable camelcase */
import Photo from '../models/Photo'

export interface PhotoView {
  id: number
  url: string
}

function storageURL(fileName: string): string {
  const appRoot = process.env.APP_ROOT || 'http://localhost'
  const port = process.env.PORT || 3030

  return `${appRoot}:${port}/storage/${fileName}`
}

function render(photo: Photo): PhotoView {
  return {
    id: photo.id,
    url: storageURL(photo.path),
  }
}

function renderMany(photos: Photo[]): PhotoView[] {
  return photos.map((photo) => render(photo))
}

export default { render, renderMany }
