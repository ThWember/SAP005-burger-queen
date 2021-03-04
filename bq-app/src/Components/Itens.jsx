import { Button } from '../Components/Button';

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

export const OrdersDetails = ({eachItem, classBtn, textBtn, orderFunction}) => {
    return(
      <div className="orders-pending" key={Math.random()}>
        <p key={Math.random()}>Status: {eachItem.status}</p>
        <p key={Math.random()}>Mesa: {eachItem.table}</p>
        <p key={Math.random()}>Cliente: {eachItem.client_name}</p>
        <p key={Math.random()}>Data: {eachItem.createdAt.slice(0,-14)}</p>
        <p key={Math.random()}>Hora: {eachItem.createdAt.slice(11, -8)}</p>
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
          <Button key={Math.random()} Class={`${classBtn}`} 
           Text={`${textBtn}`} 
           Funct={(event) => 
           orderFunction(event, eachItem.id)}
          />
      </div>
    )
}