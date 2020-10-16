import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import leaflet from 'leaflet'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import marker from '../assets/img/logo-icon.svg'
import 'leaflet/dist/leaflet.css'
import '../assets/styles/orphanages-map.css'

const mapIcon = leaflet.icon({
  iconUrl: marker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

function OrphanagesMap(): ReactElement {
  return (
    <div id="orphanages-map">
      <aside>
        <header>
          <img src={marker} alt="Happy icon" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Curitiba</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <Map
        // eslint-disable-next-line no-magic-numbers
        center={[-25.4321773, -49.2884007]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`${process.env.REACT_APP_MAPBOX_URL}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        <Marker icon={mapIcon} position={[-25.4719491, -49.2877479]}>
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar das Meninas
            <Link to="">
              <FiArrowRight size={20} color="#ffff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="" title="Cadastrar orfanato" className="btn-new-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap
