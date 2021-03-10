import '../App.css';
import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import { statisticProducts } from "./functions";
import  { Chart } from "react-google-charts";

function Admin(){
const [ordersMade, setOrdersMade] = useState([]);
const [burgersSold, setBurgersSold] = useState([]);
const [options, setOptions] = useState({
  title: 'Hamburgueres mais Vendidos'
})
let [data, setData] = useState([
  ['Hamburguer', 'Quantidade'],
  ['Carne', 100],
  ['Frango', 80],
  ['Vegetariano', 50],
]);
let box = []
const product = "Hambúrguer";

useEffect(() => {
  statisticProducts(setOrdersMade, product);
}, []);

useEffect(() => {
  ordersMade.forEach((burger) => {
   if(burger.length > 0){
     box.push(burger)
   } 
})
setBurgersSold(box)
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
    </div>
    )}
   export default Admin;