import React, { useEffect } from 'react';
import '../App.css';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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
    height: 100%;
    padding: 10px;
    @media only screen and (max-width: 991px) {
        width: 100%;
        right: 0;
        animation: ${enter_animation} 0.3s cubic-bezier(.52,2.06,.67,.55) forwards; 
        background-color: rgb(255, 255, 255, 0.8);
        backdrop-filter: blur(5px);
        border-radius: 3px;
        background-color: rgb(255, 255, 255, 0.8);
    }
    @media only screen and (min-width: 992px) {
        width: 100%;
        right: 0;
        animation: ${enter_animation} 0.3s cubic-bezier(.52,2.06,.67,.55) forwards;
        display: grid;
        grid-template-rows: 40px 1fr 1fr 1fr;
        grid-template-areas:
        "title . . tools"
        "title . link link"
        "description description description description"
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
    animation: ${enter_animation_button} 0.3s cubic-bezier(.52,2.06,.67,.55) forwards; 
    `;
    const Button = styled.button`
    height: 30px;
    border: none;
    border-radius: 20px;
    // background-color: rgb(154, 162, 165);
    background-color: rgb(51, 148, 187);
    cursor: pointer;
    color: white;
    display: flex;
    padding-left: 10px;
    align-items: center;
    justify-content: end;
    transition:  0.2s;
    transition-timing-function: cubic-bezier(.52,2.06,.67,.55);
    box-shadow: inset 0 0 15px rgb(0, 0, 0, 0.3);
    &:hover {
        background-color: rgb(103, 162, 185);
        transform: scale(1.2);
        border: none;
    }
    `;
    const Info = (props) => {
        
        return (
            <Wrapper>
            <Title className='poppins-light '>{props.info.title}{ props.info.id}</Title>
            <Description>{props.info.description}</Description>
            <Tools>
            {props.info.tools.map((tool, index) => 
                <Icon key={index} src={`./images/icons/tools/${tool}.png`} alt={tool} />
            )}
            </Tools>
            <LinkToGitHub>
                <Button >
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
        </Wrapper>
    )
}

export default Info

// reikia pasidaryti  useEffect kad wrapperis 
//priklausomai nuo ekrano dydzio krautu kitokia animacija

