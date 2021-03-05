import { RequestApi, RequestApiBody } from '../../Services/Request';

export const KitchenRequest = (state) => {
  const idUser = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RhbmRvQGhvdG1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2MTQ5MTU0MDAsImV4cCI6MTY0NjQ3MzAwMH0.LGhyK18HoyJd1TKFNz5ulxENctrc8OegcCEPOCKjMv4"
  const path = "orders";
  const methodType = "GET";

  RequestApi(path, methodType, idUser)
    .then(response => response.json())
    .then(result => {console.log(result) 
      const pendingOrder = result.filter((itens) =>
       itens.status.includes('pending')
      );
      state(pendingOrder)
    })
    .catch(error => console.log('error', error));
};



export const UpdateOrder = (idOrder) => {
  const idUser = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RhbmRvQGhvdG1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2MTQ5MTU0MDAsImV4cCI6MTY0NjQ3MzAwMH0.LGhyK18HoyJd1TKFNz5ulxENctrc8OegcCEPOCKjMv4"
  const path = `orders/${idOrder}`;
  const methodType = "PUT";
  const raw = {"status" : "Pronto"};

  RequestApiBody(path, methodType, idUser, JSON.stringify(raw))
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
}