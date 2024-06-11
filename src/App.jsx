import React from 'react'
import './App.css'
import HeroPage from './pages/HeroPage'
import "./App.css";
import HeroExplain from './components/HeroExplain';
import Header from './components/Header';
import Youtube from './components/Youtube';
import Marquee from './components/Marquee';
import People_Introduce from './components/People_Introduce';

function App() {
  

  return (
    <>
      <Header/>
      <HeroPage/>
      <HeroExplain/>
      <Youtube/>
      <Marquee/>
      <People_Introduce/>
    </>
  )
}

export default App
