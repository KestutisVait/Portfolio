import React from 'react';
import { useState } from 'react';
import '../App.css'
// import Info from './project_info'
import styled from 'styled-components';
// import Gallery from './gallery';


const CardWrapper = styled.div`
/* common styles*/
    position: relative;
    aspect-ratio: 1.618 / 1; /*Golden ratio*/
    transition: 0.3s cubic-bezier(.52,2.06,.67,.55);
    filter: grayscale(1);
    opacity: 0;
    border: none;
    cursor: pointer;
    &:hover {
        aspect-ratio: 1.618 / 1;
        filter: grayscale(0);
    }
    @media only screen and (max-width: 767px) {
        width: 80%;
        &:hover {
            width: 95%;
        }
    }
    @media only screen and (min-width: 768px) {
        width: 70%;
        &:hover {
            width: 85%;
        }
    }
    @media only screen and (min-width: 992px) {
        width: 300px;
        border: none;
        &:hover {
            width: 400px;
        }
    }
    `;  
    const CardImage = styled.img`
    width: 100%;
    aspect-ratio: 1.618 / 1;
    object-fit: cover;
    object-position: top;
    `;
const Card = (props) => {
    const screenWidth = window.innerWidth;
        
    const [showInfo, setShowInfo] = useState(false);
    // const [showGallery, setShowGallery] = useState(false);

    
    const handleClick = (event) => {
        props.onClick(event);
        if (screenWidth < 922) setShowInfo(!showInfo);
        
    }
    const handleLeave = (event) => {
        props.onMouseLeave(event);
        if (screenWidth < 922) setShowInfo(false);
    }
    // const handleOpenGallery = (event) => {
    //     // setShowGallery(true);
    //     console.log('openning gallery');
    // }
    
    return (
        <CardWrapper 
            id={props.id} 
            className={props.className} 
            onMouseEnter={props.onMouseEnter} 
            onMouseLeave={handleLeave} 
            onClick={handleClick}
            // opengallery={props.opengallery}
        >
            <CardImage src={props.src} alt={props.alt} className='rounded' />
            {/* <Info  info={props.info}/> */}
            {/* {showInfo && <Info  info={props.info} opengallery={handleOpenGallery}/>} */}
            {/* {showGallery && <Gallery />} */}

        </CardWrapper>
    );
};

export default Card

