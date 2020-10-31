import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import mapIcon from '../components/utils/mapIcon'
import marker from '../images/logo-icon.svg'
import api from '../services/api'
import '../styles/pages/orphanages-map.css'

interface Orphanage {
  id: number
  name: string
  latitude: number
  longitude: number
}

const OrphanagesMap: FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('/orphanages').then((response) => {
      setOrphanages(response.data)
    })
  }, [])

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

        {orphanages.map((orphanage) => (
          <Marker key={orphanage.id} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]}>
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="/orphanages/new" title="Cadastrar orfanato" className="btn-new-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap
