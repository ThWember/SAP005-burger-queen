//import React from 'react';

export const SendOrder = (name, table, itens, idItem) => {
    const ordersMade = []
    ordersMade.push({"Cliente": name,
                     "Mesa": table,
                     "Produtos": [itens]
                     })
    localStorage.setItem("OrdersShow", JSON.stringify(ordersMade))

    const ordersApi = []
    ordersApi.push({"client": `${name}`,
        "table": `${table}`,
        "products": [{
            "id": idItem,
            "qtd": 1
          }]
        })
    localStorage.setItem("OrderApi", JSON.stringify(ordersApi))

    alert("Pedido enviado a cozinha")
  }

    
// export const Loading = ({Icon, Class}) => {
//     if({Class}.length === 0){  
//      return <img className="loading-img" src={Icon} alt="loading"/>
//     } 
// }