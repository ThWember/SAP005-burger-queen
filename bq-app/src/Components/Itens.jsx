
export const ItensDetails = ({eachItem}) => {
    return(
      <>
        <img className="img-menu" alt="food" src={eachItem.image}/>
        <p>{eachItem.name}</p>
        <p>R${eachItem.price}</p>
        <p>{eachItem.flavor}</p>   
        <p>{eachItem.complement}</p>
      </>
    )
};


export const OrdersDetails = ({eachItem}) => {
    return(
      <div className="orders-pending" key={Math.random()}>
        <p key={Math.random()}>Status: {eachItem.status}</p>
        <p key={Math.random()}>Mesa: {eachItem.table}</p>
        <p key={Math.random()}>Cliente: {eachItem.client_name}</p>
        <p key={Math.random()}>Data: {eachItem.createdAt.replace("T", "| Hora: ").split("Z")}</p>
        <section key={Math.random()}>Products: {
           eachItem.Products.map((eachProduct) =>{
            return(
              <ul key={Math.random()}>
                <li key={Math.random()}>Produto: {eachProduct.name}
                  <p key={Math.random()}>Quantidade: {eachProduct.qtd}</p>
                </li>
              </ul>
            )
          })
          }</section>
      </div>
    )
}