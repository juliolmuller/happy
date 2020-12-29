import { FC } from 'react'
import { LeafletMouseEventHandlerFn } from 'leaflet'
import { useMapEvent } from 'react-leaflet'

interface MapContextProps {
  onClick: LeafletMouseEventHandlerFn
}

const MapContext: FC<MapContextProps> = ({ onClick }) => {
  useMapEvent('click', onClick)

  return null
}

export default MapContext
