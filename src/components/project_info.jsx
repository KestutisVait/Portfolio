import React, { useEffect } from 'react';
import '../App.css';
import styled, { keyframes } from 'styled-components';

const enter_animation = keyframes`
    from {opacity: 0; width: 0;}
    to {opacity: 1; width: 80%;}
`;
const animation = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
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
        width: 80%;
        right: 0;
        animation: ${enter_animation} 0.3s cubic-bezier(.52,2.06,.67,.55) forwards;
    }
`;

const Info = (props) => {

    return (
        <Wrapper>
            <h1>{props.info.title}{ props.info.id}</h1>
            <p>{props.info.description}</p>
        </Wrapper>
    )
}

export default Info

// reikia pasidaryti  useEffect kad wrapperis 
//priklausomai nuo ekrano dydzio krautu kitokia animacija

