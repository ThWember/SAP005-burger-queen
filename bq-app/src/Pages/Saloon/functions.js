import { useHistory } from 'react-router-dom';

export const GetProducts = (state1, state2, state3) => {

    const idUser = localStorage.getItem("token");
    
    let requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `${idUser}`
    },
    redirect: 'follow'
    };

   fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
     .then(response => response.json())
     .then(result => {
       localStorage.setItem("total", " ")
       const breakfast = result.filter((itens) =>
         itens.type.includes('breakfast')
       );
       const burgers = result.filter((itens) =>
         itens.sub_type.includes('hamburguer')
       );
       const drinks = result.filter((itens) =>
         itens.sub_type.includes('drinks')
       );
       state1(breakfast);
       state2(burgers);
       state3(drinks);
     })
     .catch(error => console.log('error', error));
}

export const SendOrder = (object) => {
  
    const idUser = localStorage.getItem("token");
    localStorage.setItem("OrderApi", JSON.stringify(object));  
    const order = localStorage.getItem("OrderApi").toString();

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `${idUser}`);
    myHeaders.append("Content-Type", "application/json");

    let raw = order;

    let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    };

    fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
     .then(response => response.text())
     .then(result => {console.log(result)
      alert("Pedido enviado a cozinha")
     })
     .catch(error => console.log('error', error));

     
  }

  export const Logout = (event) => {
    event.preventDefault();
    const history = useHistory();
    localStorage.clear();
    history.push('/');
  }