import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
 

function Saloon() {
 
const [menu, setMenu] = useState([]);
const [products, setProducts] = useState([]);

const idUser = localStorage.getItem("token")
console.log("aqui era pra ser o token",idUser)
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
        setMenu(result)
      })
      .catch(error => console.log('error', error));
     },[])

    const handleItem = (product) => {
      setProducts([...products, product])
    }

   return (
    <div className="App">
      <Header />
        <div className="main">
          <div className="menu">{
            menu.map((i) => {
              return (
              <div className="each-item" key={i.id} onClick={() => handleItem(i)}>
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
            <div className="choose-itens">{
              products.length != 0 &&
              products.map((i, index) => {
                return (
                  <div className="each-item-choose" key={index}>
                    <p>{i.name} - R${i.price}</p>
                  </div>
                )
              })
            }
          </div>
            
            <button className="confirm-button">Confirmar</button>
            <button className="cancel-button">Cancelar</button>
          </div>
        </div>
    </div>
  );
}

export default Saloon;

