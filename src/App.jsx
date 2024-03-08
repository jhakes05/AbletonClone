
import './App.css'
import Landing from './Components/Landing'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './Components/Nav'

import { useState } from 'react'
import { data } from 'autoprefixer'
function App() {

  return (
    <>
    <Nav/>
    <Landing/>
    </>
  )
}

export default App
