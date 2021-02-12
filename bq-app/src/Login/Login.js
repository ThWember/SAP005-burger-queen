import React, { useState } from 'react';
import Header from '../Components/Header'
import './Login.css'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
   
  const login = (email, password) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
   
    let urlencoded = new URLSearchParams();
    urlencoded.append("email",  `${email}`);
    urlencoded.append("password", `${password}`);
   
    let requestOptions = {
       method: 'POST',
       headers: myHeaders,
       body: urlencoded,
       redirect: 'follow'
  };
   
   fetch("https://lab-api-bq.herokuapp.com/auth", requestOptions)
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', error));
   }
   
   
   
    const handleSubmit = (event) => {
      event.preventDefault();
      login(email, password)
    }

   return (
    <div className="login-area"> 
      <Header />
      <div className="input-box">
          <form>
            <label>email</label>
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/> 
            <label>password</label>
            <input type="password" autoComplete="off" value={password} onChange={(event) => setPassord(event.target.value)}/>
            <button type="submit" onClick={(event) => handleSubmit(event)}>Entrar</button>
          </form>
       </div>
    </div>
)}

export default Login;