import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoogleLogin from './components/googleLogin'
import FacebookLogin from './components/facebookLogin'
function App() {

  return (
    <>
     <GoogleLogin />
     <FacebookLogin />
    </>
  )
}

export default App
