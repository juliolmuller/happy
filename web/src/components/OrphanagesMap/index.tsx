import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'
import marker from '../../assets/img/logo-icon.svg'
import 'leaflet/dist/leaflet.css'
import '../../assets/styles/orphanages-map.css'

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
        center={[-25.4680259, -49.2456969]}
        zoom={12.25}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`${process.env.REACT_APP_MAPBOX_URL}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" title="Cadastrar orfanato" className="btn-new-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap
