import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import HomeMain from "./screens/HomeMain"
import Header from "./components/Header.js"

const App = () => {
  return (
    <Router>
      <Header />

      <main className='main' style={{ background: "#0d0d0d", color: "white" }}>
        <Route path='/' component={HomeMain} exact />
      </main>
    </Router>
  )
}

export default App
