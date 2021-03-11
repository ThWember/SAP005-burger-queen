import '../App.css';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import { statisticProducts } from "./functions";
import  { Chart } from "react-google-charts";

function Admin(){
const [ordersMade, setOrdersMade] = useState([]);
const [burgersSold, setBurgersSold] = useState([]);
const [options, setOptions] = useState({
  title: 'Hamburgueres mais Vendidos',
  is3D: true,
})
let [data, setData] = useState([
  ['Hamburguer', 'Quantidade'],
  ['Carne', 70],
  ['Frango', 34],
  ['Vegetariano',15],
]);
const [options2, setOptions2] = useState({
  title: 'Vendas / Clientes por dia',
  is3D: true,
  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', 'rgb(247,31,78)']
})
let [clients, setClients] = useState([
  ['Valor Do Dia R$','Quantidade de clientes'],
  ["R$ 10.000", 150],
  ["R$ 9660", 100],
  ["R$ 12000", 180],
  ["R$ 8300", 97],
  ["R$ 10450", 130]
]);
const [carne, setCarne] = useState();
const [frango, setFrango] = useState();
const [vegetariano, setVegetariano] = useState();
const product = "Hambúrguer";
let counter = 0;

useEffect(() => {
  statisticProducts(setOrdersMade, product);
}, []);

useEffect(() => {
  ordersMade.map((order) => {
   order.map((burger) =>{
    if(burger.flavor === "carne"){
      counter++
      setCarne(counter)
      console.log(carne)
    }
    if(burger.flavor === "frango"){
      counter++
      setFrango(counter)
      console.log(frango)
    }
    if(burger.flavor === "vegetariano"){
      counter++
      setVegetariano(counter)
      console.log(vegetariano)
    }
   })
})
}, []);

console.log(burgersSold)

    return (
     <div className="subscribe-area">
       <Header />
        <Chart
         width={'500px'}
         height={'300px'}
         chartType="PieChart"
         data={data}
         options={options}
        />
        <Chart
         width={'500px'}
         height={'300px'}
         chartType="BarChart"
         data={clients}
         options={options2}
        />
    </div>
    )}
   export default Admin;