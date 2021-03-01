import './Saloon.css';
import { SendOrder, GetProducts } from './functions';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import { Button } from '../../Components/Button';
import { ItensDetails } from '../../Components/Itens';


function Saloon() {
 
const [breakfast, setBreakfast] = useState([]);
const [burgers, setBurgers] = useState([]);
const [drinks, setDrinks] = useState([]);
const [client, setClient] = useState("");
const [table, setTable] = useState("");
const [products, setProducts] = useState([]);

const orderListId = []
const value = []

  useEffect(() => {
    GetProducts(setBreakfast, setBurgers, setDrinks)
  },[]);
 
    const handleItem = (product) => {
      setProducts([...products, product]);
    };

    const handleConfirm = (event) => {
      event.preventDefault();
      console.log("table", table, "client", client)
      console.log("produtos clicados",products)
      console.log("Array de id",orderListId)
      SendOrder(client, table, orderListId)
    };
    
  return (
   <div className="App">
    <Header />
      <div className="main">{
        <>
      <div className="menu">
        <div className="section-menu">
            <p className="subtype-menu">CAFÉ DA MANHÃ</p>{
            breakfast.map((i) => { 
              return (
                <div className="each-item" key={i.id} onClick={
                () => handleItem(i)}>
                <ItensDetails eachItem={i}/>
                </div>
                )
              })
          }</div>
   
        <div className="section-menu">
          <p className="subtype-menu">HAMBÚRGUERES</p>
          {
          burgers.map((i) => { 
              return (
                <div className="each-item" key={i.id} onClick={
                  () => handleItem(i)}>
                  <ItensDetails eachItem={i}/>
                </div>
                )
              }) 
        }</div>

        <div className="section-menu">
        <p className="subtype-menu">BEBIDAS</p>
        {
          drinks.map((i) => { 
              return (
                <div className="each-item" key={i.id} onClick={
                  () => handleItem(i)}>
                  <ItensDetails eachItem={i}/>
                </div>
                )
              }) 
        }</div>
      </div>

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

                 {/* <Button Class={"increment-btn"}
                   Text={" + "}
                   Funct={(event) => increment(event, i, index)}
                  />
                    {i.qtd} 
                 <Button Class={"decrement-btn"}
                   Text={" - "}
                  /> */}
              </div>
            )
          })
        }</div>
          <div className="total-box">
             <p>TOTAL R$</p><p>{localStorage.getItem('total')}</p>
          </div>
         <Button Class={"confirm-button"} 
            Text={"Confirmar"} 
            Funct={(event) => handleConfirm(event)}
          />
      </div>
      </>
  }</div>
  </div>
  );
}
         
export default Saloon;

