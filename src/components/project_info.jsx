import React, { useEffect } from 'react';
import '../App.css';
import styled, { keyframes } from 'styled-components';

const enter_animation = keyframes`
    from {opacity: 0; width: 0;}
    to {opacity: 1; width: 80%%;}
`;
const Wrapper = styled.div`
@media only screen and (max-width: 991px) {
    position: absolute;
    top: 0;
    width: 80%;
    height: 100%;
    padding: 10px;
    background-color: rgb(255, 255, 255, 0.5);
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

