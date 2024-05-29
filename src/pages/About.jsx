import React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import  Axios  from 'axios';
import styled, { keyframes } from 'styled-components';

const hello_animation = keyframes`
  0% { color: rgb(51, 148, 187); }
  10% { color: rgb(78, 167, 202); animation-duration: var(--duration-10); }
  25% { color: rgb(75, 155, 187); animation-duration: var(--duration-25); }
  35% { color: rgb(63, 143, 175); animation-duration: var(--duration-35); }
  50% { color: rgb(73, 168, 206); animation-duration: var(--duration-50); }
  59% { color: rgb(69, 166, 204); animation-duration: var(--duration-59); }
  75% { color: rgb(72, 146, 175); animation-duration: var(--duration-75); }
  85% { color: rgb(78, 145, 172); animation-duration: var(--duration-85); }
  100% { color: rgb(51, 148, 187); }
}
`;
const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-top: 1px solid  rgb(70, 149, 180);
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
`;
const Skills = styled(SkillsWrapper)`
  flex-direction: column;
  border-top: none;
  margin: 0.5rem;
  p {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid  rgb(70, 149, 180);
    @media only screen and (max-width: 991px) {
      text-align: start;
    }
  }
`;
const TechnicallSkills = styled(SkillsWrapper)`
  align-items: flex-start;
  justify-content: start;
  flex-wrap: wrap;
  border-top: none;
  @media only screen and (max-width: 991px) {
    flex-direction: row;
  }
  `;
  const Skill = styled(Skills)`
    width: fit-content;
    height: fit-content;
    align-items: center;
    border-top: none;
    img {
      width: 50px;
    }
    p {
      border-bottom: none;
      font-size: 0.8rem;
      margin-bottom: 0.1rem;
      text-align: center;
    }
`;
const Media = styled.img`
     width: 40px;  
     margin-left: 0.5rem; 
     cursor: pointer;
     transition: 0.3s;
     transition-timing-function: cubic-bezier(.52,2.06,.67,.55);
     &:hover {
       transform: scale(1.3);
     }
     @media only screen and (max-width: 991px) {
       width: 30px;
       margin-left: 0.2rem;
     }
`; 
const Header = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "hello hello media"
      "hello hello ."
    ;
    // @media only screen and (min-width: 992px) {
    //   margin-top: 5rem;
    // }
    // @media only screen and (min-width: 1300px) {
    //   margin-top: 7rem;
    // }
`;
const Hello = styled.h1`
  grid-area: hello;
  // animation: ${hello_animation} 5s infinite;
`;


const About = () => {

  const [about, setAbout] = useState({});

    // useEffect(() => console.log('about', about), [about]);

    useEffect(() => {
      Axios.get('./about_me.json')
        .then( response => {
          if (response.data) setAbout(response.data);
        })
        .catch( error => {
          console.error('Error fetching data:', error);
        })
    }, [])

    // useEffect(() => {
    //     function setRandomDuration() {
    //         const keyframePercentages = [10,25, 35, 50, 59, 75, 85]; 
          
    //         keyframePercentages.forEach((percentage) => {
    //           const duration = Math.random() * 3 + 1; 
    //           const element = document.getElementById('hello');
    //           if (element) {
    //             element.style.setProperty(`--duration-${percentage}`, `${duration}s`);
    //           };
    //         });
    //       }
    //       setRandomDuration(); 
    //       setInterval(setRandomDuration, 5000); 
    // }, [])

    useEffect(() => {
        // document.getElementById('wrapper').style.cssText = 'transform: translate(0,0) scale(1); opacity: 1; transition-duration: 2s;';
        document.getElementById('wrapper').classList.add('fade-n-scale');
    })

    const capitalize = (string) => {
        // return string.charAt(0).toUpperCase() + string.slice(1);
        return string.toUpperCase();
    }

    return (
        <div className='wrapper container d-flex flex-column' id='wrapper'>
            <Header  >
              <Hello className='poppins-semibold mb-4 light-blue' >Hello, I'm<br/>Kęstutis Vaitiekūnas</Hello>
              <div className='d-flex align-items-center justify-content-end' style={{gridArea: 'media'}}>
                <Media 
                  src='./images/icons/social_media/github.png' 
                  alt='github link'
                  onClick={() => window.open(`${about.soc_media_links.github}`, '_blank')}>
                </Media>
                <Media 
                  src='./images/icons/social_media/linkedin.png' 
                  alt='linked in link' 
                  onClick={() => window.open(`${about.soc_media_links.linkedin}`, '_blank')}
                  style={{padding: '2px'}}>
                </Media>
              </div>
            </Header>
            <p className='introduction poppins-light align-self-end'>{about.introduction}</p>
            <p className='introduction poppins-light align-self-start'>{about.follow_up}</p>
            <h2 className='poppins-light align-self-start light-blue'>Skills</h2>
            <SkillsWrapper>
               <Skills>
                <p className='poppins-light p'>TECHNICAL SKILLS</p>
                <TechnicallSkills>
                    {about.skills && about.skills.technical.map((skill, index) =>
                      <Skill key={index}>
                        <img key={index} src={`./images/icons/tools/${skill}.png`} className='poppins-light' alt={skill}></img>
                        <p>{capitalize(skill)}</p>
                      </Skill>
                    )}
                </TechnicallSkills>
              </Skills>
              <Skills>
                <p className='poppins-light p'>SOFT SKILLS</p>
                <Skills>
                  <ul>
                    {about.skills && about.skills.soft.map((skill, index) =>
                      <li key={index} className='poppins-light'>{skill}</li>
                    )}
                  </ul>
                </Skills>
              </Skills>
            </SkillsWrapper>
        </div>
    )
}

export default About
