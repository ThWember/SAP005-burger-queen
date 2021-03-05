import '../App.css';
import React, { useState, useEffect } from 'react';
import { KitchenRequest, UpdateOrder, Logout } from './functions';
import { OrdersDetails } from '../../Components/Itens';
import Header from '../../Components/Header';

function Kitchen(){

  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    KitchenRequest(setOrders)
  },[]);

  const handleOrderDone = (event, idOrder) => {
    event.preventDefault();
    UpdateOrder(idOrder);
  }

  const GetOrders = orders.map((i) => {
    const classBtnString = "order-done";
    const textBtnString = "Alterar status";
    
    return(
     <OrdersDetails eachItem={i} 
     classBtn={classBtnString} 
     textBtn={textBtnString} 
     orderFunction={handleOrderDone}/>
    )
  });
 
return(
 <div>
   <Header />
   {/* <>
    <Button Class={"logout-button"} 
      Text={"SAIR"} 
      Funct={(event) => Logout(event)}
    /> */}
    <div className="orders-container">{
      GetOrders
   }</div>
   {/* </> */}
 </div>
 ) };

export default Kitchen;