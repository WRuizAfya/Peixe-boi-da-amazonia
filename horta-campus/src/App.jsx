import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'
import Home from './pages/home'
import Registro from './pages/registro'
import { Routes, Route, Link} from 'react-router'

function App() {

  return (
    
    <div className="App">
		
		<nav>
			<Link to="/"> Início </Link>
			<Link to="/rega"> Regas </Link>	
		</nav>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/rega" element={<Registro />} />
			<Route path="*" element={<h1> Pagina Não Encontrada</h1>} />
		</Routes>
		<Card />
    </div>
  )
}

export default App
