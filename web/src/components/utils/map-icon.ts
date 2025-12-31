import leaflet from 'leaflet';

import marker from '~/assets/img/logo-icon.svg';

export const mapIcon = leaflet.icon({
  iconUrl: marker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});
