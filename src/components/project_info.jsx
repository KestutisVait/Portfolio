import React, { useEffect, useState } from 'react';
import '../App.css';
import styled, { keyframes } from 'styled-components';
// import Gallery from './gallery';

const enter_animation = keyframes`
    from {opacity: 0; width: 0;}
    to {opacity: 1; width: 100%;}
`;
const enter_animation_button = keyframes`
    from {opacity: 0; transform: translateX(40%);}
    to {opacity: 1; transform: translateX(0%);} 
`;
const Wrapper = styled.div`
    position: absolute;
    // height: 100%;
    padding: 10px;
    animation: ${enter_animation} 0.3s cubic-bezier(.52,2.06,.67,.55) forwards; 
    @media only screen and (max-width: 991px) {
        width: 100%;
        right: 0;
        background-color: rgb(255, 255, 255, 0.8);
        backdrop-filter: blur(5px);
        border-radius: 3px;
        background-color: rgb(255, 255, 255, 0.8);
        display: grid;
        grid-template-rows: 40px 1fr 1fr 1fr;
        grid-template-areas:
        "title title . tools"
        "title . link link"
        "description description description description"
    }
    @media only screen and (min-width: 992px) {
        width: 100%;
        right: 0;
        display: grid;
        border-top: 1px solid rgb(70, 149, 180);
        border-bottom: 1px solid rgb(70, 149, 180);
        grid-template-rows: 40px 1fr 110px 50px;
        grid-template-areas:
        "title . . tools"
        ". . link link"
        "description description description description"
        "open . . gallery"
    }
    `;
    const Title = styled.h1`
    grid-area: title;
    color: rgb(70, 149, 180);
    `;
    const Tools = styled.div`
    grid-area: tools;
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
    animation: ${enter_animation_button} 0.3s cubic-bezier(.52,2.06,.67,.55) forwards; 
    `;
    const Description = styled.p`
    grid-area: description;
    `;
    const Icon = styled.img`
    height: 30px;
    width: 30px;
    `;
    const LinkToGitHub = styled.div`
    grid-area: link;
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 1.5rem 0;
    animation: ${enter_animation_button} 0.3s cubic-bezier(.52,2.06,.67,.55) forwards; 
    `;
    const OpenProject = styled.div`
    grid-area: open;
    display: flex;
    align-items: center;
    justify-content: start;
    animation: ${enter_animation} 0.3s cubic-bezier(.52,2.06,.67,.55) forwards; 
    `;
    const Button = styled.button`
    height: 30px;
    border: ${props => props.$light ? '1px solid rgb(70, 149, 180)' : 'none'};
    border-radius: 20px;
    background-color: ${props => props.$light ? 'white' : 'rgb(70, 149, 180)'};
    cursor: pointer;
    color: ${props => props.$light ? 'black' : 'white'};
    display: flex;
    padding-left: 10px;
    align-items: center;
    justify-content: end;
    transition:  0.2s;
    transition-timing-function: cubic-bezier(.52,2.06,.67,.55);
    // box-shadow: ${props => props.$light ? 'none' : 'inset 0 0 15px rgb(0, 0, 0, 0.3);'};
    &:hover {
        background-color: ${props => props.$light ? 'white' : 'rgb(103, 162, 185)'};
        transform: scale(1.2);
    }
    `;
    const GalleryButton = styled.img`
    grid-area: gallery;
    justify-self: end;
    height: 40px;
    width: 40px;
    margin-top: 5px;
    cursor: pointer;
    transition:  0.2s;
    transition-timing-function: cubic-bezier(.52,2.06,.67,.55);
    // animation: ${enter_animation_button} 0.3s cubic-bezier(.52,2.06,.67,.55) forwards; 
    &:hover {
        transform: scale(1.3);
    }
    `;
    
    const Info = (props) => {
        
        const [images, setImages] = useState([]);

        useEffect(() => {
            setImages(props.info.gallery);
        }, []);

        // const [showGallery, setShowGallery] = useState(true);

        const handleClick = (event) => {
           props.opengallery(props.info.id);
        }
        
        return (
            <Wrapper>
            <Title className='poppins-light '>{props.info.title}</Title>
            <Description>{props.info.description}</Description>
            <Tools>
                {props.info.tools.map((tool, index) => 
                    <Icon key={index} src={`./images/icons/tools/${tool}.png`} alt={tool} style={{margin: '0 2px'}} />
                )}
            </Tools>
            <LinkToGitHub>
                <Button onClick={() => window.open(`${props.info.link}`, '_blank')}>
                    <p 
                        className='poppins-light' 
                        style={{
                            padding: '1px 4px 0 0', 
                            fontSize: '15px',
                            margin: 0,
                        }}>Source Code</p>
                    <Icon src={`./images/icons/social_media/github.png`} alt={props.info.link} />
                </Button>
            </LinkToGitHub>
            {props.info.open &&<OpenProject>
                <Button onClick={() => window.open(`${props.info.open_project}`, '_blank')} $light>
                    <p 
                        className='poppins-light' 
                        style={{
                            padding: '1px 4px 0 0', 
                            fontSize: '15px',
                            margin: 0,
                        }}>Check it out</p>
                    <Icon src={`./images/icons/social_media/play-color.png`}  style={{padding: '2px'}} alt={props.info.link} />
                </Button>
            </OpenProject>}
            <GalleryButton 
                src={'./images/icons/social_media/gallery.png'} 
                alt="gallery button"
                onClick={handleClick}>
                {/* onClick={props.opengallery}> */}
            </GalleryButton>
            {/* {showGallery && <Gallery />} */}
        </Wrapper>
    )
}

export default Info

// reikia pasidaryti  useEffect kad wrapperis 
//priklausomai nuo ekrano dydzio krautu kitokia animacija

