/* eslint-disable no-magic-numbers */
import leaflet from 'leaflet'
import marker from '../../images/logo-icon.svg'

const mapIcon = leaflet.icon({
  iconUrl: marker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

export default mapIcon
