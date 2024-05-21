import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css'

const Card = (props) => {
    const screenWidth = window.innerWidth;
    
    const [showInfo, setShowInfo] = useState(false);

    const handleEnter = (event) => {
        const target_card = event.currentTarget;
        
        if (screenWidth <= 600){
            setShowInfo(true);
            target_card.style.width = '95%';
        }
    }
    const handleLeave = (event) => {
        const target_card = event.currentTarget;
        if (screenWidth <= 600) {
            setShowInfo(false);
            target_card.style.width = '80%';

        }
    }
    const handleClick = (event) => {
        if (screenWidth <= 600) {
            if (!showInfo) handleEnter(event);
            else handleLeave(event);
        }
    }

    return (
        <div id={props.id} className={props.className} onMouseEnter={handleEnter} onMouseLeave={handleLeave}  onClick={handleClick}>
            <img src={props.src} alt={props.alt}  className='card-img'/>
            {showInfo && <div style={{height: '200px', border: '1px solid black', width: '100%', backgroundColor: 'black'}}></div>}
        </div>
    )
}

export default Card
