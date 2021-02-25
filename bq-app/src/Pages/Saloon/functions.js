
export const SendOrder = (name, table, idItem, qtd) => {
  const ordersApi = []
   
  let objectOrder = {"client": `${name}`,
        "table": `${table}`,
        "products": [        
        ]}

    for (let i = 0; i < idItem.length; i++){
       objectOrder.products.push({
        "id": idItem[i],
        "qtd": qtd[i]
      },)
    }

    console.log(objectOrder.products[0])
    ordersApi.push(objectOrder)
      
    localStorage.setItem("OrderApi", JSON.stringify(ordersApi));

    const idUser = localStorage.getItem("token");
    const order = localStorage.getItem("OrderApi").toString()
    const requestOrder = order.slice(1, -1)

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `${idUser}`);
    myHeaders.append("Content-Type", "application/json");

    let raw = requestOrder;

    let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
     .then(response => response.text())
     .then(result => {console.log(result)
      alert("Pedido enviado a cozinha")
     })
     .catch(error => console.log('error', error));

     
  }
