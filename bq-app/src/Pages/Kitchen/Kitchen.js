import '../App.css';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';

function Kitchen(){

  const [orders, setOrders] = useState([]);
  const idUser = localStorage.getItem("token");
  let container = []

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `${idUser}`);
  
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  useEffect(() => {

  fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)
      container.push(result)
      setOrders(container)
    })
    .catch(error => console.log('error', error));
  },[]);

  
 

 return(<div>
   <Header />{
  orders
   } </div>
    
 )
 }

export default Kitchen;