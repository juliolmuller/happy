import { type LeafletMouseEvent } from 'leaflet';
import { type ChangeEvent, type FormEvent, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router';

import { MapContext, NavBar } from '~/components';
import { mapIcon } from '~/components/utils';
import { apiClient } from '~/services/api';
import '~/styles/pages/orphanage-form.scss';

const DEFAULT_LATITUDE = import.meta.env.VITE_DEFAULT_LATITUDE;
const DEFAULT_LONGITUDE = import.meta.env.VITE_DEFAULT_LONGITUDE;
const MAPBOX_URL = import.meta.env.VITE_MAPBOX_URL;
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

export function OrphanageForm() {
  const navigate = useNavigate();

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [openOnWeekends, setOpenOnWeekends] = useState(false);
  const [photosPreview, setPhotosPreview] = useState<string[]>([]);

  const handleMapCLick = (event: LeafletMouseEvent) => {
    setLatitude(event.latlng.lat);
    setLongitude(event.latlng.lng);
  };

  const handleSelectPhotos = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedPhotos = Array.from(event.target.files || []);
    setPhotosPreview(selectedPhotos.map(URL.createObjectURL));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    if (latitude) formData.append('latitude', String(latitude));
    if (longitude) formData.append('longitude', String(longitude));
    formData.append('open_on_weekends', String(openOnWeekends));

    try {
      const response = await apiClient.post('/orphanages', formData);
      const orphanageId = response.data.id;

      alert('Cadastro realizado com sucesso!');
      navigate(`/orphanages/${orphanageId}`, { replace: true });
    } catch (error: unknown) {
      // TODO: display validation errors
      console.error(error);
    }
  };

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

              {latitude && longitude && (
                <Marker icon={mapIcon} position={[latitude, longitude]} interactive={false} />
              )}
            </MapContainer>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
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
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={openOnWeekends ? '' : 'active'}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button type="submit" className="confirm-button">
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}
