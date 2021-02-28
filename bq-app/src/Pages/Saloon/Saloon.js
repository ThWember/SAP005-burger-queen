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
const amount = []

  useEffect(() => {
    GetProducts(setBreakfast, setBurgers, setDrinks)
  },[])

    
     const handleItem = (product) => {
      product.qtd = 1
      setProducts([...products, product]);
    }

    const handleConfirm = (event) => {
      event.preventDefault();
      SendOrder(client, table, orderListId, amount)
    }

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

                 <Button Class={"increment-btn"}
                   Text={" + "}
                  />
                    {i.qtd} 
                 <Button Class={"decrement-btn"}
                   Text={" - "}
                  />
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

