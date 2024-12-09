import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Note from './components/props/Note'
import NewNote from './components/props/NewNote'

function App() {
  return (
    <>
      <NewNote/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
    </>
  )
}

export default App
