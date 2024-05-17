import './App.css'
import Nav from './components/nav'
// import About from './pages/About'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const App = () => {

    const navigate = useNavigate();
    
    const [showNav, setShowNav] = useState(true);
    

    const handleFade = async (id) => {
        const nav = document.getElementById('nav')
        const active_button = document.getElementById(id)
        active_button.style.fontSize = '5.5rem';
        active_button.style.transitionDuration = '4s';
        nav.style.opacity = 0;
        nav.style.transitionDuration = '1.5s';

        await new Promise((resolve) => {
            setTimeout(resolve, 1500); 
        });
        setShowNav(false);
        if (id === 'about') navigate('/me');
    }

    return (
        <>
            {showNav && <div id= 'nav'>
                <Nav id fade={handleFade} />
            </div>}
            {/* {showMe && <div className='poppins-light' id= 'me'>
                <About />    
            </div>} */}
        </>
    )
}

export default App