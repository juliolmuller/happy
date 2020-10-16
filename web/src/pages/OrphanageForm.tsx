import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft, FiPlus } from 'react-icons/fi'
import leaflet from 'leaflet'
import { Map, Marker, TileLayer } from 'react-leaflet'
import marker from '../assets/img/logo-icon.svg'
import '../assets/styles/orphanage-form.css'

const mapIcon = leaflet.icon({
  iconUrl: marker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
})

function OrphanageForm(): ReactElement {
  const { goBack } = useHistory()

  return (
    <div id="page-create-orphanage">
      <aside>
        <img src={marker} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-25.4719491, -49.2877479]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer url={`${process.env.REACT_APP_MAPBOX_URL}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
              <Marker interactive={false} icon={mapIcon} position={[-25.4719491, -49.2877479]} />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
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
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  )
}

export default OrphanageForm
