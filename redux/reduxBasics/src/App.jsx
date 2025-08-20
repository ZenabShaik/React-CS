import { useState } from 'react'
import './App.css'
import ReduxCounter from './components/reduxComponent/ReduxCounter'
import ReduxUser from './components/reduxComponent/ReduxUser'

function App() {

  return (
    <>
      <ReduxCounter></ReduxCounter>
      <ReduxUser></ReduxUser>
    </>
  )
}

export default App
