import React, { useState } from "react";
import "../App.css";
import HeaderPhoto from "../../Components/HeaderPhoto";
import burger from "../../Images/burger-logo.png";
import { useHistory } from "react-router-dom";
import { RequestApiUrl } from "../../Services/Request";

function Subscribe() {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassord] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const history = useHistory();
  function goLogin() {
    history.push("/");
  }

  const subscribe = (newEmail, newPassword, role, name) => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("email", `${newEmail}`);
    urlencoded.append("password", `${newPassword}`);
    urlencoded.append("role", `${role}`);
    urlencoded.append("restaurant", "Hambúrguer da Tartária");
    urlencoded.append("name", `${name}`);
    const path = "users";
    const methodType = "POST";

    RequestApiUrl(path, methodType, urlencoded)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        goLogin();
      })
      .catch((error) => {
        console.log("error", error);
        alert("Ops, houve algum erro... Tente novamente.", error);
      });
  };

  const handleNewSubmit = (event) => {
    event.preventDefault();
    subscribe(newEmail, newPassword, role, name);
  };

  return (
    <div className="subscribe-area">
      <HeaderPhoto Logo={burger} />
      <div className="register-box">
        <div className="subscribe-data">
          <form>
            <div className="email-sub-data">
              <label>EMAIL</label>
              <input
                type="text"
                placeholder="Insira seu email"
                value={newEmail}
                onChange={(event) => setNewEmail(event.target.value)}
              />
            </div>
            <div className="password-sub-data">
              <label>SENHA</label>
              <input
                type="password"
                placeholder="Insira sua senha"
                autoComplete="off"
                value={newPassword}
                onChange={(event) => setNewPassord(event.target.value)}
              />
            </div>
            <div className="type-sub-data">
              <label>ÁREA</label>
              <input
                type="text"
                placeholder="Cozinha ou Salão"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              />
            </div>
            <div className="name-sub-data">
              <label>NOME</label>
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <button
              className="subscribe-buttom"
              type="submit"
              onClick={(event) => handleNewSubmit(event)}
            >
              CADASTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
