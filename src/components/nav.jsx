import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom'

const Nav = (props) => {
    const navigate = useNavigate();

    const handleClick = async (event) => {
        const aboutElement = document.getElementById('me');
        const portfolioElement = document.getElementById('portfolio');
        const pipeElement = document.getElementById('pipe');
    
        if (event.target.id === 'me') {
            aboutElement.style.cssText = 'opacity: 0; transition-duration: 2s; transform: translateX(60%) scale(5);';
            portfolioElement.style.cssText = 'opacity: 0; transition-duration: 0.5s;';
        } else {
            portfolioElement.style.cssText = 'opacity: 0; transition-duration: 2s; transform: translateX(-15%) scale(5);';
            aboutElement.style.cssText = 'opacity: 0; transition-duration: 0.5s;';
        }
        pipeElement.style.cssText = 'opacity: 0; transition-duration: 1s;';
    
        await new Promise((resolve) => {
            setTimeout(resolve, 2000); 
        });
    
        if (event.target.id === 'me') navigate('/me');
        else navigate('/portfolio');
    }
    
    return (
        <div className="nav d-flex justify-content-center align-items-center overflow-hidden flex-nowrap" onClick={handleClick}>
            <div className='nav-button' id="me">
                <p className="poppins-thin m-0 no-cursor">ME</p>
            </div>
            <p className="poppins-thin mb-1 no-cursor px-3" id="pipe">|</p>
            <div className='nav-button' id="portfolio">
                <p className="poppins-thin m-0 no-cursor">PORTFOLIO</p>
            </div>
        </div>
    )
}

export default Nav 
