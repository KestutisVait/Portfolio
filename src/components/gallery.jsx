import React, { useState } from 'react';
import '../App.css';
import styled, { keyframes } from 'styled-components';

const enter_animation = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    // background-color: rgba(0, 0, 0, 0.8);
    animation: ${enter_animation} 0.4s ease-in forwards;
`;
const Controlls = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition:  0.2s;
    transition-timing-function: cubic-bezier(.52,2.06,.67,.55);
    &:hover {
        transform: scale(1.3);
    }
`;
const Image = styled.img`
    width: 60%;
    aspect-ratio: 1.68/1;
    boarder: none;
    border-radius: 3px;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.3);
    object-fit: cover;
    object-position: top;
`;

const Gallery = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.images.length - 1 : prevIndex - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === props.images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Wrapper id="gallery">
            <Controlls src={'./images/icons/social_media/prev.png'} alt="previous" onClick={handlePrevious}  $prev></Controlls>
            <Image src={`./images/${props.project}/${props.images[currentIndex]}`} alt="image" ></Image>
            <Controlls src={"./images/icons/social_media/next.png"} onClick={handleNext} alt="next"></Controlls>
            <Controlls 
                style={{position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)'}}
                src={"./images/icons/social_media/close.png"} 
                onClick={props.closeGallery} 
                alt="close">
            </Controlls>
        </Wrapper>
    )
}

export default Gallery
