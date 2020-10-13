import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import logoImg from './assets/img/logo.svg'
import './assets/styles/global.css'
import './assets/styles/landing.css'

const App: React.FC = () => (
  <div id="landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="Happy logo"/>

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div className="location">
        <strong>Curitiba</strong>
        <span>Paraná</span>
      </div>

      <a href="#" className="enter-app">
        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
      </a>
    </div>
  </div>
)

export default App
