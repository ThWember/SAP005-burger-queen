import '../App.css';
import { SendOrder, GetProducts, Logout, DeleteOrder, Done} from './functions';

import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import { Button } from '../../Components/Button';
import shield from '../../Images/shield.png';
import { useHistory } from 'react-router-dom';
import { ItensDetails } from '../../Components/Itens';


function Saloon() {
 
  const [breakfast, setBreakfast] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [client, setClient] = useState("");
  const [table, setTable] = useState("");
  const [products, setProducts] = useState([]);
  const [done, setDone] = useState([]);
  const history = useHistory();

  let objectOrder = {
    "client": `${client}`,
    "table": `${table}`,
    "products": []};
  const value = []

  useEffect(() => {
    GetProducts(setBreakfast, setBurgers, setDrinks)
  },[]);

  useEffect(() => {
    Done(setDone);
  },[])
 
  const handleItem = (clickedItem) => {
    if(client === "" || table === ""){
     alert("Primeiro pergunte o nome do cliente e preencha os campos de mesa e nome :)")
    }
     setProducts([...products, clickedItem]);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    SendOrder(objectOrder)
  };

  const handleLogout = (event, hook) => {
    Logout(event, hook)
  }

  const handleFinish = (event, idOrder) => {
    event.preventDefault();
    DeleteOrder(idOrder);
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
                <div className="each-section" key={i.id} onClick={
                  () => handleItem(i)}>
                  <img className="img-shield" alt="shield" src={shield}/>
                  <section className="each-item">
                  <ItensDetails eachItem={i} />
                  </section>
                </div>
              )
            })
          }</div>
   
     <div className="section-menu">
        <p className="subtype-menu">HAMBÚRGUERES</p> {
          burgers.map((i) => { 
            return (
              <div className="each-section" key={i.id} onClick={
               () => handleItem(i)}>
               <img className="img-shield" alt="shield" src={shield}/>
                <section className="each-item">
                  <ItensDetails eachItem={i}/>
                </section>
              </div>
            )
         }) 
     }</div>

      <div className="section-menu">
        <p className="subtype-menu">BEBIDAS</p> {
          drinks.map((i) => { 
            return (
             <div className="each-section" key={i.id} onClick={
              () => handleItem(i)}>
               <img className="img-shield" alt="shield" src={shield}/>
                 <section className="each-item">
                   <ItensDetails eachItem={i}/>
                 </section>
              </div>
            )
          }) 
      }</div>

    </div>

    <div className="sum-area">
       <Button Class={"logout-button"} 
          Text={"SAIR"} 
          Funct={(event) => handleLogout(event, history)}
          />
         <div className="done-box"> {
           done !== undefined &&
           done.map((i) => 
         <Button Class={"done-button"} 
           Text={`Pedido da mesa ${i.table} pronto`} 
           Funct={(event) => handleFinish(event, i.id)}
         />
         )}</div>

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
          i.qtd = 1
          let objectOrderItems= {
              "id": i.id,
              "qtd": i.qtd
             }  
            objectOrder.products.push(objectOrderItems)
           console.log(objectOrder)
            value.push(i.price)   
            const total = value.reduce((sum, num) => sum + num,0)                             
            localStorage.setItem("total", total)
      
            return (
              <div className="each-item-choose" key={index}>
                 <p>{i.name} - R${i.price}</p>  
              </div>
            )
          })
        }</div>

          <div className="total-box">
             <p className="total-word">TOTAL - </p><p>{Intl.NumberFormat('pt-BR',
              { style: 'currency', currency: 'BRL' }).format(localStorage.getItem('total'))}</p>
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

