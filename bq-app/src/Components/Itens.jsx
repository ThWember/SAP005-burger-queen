import { Button } from "../Components/Button";

export const ItensDetails = ({ eachItem }) => {
  return (
    <>
      <img className="img-menu" alt="food" src={eachItem.image} />
      <p>{eachItem.name}</p>
      <p>{eachItem.flavor}</p>
      <p>R$ {eachItem.price}</p>
    </>
  );
};

export const BurgersDetails = ({ eachItem }) => {
  return (
    <>
      <img className="img-menu" alt="food" src={eachItem.image} />
      <p>{eachItem.name}</p>
      <p>de {eachItem.flavor}</p>
      <p>R$ {eachItem.price}</p>
    </>
  );
};

export const OrdersDetails = ({
  eachItem,
  classBtn,
  textBtn,
  orderFunction,
}) => {
  return (
    <div className="orders-pending">
      <p>Status: {eachItem.status}</p>
      <p>Mesa: {eachItem.table}</p>
      <p>Cliente: {eachItem.client_name}</p>
      <p>Data: {eachItem.createdAt.slice(0, -14)}</p>
      <p>Hora: {eachItem.createdAt.slice(11, -8)}</p>
      <ul>
        Produtos:{" "}
        {eachItem.Products.map((eachProduct) => {
          return (
            <>
            <li>
              {eachProduct.name}
              <p>Qtd: {eachProduct.qtd}</p>
            </li>
           
          </>
          );
        })}
      </ul>
      <Button
        Class={`${classBtn}`}
        Text={`${textBtn}`}
        Funct={(event) => orderFunction(event, eachItem.id)}
      />
    </div>
  );
};
