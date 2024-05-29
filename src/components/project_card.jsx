import React, { useEffect } from 'react';
import { useState } from 'react';
import '../App.css'
import Info from './project_info'
import styled, { keyframes } from 'styled-components';
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
    @media only screen and (max-width: 767px) {
        width: 80%;
        &.active {
            width: 400px;
            filter: grayscale(0);
        }
    }
    @media only screen and (min-width: 768px) {
        width: 70%;
        // &:hover {
        //     width: 85%;
        // }
    }
    @media only screen and (min-width: 992px) {
        width: 300px;
        border: none;
        // &:hover {
        //     width: 400px;
        // }
        &.active {
            width: 500px;
            filter: grayscale(0);
        }
    }
    `;  
    const CardImage = styled.img`
        width: 100%;
        aspect-ratio: 1.618 / 1;
        object-fit: cover;
        object-position: top;
    `;
    const clickMe_animation = keyframes`
        from {opacity: 0;}
        to {opacity: 1;}
    `;
    const ClickMe = styled.div`
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: white;
        background-color: rgb(70, 149, 180, 0.8);
        opacity: 0;
        border-radius: 5px;
        animation: ${clickMe_animation} 0.2s cubic-bezier(.11,.05,1,.13) forwards;
        // animation-delay: 0.2s;
        transaction: 0.3s;
        &:hover .closeIcon{
            transform: translate(-50%, -50%) scale(0.7);
        }
        &:hover .close-text {
            opacity: 1;
            animation: ${clickMe_animation} 0.3s cubic-bezier(.11,.05,1,.13) forwards;
        }
    `;
    const Close = styled(ClickMe)`
        background-color: rgb(70, 149, 180, 0.9);
        @media only screen and (max-width: 991px) {
            width: 10%;
            laft:0;
            top: 0;
            justify-content: flex-start;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    `;
    const fade_animation = keyframes`
        from {opacity: 1;}
        to {opacity: 0;}
    `;
    const Text = styled.p`
        margin-top: 100px;
        color: white;
        opacity: 0;
        animation: ${fade_animation} 0.3s cubic-bezier(.11,.05,1,.13) forwards;
        // @media only screen and (max-width: 991px) {
        //     opacity: 1;
        //     animation: none;
        //     font-size: 0.7rem;
        //     margin-top: 0;
        // }
    `;
    const CloseIcon = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition:  0.3s cubic-bezier(.52,2.06,.67,.55);
        @media only screen and (max-width: 991px) {
            top: 8%;
            width: 70%;
            .closeImage {
                width: 100%;
            }
        }

    `;
const Card = (props) => {
    const screenWidth = window.innerWidth;
    const active_ID = parseInt(props.activeCardId);
    const id = parseInt(props.id);
        
    const [showInfo, setShowInfo] = useState(false);
    const [showClickMe, setShowClickMe] = useState(false);
    const [active, setActive] = useState(true);
    const [showClose, setShowClose] = useState(false);

    // const [showGallery, setShowGallery] = useState(false);

    // useEffect(() => {
    //     console.log('card',id,'| active', active);
    // }, [active, id])

    useEffect(() => {
        if (props.activeCardId !== props.id) setShowClickMe(false);  
        if (props.activeCardId && props.activeCardId !== props.id) setActive(false);
        else setActive(true); 
    }, [props.activeCardId, props.id]);
    
    const handleClick = (event) => {
        if (screenWidth < 922) {
            setShowInfo(!showInfo);
            setShowClose(true);
        } else {
            props.onClick(event);
            setShowClose(true);
            if (id === active_ID) event.currentTarget.classList.add('active')
        }
        
    }
    const handleEnter = (event) => {
        if (screenWidth < 922) {
            event.currentTarget.classList.add('active')
            props.onMouseEnter(event);
        } else {
            event.currentTarget.classList.add('active')
            props.onMouseEnter(event);
            setShowClickMe(true);
        }
    }
    const handleLeave = (event) => {
        if (screenWidth < 922) {
            setShowInfo(false);
            event.currentTarget.classList.remove('active')
        } else {
            props.onMouseLeave(event);
            event.currentTarget.classList.remove('active')
            setShowClickMe(false);
        }
    }
    const handleClose = (event) => {
        event.stopPropagation();
        props.onClose();
        setActive(false);
        setShowClose(false);
        setShowInfo(false);
        document.getElementById(id).classList.remove('active');
    }
    const handleOpenGallery = (event) => {
        // setShowGallery(true);
        console.log('openning gallery');
    }
    
    return (
        <CardWrapper 
            id={props.id} 
            className={props.className} 
            onMouseEnter={active ? handleEnter : null} 
            onMouseLeave={active ? handleLeave : null} 
            onClick={active ? handleClick : null}
            // opengallery={props.opengallery}
        >
            <CardImage src={props.src} alt={props.alt} className='rounded' />
            {/* <Info  info={props.info}/> */}
            {showInfo && <Info  info={props.info} opengallery={handleOpenGallery}/>}
            {/* {showGallery && <Gallery />} */}
            {showClickMe && <ClickMe>
                <h1 className='poppins-light' style={{textAlign: 'center'}}>{props.info.title}</h1> 
                <h5 className='poppins-light'>Click for more ...</h5> 
            </ClickMe>}
            {showClose && <Close onClick={handleClose}>
                <CloseIcon className='closeIcon'>
                    <img className='closeImage' src="./images/icons/social_media/close-white.png" alt="close" />
                </CloseIcon> 
                <Text className='poppins-light close-text'>Close</Text>
            </Close>}
        </CardWrapper>
    );
};

export default Card

