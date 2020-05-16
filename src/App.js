import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <DisclaimerSection />
      <FooterSection />
    </div>
  )
}

export default App
