import { ChangeEvent, FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LeafletMouseEvent } from 'leaflet'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { FiPlus } from 'react-icons/fi'
import mapIcon from '../components/utils/mapIcon'
import MapContext from '../components/MapContext'
import NavBar from '../components/NavBar'
import api from '../services/api'
import '../styles/pages/orphanage-form.css'

const {
  REACT_APP_DEFAULT_LATITUDE: DEFAULT_LATITUDE,
  REACT_APP_DEFAULT_LONGITUDE: DEFAULT_LONGITUDE,
  REACT_APP_MAPBOX_URL: MAPBOX_URL,
  REACT_APP_MAPBOX_TOKEN: MAPBOX_TOKEN,
} = process.env

function OrphanageForm() {
  const router = useHistory()

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [openOnWeekends, setOpenOnWeekends] = useState(false)
  const [photosPreview, setPhotosPreview] = useState<string[]>([])

  const handleMapCLick = (event: LeafletMouseEvent) => {
    setLatitude(event.latlng.lat)
    setLongitude(event.latlng.lng)
  }

  const handleSelectPhotos = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedPhotos = Array.from(event.target.files || [])
    setPhotosPreview(selectedPhotos.map(URL.createObjectURL))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    latitude && formData.append('latitude', String(latitude))
    longitude && formData.append('longitude', String(longitude))
    formData.append('open_on_weekends', String(openOnWeekends))

    try {
      const response = await api.post('/orphanages', formData)
      const orphanageId = response.data.id

      alert('Cadastro realizado com sucesso!')
      router.push(`/orphanages/${orphanageId}`)
    } catch (error) {
      // TODO: display validation errors
      console.error(error, { ...error })
    }
  }

  return (
    <div id="page-orphanage-form">
      <NavBar />

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <MapContainer
              style={{ width: '100%', height: 280 }}
              center={[Number(DEFAULT_LATITUDE), Number(DEFAULT_LONGITUDE)]}
              zoom={15}
            >
              <MapContext onClick={handleMapCLick} />

              <TileLayer url={`${MAPBOX_URL}?access_token=${MAPBOX_TOKEN}`} />

              {latitude && longitude
                && <Marker icon={mapIcon} position={[latitude, longitude]} interactive={false} />
              }
            </MapContainer>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="about" name="about" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="photos">Fotos</label>
              <input
                type="file"
                accept="image/*"
                id="photo[]"
                name="photos"
                multiple
                onChange={handleSelectPhotos}
              />
              <div className="photos-container">
                {photosPreview.map((photoURL, index) => (
                  <img key={index} src={photoURL} alt="Foto do orfanato" />
                ))}
                <label htmlFor="photo[]" className="new-photo">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" name="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input type="text" id="opening_hours" name="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>
              <div className="button-select">
                <button
                  type="button"
                  className={openOnWeekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >Sim</button>
                <button
                  type="button"
                  className={openOnWeekends ? '' : 'active'}
                  onClick={() => setOpenOnWeekends(false)}
                >Não</button>
              </div>
            </div>
          </fieldset>

          <button type="submit" className="confirm-button">
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  )
}

export default OrphanageForm
