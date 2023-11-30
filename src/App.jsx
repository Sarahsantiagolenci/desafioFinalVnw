import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./assets/Components/Home"
import About from "./assets/Components/About"
import Projects from "./assets/Components/Projects"
import "./assets/Components/Style.scss"

function App() {
return (
    <>
    <h1>olá</h1>
     < Home />
     < About />
     < Projects />
    </>
  )
}

export default App
