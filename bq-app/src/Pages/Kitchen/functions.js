
export const KitchenRequest = (state) => {
    const idUser = localStorage.getItem("token");
    let requestOptions = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `${idUser}`
      },
      redirect: 'follow'
    };

  fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)
      
      state(result)
    })
    .catch(error => console.log('error', error));
};

export const UpdateOrder = (idOrder) => {
  const idUser = localStorage.getItem("token");

  let raw = {"status" : "Pronto"}
  let requestOptions = {
     method: 'GET',
     method: 'PUT',
     headers: { 
     'Content-Type': 'application/json',
     'Authorization': `${idUser}`
  },
  body: JSON.stringify(raw)
 };

 fetch(`https://lab-api-bq.herokuapp.com/orders/${idOrder}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}