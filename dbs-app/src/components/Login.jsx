import React from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import setAuthToken from "../setAuthToken"
import Header from './Header';
function Login() {
  const navigate = useNavigate();
  const [msg, setMsg] = React.useState('');
  const [auth, setAuth] = React.useState({
    username: "",
    password: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setAuth(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  const login = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:3001/api/auth/login', {
            username: auth.username,
            password: auth.password
        })
        .then(response=>{
          if (!response.data.accessToken){
            navigate("/login")
          }
          else {
          const token = response.data.accessToken;
          localStorage.setItem("token", token);
          setAuthToken(token);
          }
        });
        
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    } finally {
      navigate("/");
    }
}
    return (<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Header/>
        <main class="form-signin container-fluid">
        <form>
          <img class="mb-4" src="./logo.svg" alt="" width="72" height="57"/>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      
          <div class="form-floating">
            <input type="username" class="form-control" id="floatingInput" onChange={handleChange} name="username" placeholder="name@example.com"/>
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} name="password" />
            <label for="floatingPassword">Password</label>
          </div>
      
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" onClick={login} type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </main>
      </div>)
}


export default Login;