import'../App.css';
import { useEffect, useState } from 'react';
import Card from '../components/project_card'
import styled from 'styled-components';
import Info from '../components/project_info'
import Axios from 'axios';
import Gallery from '../components/gallery';
import { useNavigate } from 'react-router-dom';


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
        width: 100vw;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);// !!! if more than 5 cards use ( left: 0, transform: translate(0, -50%); ) 
        height: 300px;
        flex-direction: row;
        overflow: hidden;
    }
    `;
    const InfoWrapper = styled.div`
    @media only screen and (max-width: 991px) {
        display: none;
    }
    @media only screen and (min-width: 992px) {
        position: absolute;
        top: 2%;
        left: 50%;
        transform: translateX(-50%);
        width: 500px;
    }
    `;
    const Nav = styled.div`
        position: absolute;
        bottom: 2%;
        left: 50%;
        display: flex;
        transform: translateX(-50%);
        aline-items: center;
    `;
const Portfolio = () => {
    const screenWidth = window.innerWidth;
    const navigate = useNavigate();
    // const cards = document.querySelectorAll('.card');
    
    const [showInfo, setShowInfo] = useState(false);
    // const [clicked, setClicked] = useState(false);
    const [info, setInfo] = useState([]);
    const [targetInfo, setTargetInfo] = useState({});
    const [showGallery, setShowGallery] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const [activeProjectId, setActiveProjectId] = useState(null);
    // const [activeCard, setActiveCard] = useState(null);

    // useEffect(() => { console.log(' activeCard',activeCard);}, [activeCard]);
    // useEffect(() => { console.log(' activeproject',activeProjectId);}, [activeProjectId]);

        
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
        if (screenWidth < 991) {
              if (!activeProjectId) {
                setActiveProjectId(target_card.id);
            }
        }
        
        // if (screenWidth < 768){
        //     // setShowInfo(true);
        //     target_card.style.width = '95%';
        //     cards.forEach(card => {
        //         if (card !== target_card) {
        //             card.style.filter = 'grayscale(1)';
        //         }
        //     })
        // } else if (screenWidth >= 768 && screenWidth < 992) {
        //     // setShowInfo(true);
        //     target_card.style.width = '85%';
        // } else {
        // };
    };
    const handleLeave = (event) => {
        // const target_card = event.currentTarget;
        
        // if (screenWidth < 768) {
        //     // setShowInfo(false);
        //     target_card.style.width = '80%';
        //     target_card.style.filter = 'grayscale(1)';
            
        // } else if (screenWidth >= 768 && screenWidth < 992) {
        //     // setShowInfo(false);
        //     target_card.style.width = '70%';
        // } else {
        // };
    };
    const handleClick = (event) => {
        const target_card = event.currentTarget;
        // if (screenWidth < 992){
        //     cards.forEach(card => {
        //         if (card !== target_card) {
        //             if (card.classList.contains("active")) {
        //                 card.classList.remove('active')
        //                 card.style.width = '80%';
        //                 card.style.filter = 'grayscale(1)';
        //             }
        //         };
        //     });
        //     if (target_card.classList.contains("active")) {
        //         target_card.classList.remove('active');
        //         // setClicked(false);
        //         target_card.style.width = '80%';
        //         target_card.style.filter = 'grayscale(1)';
        //     } else {
        //         target_card.classList.add('active');
        //         handleEnter(event);
        //         // setClicked(true);
        //     };
        // } else {
            // setClicked(true);
            setShowInfo(true);
            setTargetInfo(info[`${target_card.id - 1}`]);
            if (!activeProjectId) {
                setActiveProjectId(target_card.id);
            // }
        } ;
    };
    const handleClose = (event) => {
        setActiveProjectId(null);
        setShowInfo(false);
    }

    const handleOpenGallery = (card_id) => {
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
                        onClose={handleClose}
                        info={project}
                        activeCardId={activeProjectId}
                        // opengallery={handleOpenGallery}

                    />)}
            </Wrapper>
            {showGallery && <Gallery  project={activeProjectId} closeGallery={handleCloseGallery} images={galleryImages}/>}
            <Nav className='poppins-light'>
                <div className='nav-button p-2' onClick={() => navigate('/')}>
                    <p className="poppins-light m-0 no-cursor">HOME</p>
                </div>
                <p className="poppins-light mb-0 mt-2 no-cursor px-3" id="pipe">|</p>
                <div className='nav-button p-2'onClick={() => navigate('/me')}>
                    <p className="poppins-light m-0 no-cursor">ME</p>
                </div>
            </Nav>
        </>
    )
}

export default Portfolio