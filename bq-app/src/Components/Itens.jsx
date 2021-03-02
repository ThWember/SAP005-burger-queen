
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
        <p>Status: {eachItem.status}</p>
        <p>Mesa: {eachItem.table}</p>
        <p>Cliente: {eachItem.client_name}</p>
        <p>Data: {eachItem.createdAt.replace("T", " |  Hora:").split("Z")}</p>
      </div>
    )
}