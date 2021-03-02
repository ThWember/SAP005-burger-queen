import './Kitchen.css';
import React, { useState, useEffect } from 'react';
import { requestKitchen } from './functions';
import Header from '../../Components/Header';

function Kitchen(){

  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
     requestKitchen(setOrders)
  },[]);


  const GetOrders = orders.map((i) => {
    return(
      <div className="orders-pending" key={Math.random()}>
        <p>Status: {i.status}</p>
        <p>Mesa: {i.table}</p>
        <p>Cliente: {i.client_name}</p>
        <p>Data: {i.createdAt.replace("T", " |  Hora:").split("Z")}</p>
      </div>
    )
  });

return(
 <div>
   <Header />
    <div className="orders-container">{
      GetOrders.sort(function(first, last){
        if(first.createdAt < last.createdAt)
         return first
      })
   }</div>
 </div>
 ) };

export default Kitchen;