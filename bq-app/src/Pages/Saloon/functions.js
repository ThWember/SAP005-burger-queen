import { RequestApi, RequestApiBody } from '../../Services/Request';

export const GetProducts = (state1, state2, state3) => {
  
  const path = "products";
  const methodType = "GET";
  const idUser = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RhbmRvQGhvdG1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2MTQ5MTU0MDAsImV4cCI6MTY0NjQ3MzAwMH0.LGhyK18HoyJd1TKFNz5ulxENctrc8OegcCEPOCKjMv4"

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
    .catch(error => {console.log('error', error)
     alert("Ops! Houve um erro... Tente novamente.")
    });
};



export const SendOrder = (object) => {
  
  const idUser = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RhbmRvQGhvdG1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2MTQ5MTU0MDAsImV4cCI6MTY0NjQ3MzAwMH0.LGhyK18HoyJd1TKFNz5ulxENctrc8OegcCEPOCKjMv4"
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
    .catch(error => {console.log('error', error)
      alert("Ops! Houve um erro... Tente novamente.")
    });  
};

export const Logout = (event, hook) => {
  event.preventDefault();
  localStorage.clear();
  hook.push('/');
};

export const Done = (state) => {
  const idUser = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RhbmRvQGhvdG1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2MTQ5MTU0MDAsImV4cCI6MTY0NjQ3MzAwMH0.LGhyK18HoyJd1TKFNz5ulxENctrc8OegcCEPOCKjMv4"
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
    .catch(error => { console.log('error', error)  
     alert("Ops! Houve um erro... Tente novamente.")
    });
};

export const DeleteOrder = (idOrder) => {

  const idUser = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RhbmRvQGhvdG1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2MTQ5MTU0MDAsImV4cCI6MTY0NjQ3MzAwMH0.LGhyK18HoyJd1TKFNz5ulxENctrc8OegcCEPOCKjMv4"
  const path = `orders/${idOrder}`;
  const methodType = "DELETE";

 RequestApi(path, methodType, idUser)
  .then(response => response.text())
  .then(result => {console.log(result)
    alert("Pedido finalizado e entregue!");
    
  })
  .catch(error => {console.log('error', error)
    alert("Ops! Houve um erro... Tente novamente.")
  });
  
}