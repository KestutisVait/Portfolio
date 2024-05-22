import React, { useEffect } from 'react';
import '../App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height:200px;
    
`

const Info = (props) => {

    return (
        <Wrapper>
            <h1>{props.info.title}{ props.info.id}</h1>
            <p>{props.info.description}</p>
        </Wrapper>
    )
}

export default Info
