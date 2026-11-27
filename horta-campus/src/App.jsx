import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'
import Header from './components/header.jsx'
import Home from './pages/home'
import Registro from './pages/registro'
import { Routes, Route, Link} from 'react-router'

function App() {

  return (
    
    <div className="App">
		<Header />
		<nav>
			<Link to="/"> Início </Link>
			<Link to="/rega"> Regas </Link>	
		</nav>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/rega" element={<Registro />} />
			<Route path="*" element={<h1> Pagina Não Encontrada</h1>} />
		</Routes>
		<h1>Bem-vindo ao Horta Campus!</h1>
		<Card />
    </div>
  )
}

export default App
