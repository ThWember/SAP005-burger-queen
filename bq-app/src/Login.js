import React, { useState, useEffect } from 'react';


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');
   
   const login = (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
   
    var urlencoded = new URLSearchParams();
    urlencoded.append("email",  `${email}`);
    urlencoded.append("password", `${password}`);
   
    var requestOptions = {
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
             <form>
               <label>email</label>
               <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
               <label>password</label>
               <input type="password" autoComplete="off" value={password} onChange={(event) => setPassord(event.target.value)}/>
               <button type="submit" onClick={(event) => handleSubmit(event)}>Entrar</button>
             </form>
           </div>
)}

export default Login;