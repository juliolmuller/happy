import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router';

import marker from '../assets/img/logo-icon.svg';
import '~/styles/components/navbar.scss';

export function NavBar() {
  const navigate = useNavigate();

  return (
    <aside className="navbar">
      <img src={marker} alt="Happy logo" />

      <footer>
        <button type="button" onClick={() => navigate(-1)} title="Voltar">
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </footer>
    </aside>
  );
}
