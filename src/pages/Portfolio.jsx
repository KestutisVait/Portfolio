import'../App.css';
import { useEffect, useState } from 'react';
import Card from '../components/project_card'
import styled from 'styled-components';
import Info from '../components/project_info'
import Axios from 'axios';
import Gallery from '../components/gallery';


const Wrapper = styled.div`
    @media only screen and (max-width: 991px) {
        position: relative;
        height: fit-content;
        width: 100%;
        flex-direction: column;
        padding: 10px 0;
        overflow-y: scroll;
    }
    @media only screen and (min-width: 992px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);// !!! if more than 5 cards use ( left: 0, transform: translate(0, -50%); ) 
        height: 300px;
        flex-direction: row;
        overflow: hidden;
        width: fit-content;
    }
    `;
    const InfoWrapper = styled.div`
    @media only screen and (min-width: 992px) {
        position: absolute;
        top: 2%;
        left: 50%;
        transform: translateX(-50%);
        width: 500px;
    }
    `;
const Portfolio = () => {
    const screenWidth = window.innerWidth;
    const cards = document.querySelectorAll('.card');
    
    const [showInfo, setShowInfo] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [info, setInfo] = useState([]);
    const [targetInfo, setTargetInfo] = useState({});
    const [showGallery, setShowGallery] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const [activeProjectId, setActiveProjectId] = useState(null);

        
    useEffect(() => {
        Axios.get('./projects.json')
        .then(response => {
            // console.log(response.data.projects);
            setInfo(response.data.projects);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    useEffect(() => {
        if (info.length > 0) {
            const animationEndHandler = (event) => {
                event.target.style.opacity = 1;
                event.target.classList.remove('fade-n-slide');
            };

            const cards = document.querySelectorAll('.card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
                card.classList.add('fade-n-slide');
                card.addEventListener('animationend', animationEndHandler);
            });
            // Cleanup function to remove event listeners
            return () => {
                cards.forEach(card => {
                    card.removeEventListener('animationend', animationEndHandler);
                });
            };
        }
    }, [info]);

    const handleEnter = (event) => {
        const target_card = event.currentTarget;
        target_card.style.filter = 'grayscale(0)';
        
        if (screenWidth < 768){
            // setShowInfo(true);
            target_card.style.width = '95%';
            cards.forEach(card => {
                if (card !== target_card) {
                    card.style.filter = 'grayscale(1)';
                }
            })
        } else if (screenWidth >= 768 && screenWidth < 992) {
            // setShowInfo(true);
            target_card.style.width = '85%';
        } else {
            setTargetInfo(info[`${target_card.id - 1}`]);
            target_card.style.width = '400px';
            // if (target_card.id !== '1') {
            //     cards.forEach(card => {
            //         card.classList.add('translateX-40');
            //     });
            // };
            setShowInfo(true);
            if (!target_card.classList.contains("active")) {
                setClicked(false);
                cards.forEach(card => {
                    if (card.classList.contains("active")) {
                        card.classList.remove('active')
                        card.style.width = '300px';
                        card.style.filter = 'grayscale(1)';
                    };
                });
            };
        };
    };
    const handleLeave = (event) => {
        const target_card = event.currentTarget;
        if (!clicked) target_card.style.filter = 'grayscale(1)';
        
        if (screenWidth < 768) {
            // setShowInfo(false);
            target_card.style.width = '80%';
            target_card.style.filter = 'grayscale(1)';
            
        } else if (screenWidth >= 768 && screenWidth < 992) {
            // setShowInfo(false);
            target_card.style.width = '70%';
        } else {
            if (!clicked) {
                setShowInfo(false);
                target_card.style.width = '300px';
                if (target_card.id !== '1') {
                    cards.forEach(card => {
                        card.classList.remove('translateX-40');
                    });
                };
            };
        };
    };
    const handleClick = (event) => {
        const target_card = event.currentTarget;
        if (screenWidth < 992){
            cards.forEach(card => {
                if (card !== target_card) {
                    if (card.classList.contains("active")) {
                        card.classList.remove('active')
                        card.style.width = '80%';
                        card.style.filter = 'grayscale(1)';
                    }
                };
            });
            if (target_card.classList.contains("active")) {
                target_card.classList.remove('active');
                setClicked(false);
                target_card.style.width = '80%';
                target_card.style.filter = 'grayscale(1)';
            } else {
                target_card.classList.add('active');
                handleEnter(event);
                setClicked(true);
            };
        } else {
            setActiveProjectId(target_card.id);
            if (target_card.classList.contains("active")) {
                setClicked(false);
                handleLeave(event);
                setShowInfo(false);
                target_card.style.width = '300px';
                target_card.style.filter = 'grayscale(1)';
                target_card.classList.remove('active');
            } else {
                cards.forEach(card => {
                    card.style.filter = 'grayscale(1)';
                })
                target_card.classList.add('active');
                handleEnter(event);
                setClicked(true);
            };
        } ;
    };

    const handleOpenGallery = (card_id) => {
        setActiveProjectId(card_id);
        setGalleryImages(info[`${card_id - 1}`].gallery);
        setShowGallery(true);
    }
    const handleCloseGallery = () => {
        setShowGallery(false);
    }

    return (
        <>
            <InfoWrapper>
                {showInfo && <Info info={targetInfo} opengallery={handleOpenGallery} />}
            </InfoWrapper>   
            <Wrapper className="d-flex flex-nowrap align-items-center justify-content-center">
                { info.map((project, index) => 
                    <Card 
                        key={index} 
                        id={project.id} 
                        src={`./images/${index + 1}/${project.gallery[0]}`} 
                        alt="project"
                        className="card rounded m-1" 
                        onClick={handleClick}
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                        info={project}
                        // opengallery={handleOpenGallery}

                    />)}
            </Wrapper>
            {showGallery && <Gallery  project={activeProjectId} closeGallery={handleCloseGallery} images={galleryImages}/>}
        </>
    )
}

export default Portfolio