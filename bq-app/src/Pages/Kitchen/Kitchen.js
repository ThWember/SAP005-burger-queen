import '../App.css';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';

function Kitchen(){
    const table = localStorage.getItem('table');
    const client = localStorage.getItem('client');
    const order = localStorage.getItem('order')
return(
    <div>
        <Header />
        <p>Cozinha</p>
        <p>{client}</p>
        <p>{table}</p>
        <p>{order}</p>
        <p>Atualizar status</p>
    </div>)
}

export default Kitchen;