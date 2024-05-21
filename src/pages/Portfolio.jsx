import'../App.css';
import { useEffect } from 'react';
import Card from '../components/project_card'

const Portfolio = () => {

    useEffect(() => {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const handleMouseEnter = async (event) => {
                const target_card = event.currentTarget;
                const screenWidth = window.innerWidth;
                
                if (screenWidth >= 600) {
                    if (target_card.id === '1') {
                        target_card.style.transform = 'translateX(0)';
                    } else {
                        target_card.style.transform = 'translateX(-40px)';
                    }
                } 
                
                cards.forEach(card => {
                    if ( screenWidth >= 600) {
                        if (card !== target_card) {
                            if (target_card.id === '1') {
                                card.style.transform = 'translateX(0)';
                            } else {
                                card.style.transform = 'translateX(-40px)';
                            }
                        }
                    } 
                });
                
            }
            const handleMouseLeave = (event) => {
                cards.forEach(card => {
                    card.style.transform = 'translateX(0)';
                    // target_card.style.margin = '0 0 0 0';
                })
            }

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
        });
    },[]);
            
    useEffect(() => {
        const animationEndHandler = (event) => {
            event.target.style.opacity = 1;
            event.target.classList.remove('fade-n-slide');
        };
    
        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
            card.classList.add('fade-n-slide');
            card.addEventListener('animationend', animationEndHandler);
        });
        // Cleanup function to remove event listeners
        return () => {
            document.querySelectorAll('.card').forEach(card => {
                card.removeEventListener('animationend', animationEndHandler);
            });
        };
    }, []);
    
    return (
        <div>
            <div className="card-wrapper d-flex flex-nowrap align-items-center justify-content-center">
                {/* { Array(7).fill(0).map((_, index) => 
                    <img 
                        key={index} 
                        id={index + 1} 
                        src="https://picsum.photos/600/400" 
                        alt="project"
                        className="card rounded m-1"
                    />)} */}
                {/* <p className='poppins-semibold card'> ... </p> */}
                { Array(7).fill(0).map((_, index) => 
                    <Card 
                        key={index} 
                        id={index + 1} 
                        src="https://picsum.photos/600/400" 
                        alt="project"
                        className="card rounded m-1"
                    />)}
            </div>
        </div>
    )
}

export default Portfolio
