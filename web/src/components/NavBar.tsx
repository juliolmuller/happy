import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import marker from '../images/logo-icon.svg'
import '../styles/components/navbar.css'

function NavBar(): ReactElement {
  const { goBack } = useHistory()

  return (
    <aside className="navbar">
      <img src={marker} alt="Happy logo" />

      <footer>
        <button type="button" onClick={goBack} title="Voltar">
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </footer>
    </aside>
  )
}

export default NavBar
