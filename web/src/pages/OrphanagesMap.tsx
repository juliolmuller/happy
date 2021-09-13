import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import mapIcon from '../components/utils/mapIcon'
import marker from '../assets/img/logo-icon.svg'
import http from '../services/api'
import '../styles/pages/orphanages-map.css'

const {
  REACT_APP_DEFAULT_LATITUDE: DEFAULT_LATITUDE,
  REACT_APP_DEFAULT_LONGITUDE: DEFAULT_LONGITUDE,
  REACT_APP_MAPBOX_URL: MAPBOX_URL,
  REACT_APP_MAPBOX_TOKEN: MAPBOX_TOKEN,
} = process.env

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    http
      .get('/orphanages')
      .then(({ data }) => setOrphanages(data))
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

      <MapContainer
        style={{ width: '100%', height: '100%' }}
        center={[Number(DEFAULT_LATITUDE), Number(DEFAULT_LONGITUDE)]}
        zoom={13}
      >
        <TileLayer url={`${MAPBOX_URL}?access_token=${MAPBOX_TOKEN}`} />

        {orphanages.map((orphanage) => (
          <Marker key={orphanage.id} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]}>
            <Popup closeButton={false} minWidth={240} maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <Link to="/orphanages/new" title="Cadastrar orfanato" className="btn-new-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap
