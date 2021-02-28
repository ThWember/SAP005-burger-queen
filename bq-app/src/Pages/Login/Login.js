import React, { useState } from 'react';
import HeaderPhoto from '../../Components/HeaderPhoto';
import '../../Pages/App.css';
import logo from '../../img/Logo.png';
import { useHistory, Link } from 'react-router-dom';

function Login() {

  const history = useHistory();

  function goSaloon() {
    history.push('/saloon')
  }

  function goKitchen() {
    history.push('/kitchen')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
     .then(response => response.json())
     .then(result => { console.log(result)
        const token = result.token
        localStorage.setItem('token', token)
        if(result.role === "garçom" || result.role === "Salão") {
          goSaloon();
        }
        else if(result.role === "cozinha" || result.role === "Cozinha"){
          goKitchen();
        }
      })
     .catch(error => { console.log('error', error)
        alert('Houve algum erro')
      });
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      login(email, password)
    }

   return (
    <div className="login-area"> 
      <HeaderPhoto Image={logo}/>   
      <div className="input-box">
        <div className="login-data">
          <form>
            <div className="email-data">
              <label>EMAIL</label>
              <input type="text" value={email} onChange={
                (event) => setEmail(event.target.value)}/> 
            </div>
            <div className="password-data">
              <label>SENHA</label> 
              <input type="password" autoComplete="off" value={password} onChange={
                (event) => setPassword(event.target.value)}/> 
            </div>
             <button className="login-buttom" type="submit" onClick={
               (event) => handleSubmit(event)}>ENTRAR</button>  
          </form>
          <div className="link-register">
            <Link to="/subscribe">Entrando agora para a equipe? Cadastre-se!</Link>
          </div>
        </div>
      </div>
    </div>
  )};

export default Login;