import './Saloon.css';
import { SendOrder } from './functions';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import { ItensDetails } from './functions';

function Saloon() {
 
const [breakfast, setBreakfast] = useState([]);
const [allDay, setAllDay] = useState([]);
const [client, setClient] = useState("");
const [table, setTable] = useState("");
const [products, setProducts] = useState([]);
let [counter, setCounter] = useState(1);

const idUser = localStorage.getItem("token");
const orderListId = []
const value = []
const amount = []

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
        const breakfast = result.filter((itens) =>
          itens.type.includes('breakfast')
        );
        const allday = result.filter((itens) =>
          itens.type.includes('all-day')
        );
        setBreakfast(breakfast)
        setAllDay(allday)
      })
      .catch(error => console.log('error', error));
     },[])

    
     const handleItem = (product) => {
      setProducts([...products, product]);
      localStorage.setItem("qtd", counter)

      if(localStorage.getItem("qtd") >= 1 ){
         amount.push(localStorage.getItem("qtd"))
      }
      setCounter(counter = 1)
      console.log(amount, "array")
    }

    const handleConfirm = (event) => {
      event.preventDefault();
      SendOrder(client, table, orderListId, amount)
    }

    const increment = (event) => {
      event.preventDefault();
      setCounter(counter + 1)
    }

  return (
   <div className="App">
    <Header />
      <div className="main">{
        <>
       <button>Café</button>
       <button>Lanches</button>

      <div className="sum-area">

          <div className="table-info">
            <input type="text" value={client} onChange={
                (event) => setClient(event.target.value)}
                placeholder="Nome do cliente" />
            <input type="text" value={table} onChange={
                (event) => setTable(event.target.value)}
                placeholder="Mesa" />
          </div>

        <div className="choose-itens">{  

          products.length !== 0 &&
          products.map((i, index) => {

            orderListId.push(i.id)
            value.push(i.price)
            
            const total = value.reduce((sum, num) => sum + num, 0)                             
            localStorage.setItem("total", total)

            return (
              <div className="each-item-choose" key={index}>
                 <p>{i.name} - R${i.price}</p>  
                 <button className="increment-btn" onClick={(event) => 
                  increment(event)}> 
                 + </button>
                 <button className="decrement-btn"> - </button>
              </div>
            )
          })
        }</div>
          <div className="total-box">
             <p>TOTAL R$</p><p>{localStorage.getItem('total')}</p>
          </div>

          <button className="confirm-button" onClick={
            (event) => handleConfirm(event)}>
             Confirmar
          </button>
      </div>
      </>
  }</div>
  </div>
  );
}
         
export default Saloon;

