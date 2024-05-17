import React from 'react';
import '../App.css'

const Nav = (props) => {

    const handleClick = (event) => {
        props.fade( event.target.id )
    }
    return (
        <div className="nav d-flex justify-content-center align-items-center">
            <p className="poppins-thin nav-button px-3 m-0" id="about" onClick={handleClick}>ME</p>
            <p className="poppins-thin mb-1">|</p>
            <p className="poppins-thin nav-button px-3 m-0 " id="portfolio" onClick={handleClick}>PORTFOLIO</p>
        </div>
    )
}

export default Nav
