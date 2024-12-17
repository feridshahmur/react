import { useState } from 'react'

import './App.css'

import { Cards } from './components/cards/cards'
import Footer from './components/footer/footer'
import Header from './header/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <hr />
    <div className="cards">
    <Cards name="farid" group={"azmp202"} vezife={"balam uchun kod yaziram"}/>
    <Cards name="RASHID" group={"azmp202"} vezife={"front-end"}/>
    <Cards name="nihad" group={"azmp202"} vezife={"front-end"}/>
    </div>
    <hr />
    <Footer/>
    </>
  )
}

export default App
