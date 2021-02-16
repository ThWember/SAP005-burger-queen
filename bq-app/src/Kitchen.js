import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';

function Kitchen(){
return(
    <div>
        <Header />
        <p>Cozinha</p>
        <p>Mesa</p>
        <p>Pedido</p>
        <p>Atualizar status</p>
    </div>)
}

export default Kitchen;