import { type LeafletMouseEventHandlerFn } from 'leaflet';
import { useMapEvent } from 'react-leaflet';

export interface MapContextProps {
  onClick: LeafletMouseEventHandlerFn;
}

export function MapContext({ onClick }: MapContextProps) {
  useMapEvent('click', onClick);

  return <>{null}</>;
}
