import '../App.css';
import React, { useState, useEffect } from 'react';
import { KitchenRequest, UpdateOrder } from './functions';
import { OrdersDetails } from '../../Components/Itens';
import Header from '../../Components/Header';
import { Button } from '../../Components/Button';
import { Logout } from '../Saloon/functions';
import { useHistory } from 'react-router-dom';

function Kitchen(){

  const [orders, setOrders] = useState([]);
  const history = useHistory();
  
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
     <OrdersDetails key={i.id}
     eachItem={i} 
     classBtn={classBtnString} 
     textBtn={textBtnString} 
     orderFunction={handleOrderDone}/>
    )
  });
  
return(
 <div className="kitchen-area">
   <Header />
   <>
    <Button Class={"logout-button"} 
      Text={"SAIR"} 
      Funct={(event) => Logout(event, history)}
    /> 
    <div className="orders-container">{
      GetOrders
   }</div>
   </>
 </div>
 ) };
 
export default Kitchen;