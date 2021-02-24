import '../App.css';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';

function Kitchen(){

  const [orders, setOrders] = useState([]);
  const idUser = localStorage.getItem("token");
  const orderSaved = localStorage.getItem("OrdersShow")
  const order = localStorage.getItem("OrderApi").toString()
  const requestOrder = order.slice(1, -1)
  const printItens = []

  let myHeaders = new Headers();
    myHeaders.append("Authorization", `${idUser}`);
    myHeaders.append("Content-Type", "application/json");

  let raw = requestOrder;

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

  useEffect(() => {

    fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
     .then(response => response.text())
     .then(result => {console.log(result)
        setOrders(result.status) 
     })
     .catch(error => console.log('error', error));
    },[]);    


 return(
    <div>
      <Header />
        <div>
        {
        orderSaved
        }</div>
    </div>
 )
}

export default Kitchen;