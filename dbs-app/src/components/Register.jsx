import React from "react";
import authService from '../services/authService'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [submitted, setSubmit] = React.useState('False')
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
  const register = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:3001/api/auth/signup', {
            username: auth.username,
            password: auth.password
        });
        
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    } finally {
      navigate("/login");
    }
}
    return (<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <main class="form-signin container-fluid">
        <form>
          <img class="mb-4" src="./logo.svg" alt="" width="72" height="57"/>
          <h1 class="h3 mb-3 fw-normal">Sign up here</h1>
      
          <div class="form-floating">
            <input type="email" onChange={handleChange} name="username" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" onChange={handleChange} name="password" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
      
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" onClick={register} type="submit">Register</button>
          <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </main>
      </div>)
}


export default Register;