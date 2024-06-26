import React from 'react'
import './App.css'
import HeroPage from './pages/HeroPage'
import "./App.css";
import HeroExplain from './components/HeroExplain';
import Header from './components/Header';
import Youtube from './components/Youtube';
import Marquee from './components/Marquee';
import PeopleIntroduce from './components/PeopleIntroduce';
import Tracks from './components/Tracks';
import EndBannerComponent from './components/EndBannerComponent';

function App() {
  

  return (
    <>
      <Header/>
      <HeroPage/>
      <HeroExplain/>
      <Youtube/>
      <Marquee/>
      <PeopleIntroduce/>
      <Tracks/>
      {/* <EndBannerComponent/> */}
      <Marquee/>
    </>
  )
}

export default App
