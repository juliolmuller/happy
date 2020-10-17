import React, { FormEvent, ReactElement, useState } from 'react'
import { LeafletMouseEvent } from 'leaflet'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { FiPlus } from 'react-icons/fi'
import mapIcon from '../components/utils/mapIcon'
import NavBar from '../components/NavBar'
import '../styles/pages/orphanage-form.css'

function OrphanageForm(): ReactElement {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    })
  }

  const handleMapCLick = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng

    setLatitude(lat)
    setLongitude(lng)
  }

  return (
    <div id="page-create-orphanage">
      <NavBar />

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-25.4719491, -49.2877479]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapCLick}
            >
              <TileLayer url={`${process.env.REACT_APP_MAPBOX_URL}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

              {latitude && longitude &&
                <Marker icon={mapIcon} position={[latitude, longitude]} interactive={false} />
              }
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>
              <div className="uploaded-image"></div>
              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                type="text"
                id="opening_hours"
                value={opening_hours}
                onChange={(event) => setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >Sim</button>
                <button
                  type="button"
                  className={open_on_weekends ? '' : 'active'}
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
