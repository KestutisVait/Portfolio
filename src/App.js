import './App.css'
import Nav from './components/nav'
// import About from './pages/About'
import { useState, useEffect } from 'react'


const App = () => {

    return (
        <div className="App container-fluid overflow-hidden d-flex justify-content-center flex-nowrap">
            <Nav />
        </div>
    )
}

export default App