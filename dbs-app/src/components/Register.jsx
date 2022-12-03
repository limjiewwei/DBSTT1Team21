import React from "react";
import authService from '../services/authService'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Header from './Header'
const shadstyle= `
1px 2px 2px hsl(220deg 30% 50% / 0.333),
2px 4px 4px hsl(220deg 30% 50% / 0.333),
3px 6px 6px hsl(220deg 30% 50% / 0.333)`
const boxshadow={
    "height" : "50vh",
    "width": "50vh",
    "box-shadow": shadstyle,
    "position": "center",
    

}
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
    return (<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100vw' ,height: '100vh', backgroundImage: `url("https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Gardens-by-the-Bay.jpg")`}}>
    <Header/>
      <main className=" form-signin container-fluid">
        <div className="card card-body mx-auto" style={boxshadow} >
      <form >
        <div className="container-fluid mx-auto" style={{'align-items':"center", justifyContent:'center'}}>
      <img src="desktoplogo.png" className="img-responsive center-block mx-auto"/>
      </div>
      <br/>
      <br/>
        <h1 class="h6 mb-3 fw-normal">Register for a digibank account</h1>
        
        
        <div class="form-floating">
          <input type="username" class="form-control" id="floatingInput" onChange={handleChange} name="username" placeholder="name@example.com"/>
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} name="password" />
          <label for="floatingPassword">Password</label>
        </div>
    
       
        <button class="w-100 btn btn-lg btn-primary" onClick={register} type="submit">Register</button>
        <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
      </div>
    </main>
    </div>)
}


export default Register;