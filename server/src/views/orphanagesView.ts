import Orphanage from '../models/Orphanage'
import photoView, { PhotoView } from './photoView'

export interface OrphanageView {
  id: number
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  photos: PhotoView[]
}

export const render = (orphanage: Orphanage): OrphanageView => {
  return {
    id: orphanage.id,
    name: orphanage.name,
    latitude: orphanage.latitude,
    longitude: orphanage.longitude,
    about: orphanage.about,
    instructions: orphanage.instructions,
    opening_hours: orphanage.openingHours,
    open_on_weekends: orphanage.openOnWeekends,
    photos: photoView.renderMany(orphanage.photos),
  }
}

export const renderMany = (orphanages: Orphanage[]): OrphanageView[] => {
  return orphanages.map(render)
}

export default { render, renderMany }
