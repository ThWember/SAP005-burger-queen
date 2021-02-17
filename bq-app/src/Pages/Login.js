import React, { useState } from 'react';
import HeaderPhoto from '../Components/HeaderPhoto';
import './App.css';
import burguer from '../img/burguer.jpg';
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
     .then(response => response.json())
     .then(result => { console.log(result)
        const token = result.token
        localStorage.getItem('token', token)
        if(result.role == "salão" || result.role == "Salão") {
          goSaloon();
        }
        else if(result.role == "cozinha" || result.role == "Cozinha"){
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
      <HeaderPhoto Image={burguer}/>   
      <div className="input-box">
          <form>
            <label>email</label>
             <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/> 
             <label>password</label> 
             <input type="password" autoComplete="off" value={password} onChange={(event) => setPassord(event.target.value)}/> 
             <button type="submit" onClick={(event) => handleSubmit(event)}>Entrar</button>  
          </form>
          <div className="link-register"><Link to="/subscribe">Entrando agora para a equipe? Cadastre-se!</Link></div>
       </div>
    </div>
  )};

export default Login;