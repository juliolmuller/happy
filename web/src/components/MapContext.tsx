/* eslint-disable react/jsx-filename-extension */
import { LeafletMouseEventHandlerFn } from 'leaflet'
import { useMapEvent } from 'react-leaflet'

interface MapContextProps {
  onClick: LeafletMouseEventHandlerFn
}

function MapContext({ onClick }: MapContextProps) {
  useMapEvent('click', onClick)

  return null
}

export default MapContext
