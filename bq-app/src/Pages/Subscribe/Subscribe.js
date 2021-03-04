import React, { useState } from 'react';
import './Subscribe.css';
import HeaderPhoto from '../../Components/HeaderPhoto';
import burger from '../../Images/burger-logo.png'; 
import { useHistory } from 'react-router-dom';
import { RequestApiUrl } from '../../Services/Request';

  function Subscribe() {
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassord] = useState('');
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
   
    const history = useHistory();
    function goLogin() {
      history.push('/')
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
    .then(response => response.text())
    .then(result => {console.log(result)
      goLogin()
    })
    .catch(error => console.log('error', error));
  };
   
    const handleNewSubmit = (event) => {
     event.preventDefault();
     subscribe(newEmail, newPassword, role, name)
   }
   
   return (
    <div className="subscribe-area">
      <HeaderPhoto Logo={burger} />
        <div className="register-box">
          <form>
            <label>email</label>
            <input type="text" value={newEmail} onChange={(event) => setNewEmail(event.target.value)}/>
            <label>password</label>
            <input type="password" autoComplete="off" value={newPassword} onChange={(event) => setNewPassord(event.target.value)}/>
            <label>Área</label>
            <input type="text" placeholder="Cozinha ou Salão" value={role} onChange={(event) => setRole(event.target.value)}/>
            <label>Nome</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>          
            <button type="submit" onClick={(event) => handleNewSubmit(event)}>Enviar</button>
          </form>
        </div>
    </div>
)}

export default Subscribe;
