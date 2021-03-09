import "../App.css";
import {
  SendOrder,
  GetProducts,
  Logout,
  DeleteOrder,
  Done,
  handleItem,
  decreaseItem,
  deleteItem,
  addComplement,
  deleteComplement
} from "./functions";
import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import { Button } from "../../Components/Button";
import shield from "../../Images/shield.png";
import { useHistory } from "react-router-dom";
import { ItensDetails, BurgersDetails } from "../../Components/Itens";

function Saloon() {
  const [breakfast, setBreakfast] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [client, setClient] = useState("");
  const [table, setTable] = useState("");
  const [products, setProducts] = useState([]);
  const [done, setDone] = useState([]);
  let [counter, setCounter] = useState(1);
  const history = useHistory();

  let objectOrder = {
    client: `${client}`,
    table: `${table}`,
    products: [],
  };
  const value = [];

  useEffect(() => {
    GetProducts(setBreakfast, setBurgers, setDrinks);
  }, []);

  useEffect(() => {
    Done(setDone);
  }, []);

  const handleConfirm = (event) => {
    event.preventDefault();
    SendOrder(objectOrder);
  };

  const handleFinish = (event, idOrder) => {
    event.preventDefault();
    DeleteOrder(idOrder);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        {
          <>
            <div className="menu">
              <div className="section-menu">
                <p className="subtype-menu">CAFÉ DA MANHÃ</p>
                {breakfast.map((i) => {
                  return (
                    <div
                      className="each-section"
                      key={i.id}
                      onClick={() =>
                        handleItem(client, table, i, products, setProducts)
                      }
                    >
                      <img className="img-shield" alt="shield" src={shield} />
                      <section className="each-item">
                        <ItensDetails eachItem={i} />
                      </section>
                    </div>
                  );
                })}
              </div>

              <div className="section-menu">
                <p className="subtype-menu">HAMBÚRGUERES</p>{" "}
                {burgers.map((i) => {
                  return (
                    <div
                      className="each-section"
                      key={i.id}
                      onClick={() => {
                        handleItem(client, table, i, products, setProducts);
                      }}
                    >
                      <img className="img-shield" alt="shield" src={shield} />
                      <section className="each-item">
                        <BurgersDetails eachItem={i} />
                      </section>
                    </div>
                  );
                })}
              </div>

              <div className="section-menu">
                <p className="subtype-menu">BEBIDAS</p>{" "}
                {drinks.map((i) => {
                  return (
                    <div
                      className="each-section"
                      key={i.id}
                      onClick={() =>
                        handleItem(client, table, i, products, setProducts)
                      }
                    >
                      <img className="img-shield" alt="shield" src={shield} />
                      <section className="each-item">
                        <ItensDetails eachItem={i} />
                      </section>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sum-area">
              <Button
                Class={"logout-button"}
                Text={"SAIR"}
                Funct={(event) => Logout(event, history)}
              />
              <div className="done-box">
                {" "}
                {done !== undefined &&
                  done.map((i) => (
                    <Button
                      Class={"done-button"}
                      Text={`Pedido da mesa ${i.table} pronto`}
                      Funct={(event) => handleFinish(event, i.id)}
                    />
                  ))}
              </div>

              <div className="table-info">
                <input
                  type="text"
                  value={client}
                  onChange={(event) => setClient(event.target.value)}
                  placeholder="Nome do cliente"
                />
                <input
                  type="text"
                  value={table}
                  onChange={(event) => setTable(event.target.value)}
                  placeholder="Mesa"
                />
              </div>

              <div className="choose-itens">
                {products.length !== 0 &&
                  products.map((i, index) => {
                    let objectOrderItems = {
                      id: i.id,
                      qtd: i.qtd,
                    };
                    objectOrder.products.push(objectOrderItems);
                    value.push(i.totalPrice);
                    const total = value.reduce((sum, num) => sum + num, 0);
                    localStorage.setItem("total", total);

                    return (
                      <div>
                        <div className="each-item-choose" key={index}>
                          <p>
                            {i.name} -
                            {Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(i.price)}
                          </p>
                        </div>
                        <div className="extra-options-container">
                          <section className="extra-options-order">
                            <Button
                              Class={"qtd-button"}
                              Text={" + "}
                              Funct={(event) => {
                                event.preventDefault();
                                handleItem(
                                  client,
                                  table,
                                  i,
                                  products,
                                  setProducts
                                );
                              }}
                            />
                            Quantidade [{i.qtd}]
                            <Button
                              Class={"qtd-button"}
                              Text={" - "}
                              Funct={(event) =>
                                decreaseItem(event, i, products, setProducts)
                              }
                            />
                          </section>

                          {i.complement !== null ? (
                            <>
                              <section className="extra-options-order">
                                <Button
                                  key={Math.random()}
                                  Class={"qtd-button"}
                                  Text={" + "}
                                  Funct={(event) => {
                                    addComplement(
                                      event,
                                      counter,
                                      setCounter,
                                      i,
                                      products,
                                      setProducts
                                    );
                                  }}
                                />
                                Extra: {i.complement} [{counter}]
                                <Button
                                  key={Math.random()}
                                  Class={"qtd-button"}
                                  Text={" - "}
                                  Funct={(event) => deleteComplement(
                                    event,
                                      counter,
                                      setCounter,
                                      i,
                                      products,
                                      setProducts
                                  )}
                                />
                              </section>

                              <section className="extra-options-order">
                                <Button
                                  key={Math.random()}
                                  Class={"delete-button"}
                                  Text={" x "}
                                  Funct={(event) =>
                                    deleteItem(event, i, products, setProducts)
                                  }
                                />
                              </section>
                            </>
                          ) : (
                            <p></p>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="total-box">
                <p className="total-word">TOTAL </p>
                <p>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(localStorage.getItem("total"))}
                </p>
              </div>
              <Button
                Class={"confirm-button"}
                Text={"Confirmar"}
                Funct={(event) => handleConfirm(event)}
              />
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default Saloon;
