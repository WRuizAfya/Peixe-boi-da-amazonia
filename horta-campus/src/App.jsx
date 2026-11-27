import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Registro from './pages/registro'
import { Routes, Route, link } from 'react-router'
import Header from './components/header'

function App() {

  return (
    
    <div className="App">
      
      <h1>Bem-vindo ao Horta Campus!</h1>
    
      <Header />
    </div>
  )
}

export default App
