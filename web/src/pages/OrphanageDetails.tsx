import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { FiClock, FiInfo } from 'react-icons/fi'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import mapIcon from '../components/utils/mapIcon'
import NavBar from '../components/NavBar'
import api from '../services/api'
import '../styles/pages/orphanage-details.css'

interface Orphanage {
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  photos: Array<{
    url: string
  }>
}

interface OrphanageDetailsParams {
  id: string
}

const OrphanageDetails: FC = () => {
  const routeParams = useParams<OrphanageDetailsParams>()
  const [orphanage, setOrphanage] = useState<Orphanage>()
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    api.get(`/orphanages/${routeParams.id}`).then((response) => {
      setOrphanage(response.data)
    })
  }, [routeParams.id])

  if (!orphanage) {
    // TODO: add loading animation
    return <h1 style={{ color: 'black' }}>Loading...</h1>
  }

  return (
    <div id="page-orphanage">
      <NavBar />

      <main>
        <div className="orphanage-details">
          <img src={orphanage.photos[activeImage].url} alt={`Foto de ${orphanage.name}`} />

          <div className="images">
            {orphanage.photos.map((photo, index) => (
              <button
                key={index}
                type="button"
                className={ index === activeImage ? 'active' : ''}
                onClick={() => setActiveImage(index)}
              >
                <img src={photo.url} alt={`Foto de ${orphanage.name}`} />
              </button>
            ))}
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            {orphanage.about.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="map-container">
              <MapContainer
                style={{ width: '100%', height: 280 }}
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer url={`${process.env.REACT_APP_MAPBOX_URL}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </MapContainer>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />
            <h2>Instruções para visita</h2>
            {orphanage.instructions.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>

              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends not-open">
                  <FiInfo size={32} color="#ff669d" />
                  Não atendemos <br />
                  fim de semana
                </div>
              )}
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OrphanageDetails
