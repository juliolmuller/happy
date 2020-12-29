import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import marker from '../images/logo-icon.svg'
import '../styles/components/navbar.css'

const NavBar: FC = () => {
  const router = useHistory()

  return (
    <aside className="navbar">
      <img src={marker} alt="Happy logo" />

      <footer>
        <button type="button" onClick={() => router.push('/app')} title="Voltar">
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </footer>
    </aside>
  )
}

export default NavBar
