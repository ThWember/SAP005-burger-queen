import '../App.css';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';

function Kitchen(){

  const [orders, setOrders] = useState([]);
  
  useEffect(() =>{
    console.log("useffect", orders)

  },[orders])

  useEffect(() => {

   const idUser = localStorage.getItem("token");
    let requestOptions = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `${idUser}`
      },
      redirect: 'follow'
    };

  fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)
      
      
      setOrders(result)
    })
    .catch(error => console.log('error', error));
  },[]);

 const GetOrders = orders.map((i) => {
   console.log(i)
  return(
    <div key={7467546}>
      <p>Status {i.status}</p>
      <p>Mesa {i.table}</p>
      <p>Cliente {i.client_name}</p>
      <p>Data/hora {i.createdAt}</p>
      {/* <p>Produtos {i.Products}</p> */}
    </div>
  )
}) 

 return(<div>
   <Header />{
     GetOrders.sort(function(first, last){
      if(first.createdAt < last.createdAt)
       return first
     })
   } </div>
    
 )
 }

export default Kitchen;