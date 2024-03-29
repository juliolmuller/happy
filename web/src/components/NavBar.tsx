import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import marker from '../assets/img/logo-icon.svg'
import '../styles/components/navbar.css'

function NavBar() {
  const router = useHistory()

  return (
    <aside className="navbar">
      <img src={marker} alt="Happy logo" />

      <footer>
        <button type="button" onClick={() => router.goBack()} title="Voltar">
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </footer>
    </aside>
  )
}

export default NavBar
