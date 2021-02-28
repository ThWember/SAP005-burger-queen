import React from 'react';
import './Components.css';

const HeaderPhoto = ({Image, Logo}) => {
    return (<div className="Header-container">
    <div className="Header"> <img src={Logo}/> Tartária Burger </div>
    <img className="img-burguer" src={Image} alt="hambuguer and salse"/>
    </div>
)};

export default HeaderPhoto;
 