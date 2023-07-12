import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AraratSchool from './AraratAitCenter'
import LanguageProvider from './Component'

function App() {

  return (
    <>
  <LanguageProvider>
    <AraratSchool/>
  </LanguageProvider>
    </>
  )
}

export default App
