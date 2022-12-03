import '../App.css';
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from'react-router-dom'
import axios from 'axios'

const Profilepage = () => {
    const navigate = useNavigate()
    const [userObject, setUserObject] = useState({})
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [checkBox, setCheckBox] = useState("")

    useEffect(() => {
      // axios.get(`http://localhost:3001/accounts/${id}`).then((response) => {
      //   setUserObject(response.data)
      // })
      if (userObject.OptIntoPhyStatements == 1) {
        setCheckBox("checked")
      }
    }, [])

    const cancel = () => {
      navigate("/")
    }

    const edit = () => {
      
    }

  return (
    <form class="profileContainer">
    <h3>Profile Page</h3>
    <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input disabled type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">First Name</label>
      <input disabled type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Last Name</label>
      <input disabled type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Address</label>
      <input type="passtextword" class="form-control" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Email</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-check">
      <input disabled type="checkbox" class="form-check-input" id="checkBox" checked={checkBox} />
      <label class="form-check-label" for="exampleCheck1">Opt in Physical Statements</label>
    </div>
    <button onClick={edit} type="submit" class="btn btn-primary">Save</button>
    <button onClick={cancel} type="submit" class="btn btn-primary">Cancel</button>

    </form>
  )
}

export default Profilepage
