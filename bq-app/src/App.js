import './App.css';
import React, { useState, useEffect } from 'react';
 

function App() {
 
const [menu, setMenu] = useState([]);

 let myHeaders = new Headers();
 myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RhbmRvQGhvdG1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2MTI5OTA3NzEsImV4cCI6MTY0NDU0ODM3MX0.UgB1aY5mqNLK0MY-VhTv3fepMC-tVIOfQGDqXND44FY");
 
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

  const list = []
  for(let i of menu){
    list.push(
      <div className="each-item" name={i.name} price={i.price} key={i.id}>
       <img className="img-menu" src={i.image}/>
       <p>{i.name}</p>
       <p>R${i.price}</p>
       <p>{i.flavor}</p>   
       <p>{i.complement}</p>
     </div>
    )
  }

  // const chooseList = []

  // const allItens = document.querySelectorAll('.each-item')
  // allItens.forEach((item) => {
  //   item.addEventListener('click', (e) => {
  //     let value = e.target.parentNode.attributes.getNamedItem('price').value;
  //     let name = e.target.parentNode.attributes.getNamedItem('name').value;
  //     console.log(name, value)
  //     chooseList
  //   })
  // })

   return (
    <div className="App">
       
        <div className="main">
          <div className="menu">{list}</div>  
          <div className="sum-area">
            <div className="choose-itens">
            </div>

            <p></p>

            <button>Confirmar pedido</button>
            <button>Cancelar Pedido</button>
          </div>
        </div>
    </div>
  );
}

export default App;

