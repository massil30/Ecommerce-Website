import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header.jsx'
import HeroSection from './hero.jsx'
import RangeSection from './range.jsx'
export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <RangeSection/>
    </div>
  )
}

