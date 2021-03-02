import './Kitchen.css';
import React, { useState, useEffect } from 'react';
import { KitchenRequest } from './functions';
import { OrdersDetails } from '../../Components/Itens'
import Header from '../../Components/Header';

function Kitchen(){

  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    KitchenRequest(setOrders)
  },[]);


  const GetOrders = orders.map((i) => {
    return(
    <OrdersDetails eachItem={i}/>
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