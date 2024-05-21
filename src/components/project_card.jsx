import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css'
import Info from './project_info'
import styled from 'styled-components';

const CardWrapper = styled.div`
/* common styles*/
    aspect-ratio: 1.618 / 1; /*Golden ratio*/
    object-fit: cover;
    transition: 0.3s cubic-bezier(.52,2.06,.67,.55);
    filter: grayscale(1);
    opacity: 0;
    border: none;
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
`;

const Card = (props) => {
    const screenWidth = window.innerWidth;
    
    const [showInfo, setShowInfo] = useState(false);

    const handleEnter = (event) => {
        const target_card = event.currentTarget;
        
        if (screenWidth < 768){
            setShowInfo(true);
            target_card.style.width = '95%';
            target_card.style.filter = 'grayscale(0)';
        } else if (screenWidth >= 768 && screenWidth < 992) {
            setShowInfo(true);
            target_card.style.width = '85%';
            target_card.style.filter = 'grayscale(0)';
        } else {}

    }
    const handleLeave = (event) => {
        const target_card = event.currentTarget;

        if (screenWidth < 768) {
            setShowInfo(false);
            target_card.style.width = '80%';
            target_card.style.filter = 'grayscale(1)';
        } else if (screenWidth >= 768 && screenWidth < 992) {
            setShowInfo(false);
            target_card.style.width = '70%';
            target_card.style.filter = 'grayscale(1)';
        } else {}
    }
    const handleClick = (event) => {
        if (screenWidth <= 768) {
            if (!showInfo) handleEnter(event);
            else handleLeave(event);
        }
    }

    return (
        <CardWrapper id={props.id} className={props.className} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleClick}>
            <CardImage src={props.src} alt={props.alt} />
            {showInfo && <Info />}
        </CardWrapper>
    )
}

export default Card