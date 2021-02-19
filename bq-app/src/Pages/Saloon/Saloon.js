import './Saloon.css';
import { SendOrder } from './functions';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
 

function Saloon() {
 
const [menu, setMenu] = useState([]);
const [client, setClient] = useState("");
const [table, setTable] = useState("");
const [products, setProducts] = useState([]);

const idUser = localStorage.getItem("token");
const orderList = []
const value = []

 let myHeaders = new Headers();
 myHeaders.append("Authorization", `${idUser}`);
 
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  useEffect(() => {
   
    fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
      .then(response => response.json())
      .then(result => {
        localStorage.setItem("total", " ")
        setMenu(result)
      })
      .catch(error => console.log('error', error));
     },[])

    
     const handleItem = (product) => {
      setProducts([...products, product])
    }

    const handleConfirm = (event) => {
      event.preventDefault();
      SendOrder(client, table)
    }

   return (
    <div className="App">
      <Header />
        <div className="main">
          <div className="menu">{
            menu.map((i) => {
              return (
              <div className="each-item" key={i.id} onClick={
                () => handleItem(i)}>
                <img className="img-menu" src={i.image}/>
                <p>{i.name}</p>
                <p>R${i.price}</p>
                <p>{i.flavor}</p>   
                <p>{i.complement}</p>
              </div>
              )
            })
          }</div>  

       <div className="sum-area">

          <div className="table-info">
            <input type="text" value={client} onChange={
                (event) => setClient(event.target.value)}
                placeholder="Nome do cliente" />
            <input type="text" value={table} onChange={
                (event) => setTable(event.target.value)}
                placeholder="Mesa" />
          </div>

          <div className="choose-itens">
         { 
          products.length != 0 &&
          products.map((i, index) => {

           orderList.push(i.id)
           value.push(i.price)
           
           const total = value.reduce((sum, num) => sum + num, 0)

           localStorage.setItem("order", orderList)
           localStorage.setItem("total", total)
           
             return (
               <div className="each-item-choose" key={index}>
                 <p>{i.name} - R${i.price}</p>
               </div>
            )
          })
          }
          </div>

            <div className="total-box">
             <p>TOTAL R$</p><p>{localStorage.getItem('total')}</p>
            </div>

            <button className="confirm-button" onClick={
               (event) => handleConfirm(event)}>
                 Confirmar
              </button>
            <button className="cancel-button">Cancelar</button>
          </div>
        </div>
    </div>
  );
}

export default Saloon;

