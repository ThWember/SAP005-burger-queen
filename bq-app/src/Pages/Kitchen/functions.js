import { RequestApi, RequestApiBody } from '../../Services/Request';

export const KitchenRequest = (state) => {
  const idUser = localStorage.getItem("token");
  const path = "orders";
  const methodType = "GET";

  RequestApi(path, methodType, idUser)
    .then(response => response.json())
    .then(result => {console.log(result) 
      state(result)
    })
    .catch(error => console.log('error', error));
};



export const UpdateOrder = (idOrder) => {
  const idUser = localStorage.getItem("token");
  const path = `orders/${idOrder}`;
  const methodType = "PUT";
  const raw = {"status" : "Pronto"};

  RequestApiBody(path, methodType, idUser, JSON.stringify(raw))
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
}