import { useHistory } from 'react-router-dom';
import { RequestApi, RequestApiBody } from '../../Services/Request';


export const GetProducts = (state1, state2, state3) => {

  const idUser = localStorage.getItem("token");
  const path = "products";
  const methodType = "GET";

  RequestApi(path, methodType, idUser) 
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
};



export const SendOrder = (object) => {
  
  const idUser = localStorage.getItem("token");
  localStorage.setItem("OrderApi", JSON.stringify(object));  
  const order = localStorage.getItem("OrderApi").toString();
  const raw = order;
  const path = "orders";
  const methodType = "POST";
   
  RequestApiBody(path, methodType, idUser, raw)
    .then(response => response.text())
    .then(result => {console.log(result)
      alert("Pedido enviado a cozinha")
    })
    .catch(error => console.log('error', error));  
};

export const Logout = (event) => {
  event.preventDefault();
  const history = useHistory();
  localStorage.clear();
  history.push('/');
};

export const Done = (state) => {
  const idUser = localStorage.getItem("token");
  const path = "orders";
  const methodType = "GET";

  RequestApi(path, methodType, idUser)
    .then(response => response.json())
    .then(result => {console.log(result) 
     const drinks = result.filter((itens) =>
     itens.status.includes('Pronto')
      );
      state(drinks)
    })
    .catch(error => console.log('error', error));
};