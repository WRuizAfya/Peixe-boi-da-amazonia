import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'
import Header from './components/header.jsx'

function App() {

  return (
    
    <div className="App">
		<Header />
		<h1>Bem-vindo ao Horta Campus!</h1>
		<Card />
    </div>
  )
}

export default App
