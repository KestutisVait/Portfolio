import React from 'react';
import '../App.css';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        function setRandomDuration() {
            const keyframePercentages = [10,25, 35, 50, 59, 75, 85]; 
          
            keyframePercentages.forEach((percentage) => {
              const duration = Math.random() * 3 + 1; 
              const element = document.getElementById('hello');
              if (element) {
                element.style.setProperty(`--duration-${percentage}`, `${duration}s`);
              };
            });
          }

          setRandomDuration(); 
          setInterval(setRandomDuration, 5000); 
    }, [])

    useEffect(() => {
        // document.getElementById('wrapper').style.cssText = 'transform: translate(0,0) scale(1); opacity: 1; transition-duration: 2s;';
        document.getElementById('wrapper').classList.add('fade-n-scale');
    })

    return (
        <div className='wrapper container d-flex flex-column' id='wrapper'>
            <h1 className='poppins-semibold mt-5 mb-4 light-blue hello' id='hello'>Hello I'm<br/>Kęstutis Vaitiekūnas</h1>
            <p className='introduction poppins-light align-self-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint magnam adipisci aut voluptas. Dicta deserunt vero sapiente doloremque iure incidunt asperiores inventore, nobis, consequuntur velit, fugiat in dolores doloribus.</p>
        </div>
    )
}

export default About
