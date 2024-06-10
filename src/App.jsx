import React from 'react'
import './App.css'
import HeroPage from './pages/HeroPage'
import "./App.css";
import HeroExplain from './components/HeroExplain';
import Header from './components/Header';

function App() {
  

  return (
    <>
      <Header/>
      <HeroPage/>
      <HeroExplain/>
    </>
  )
}

export default App
