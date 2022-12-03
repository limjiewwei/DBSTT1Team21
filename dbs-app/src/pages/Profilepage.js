import '../App.css';
import { useState, useContext } from 'react'
import { useNavigate } from'react-router-dom'
import axios from 'axios'

const Profilepage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [optIn, setOptIn] = useState("")

  return (
    <form class="profileContainer">
    <h3>Profile Page</h3>
    <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">First Name</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Last Name</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Address</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Email</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Opt in ..</label>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="submit" class="btn btn-primary">Cancel</button>

    </form>
  )
}

export default Profilepage
