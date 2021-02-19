import '../App.css';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';

function Kitchen(){

    const [orders, setOrders] = useState([]);
    const table = localStorage.getItem('table');
    const client = localStorage.getItem('client');
    const order = localStorage.getItem('order');
    const idUser = localStorage.getItem("token");
    
    let myHeaders = new Headers();
        myHeaders.append("Authorization", `${idUser}`);
        myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({"client":`${client}`,"table":`${table}`,"products":[{"id":`${order}`,"qtd":1}]});

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

   useEffect(() => {

    fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
     .then(response => response.json())
     .then(result => {console.log(result)
        setOrders(result)
     })
     .catch(error => console.log('error', error));
     
   },[])

return(
    <div>
        <Header />
         <div>{
         orders.map((i) => {
         return (
            <div className="each-order" key={i.id}>
              <p>{i.name}</p>
              <p>{i.flavor}</p>   
              <p>{i.complement}</p>
            </div>
         )})
         }</div>
    </div>
)}

export default Kitchen;